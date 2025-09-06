// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsurancePolicy {
    address public owner;
    
    struct Policy {
        uint256 id;
        string name;
        uint256 coverageAmount;
        uint256 premiumAmount;
        uint256 duration; // in days
        bool isActive;
    }
    
    struct UserPolicy {
        uint256 policyId;
        uint256 startTime;
        uint256 expiryTime;
        bool hasActiveClaim;
    }
    
    struct Claim {
        uint256 id;
        address user;
        uint256 policyId;
        string reason;
        uint256 timestamp;
        bool isApproved;
        bool isRejected;
    }
    
    Policy[] public policies;
    mapping(address => UserPolicy[]) public userPolicies;
    mapping(uint256 => Claim) public claims;
    uint256 public claimCount;
    
    event PolicyCreated(uint256 indexed policyId, string name, uint256 coverageAmount, uint256 premiumAmount);
    event PolicyPurchased(address indexed user, uint256 indexed policyId, uint256 startTime, uint256 expiryTime);
    event ClaimSubmitted(uint256 indexed claimId, address indexed user, uint256 indexed policyId, string reason);
    event ClaimProcessed(uint256 indexed claimId, bool isApproved);
    event FundsWithdrawn(address indexed owner, uint256 amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function createPolicy(
        string memory _name,
        uint256 _coverageAmount,
        uint256 _premiumAmount,
        uint256 _duration
    ) public onlyOwner {
        uint256 policyId = policies.length;
        policies.push(Policy({
            id: policyId,
            name: _name,
            coverageAmount: _coverageAmount,
            premiumAmount: _premiumAmount,
            duration: _duration,
            isActive: true
        }));
        
        emit PolicyCreated(policyId, _name, _coverageAmount, _premiumAmount);
    }
    
    function buyPolicy(uint256 _policyId) public payable {
        require(_policyId < policies.length, "Invalid policy ID");
        Policy storage policy = policies[_policyId];
        require(policy.isActive, "Policy is not active");
        require(msg.value >= policy.premiumAmount, "Insufficient premium amount");
        
        uint256 startTime = block.timestamp;
        uint256 expiryTime = startTime + (policy.duration * 1 days);
        
        userPolicies[msg.sender].push(UserPolicy({
            policyId: _policyId,
            startTime: startTime,
            expiryTime: expiryTime,
            hasActiveClaim: false
        }));
        
        emit PolicyPurchased(msg.sender, _policyId, startTime, expiryTime);
    }
    
    function submitClaim(uint256 _policyId, string memory _reason) public {
        require(_policyId < policies.length, "Invalid policy ID");
        
        // Check if user has this policy
        bool hasPolicy = false;
        uint256 userPolicyIndex;
        
        for (uint256 i = 0; i < userPolicies[msg.sender].length; i++) {
            if (userPolicies[msg.sender][i].policyId == _policyId) {
                hasPolicy = true;
                userPolicyIndex = i;
                break;
            }
        }
        
        require(hasPolicy, "You don't have this policy");
        require(!userPolicies[msg.sender][userPolicyIndex].hasActiveClaim, "You already have an active claim");
        require(block.timestamp <= userPolicies[msg.sender][userPolicyIndex].expiryTime, "Policy has expired");
        
        uint256 claimId = claimCount++;
        claims[claimId] = Claim({
            id: claimId,
            user: msg.sender,
            policyId: _policyId,
            reason: _reason,
            timestamp: block.timestamp,
            isApproved: false,
            isRejected: false
        });
        
        userPolicies[msg.sender][userPolicyIndex].hasActiveClaim = true;
        
        emit ClaimSubmitted(claimId, msg.sender, _policyId, _reason);
    }
    
    function processClaim(uint256 _claimId, bool _approve) public onlyOwner {
        require(_claimId < claimCount, "Invalid claim ID");
        Claim storage claim = claims[_claimId];
        require(!claim.isApproved && !claim.isRejected, "Claim already processed");
        
        if (_approve) {
            claim.isApproved = true;
            Policy storage policy = policies[claim.policyId];
            payable(claim.user).transfer(policy.coverageAmount);
        } else {
            claim.isRejected = true;
        }
        
        // Reset hasActiveClaim flag
        for (uint256 i = 0; i < userPolicies[claim.user].length; i++) {
            if (userPolicies[claim.user][i].policyId == claim.policyId) {
                userPolicies[claim.user][i].hasActiveClaim = false;
                break;
            }
        }
        
        emit ClaimProcessed(_claimId, _approve);
    }
    
    function withdrawFunds() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner).transfer(balance);
        emit FundsWithdrawn(owner, balance);
    }
    
    function getPoliciesCount() public view returns (uint256) {
        return policies.length;
    }
    
    function getUserPoliciesCount(address _user) public view returns (uint256) {
        return userPolicies[_user].length;
    }
    
    function getClaimCount() public view returns (uint256) {
        return claimCount;
    }
} 