// Contract ABI
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "claimId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isApproved",
                "type": "bool"
            }
        ],
        "name": "ClaimProcessed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "claimId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "ClaimSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "coverageAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "premiumAmount",
                "type": "uint256"
            }
        ],
        "name": "PolicyCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "expiryTime",
                "type": "uint256"
            }
        ],
        "name": "PolicyPurchased",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_policyId",
                "type": "uint256"
            }
        ],
        "name": "buyPolicy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_coverageAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_premiumAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_duration",
                "type": "uint256"
            }
        ],
        "name": "createPolicy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getClaimCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoliciesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserPoliciesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "policies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "coverageAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "premiumAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_claimId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_approve",
                "type": "bool"
            }
        ],
        "name": "processClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_policyId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            }
        ],
        "name": "submitClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userPolicies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "policyId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expiryTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "hasActiveClaim",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Contract address on Sepolia testnet
const contractAddress = '0xd0ca12d58a449b888deac27e942e6d109990d5b6';

let contract;
let provider;
let signer;
let userAddress;
let isAdmin = false;

// Initialize the application
async function init() {
    // Setup event listeners
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('getStarted').addEventListener('click', () => navigateTo('policies'));
    document.getElementById('createPolicyBtn').addEventListener('click', showCreatePolicyModal);
    document.getElementById('withdrawFundsBtn').addEventListener('click', withdrawFunds);
    document.getElementById('claimForm').addEventListener('submit', submitClaim);
    document.getElementById('createPolicyForm').addEventListener('submit', createPolicy);
    
    // Setup navigation
    setupNavigation();
    
    // Setup modal
    setupModal();
}

// Connect to MetaMask wallet
async function connectWallet() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this application');
            return;
        }

        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        // Setup ethers provider and signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Check if user is admin
        const owner = await contract.owner();
        isAdmin = owner.toLowerCase() === userAddress.toLowerCase();

        // Update UI
        document.getElementById('connectWallet').textContent = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = isAdmin ? 'block' : 'none';
        });

        // Load initial data
        loadPolicies();
        if (isAdmin) {
            loadClaims();
        }

        // Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Error connecting wallet. Please try again.');
    }
}

// Handle account changes
async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // User disconnected their wallet
        userAddress = null;
        document.getElementById('connectWallet').textContent = 'Connect Wallet';
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        // User switched accounts
        userAddress = accounts[0];
        document.getElementById('connectWallet').textContent = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        await connectWallet();
    }
}

// Navigation setup
function setupNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateTo(page);
        });
    });
}

// Navigate to a specific page
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Load page-specific data
    switch (page) {
        case 'policies':
            loadPolicies();
            break;
        case 'my-policies':
            loadUserPolicies();
            break;
        case 'admin':
            if (isAdmin) {
                loadClaims();
            }
            break;
    }
}

// Load available policies
async function loadPolicies() {
    try {
        const policiesList = document.getElementById('policiesList');
        policiesList.innerHTML = '';

        const policyCount = await contract.getPoliciesCount();
        
        for (let i = 0; i < policyCount; i++) {
            const policy = await contract.policies(i);
            if (policy.isActive) {
                const policyCard = createPolicyCard(policy, i);
                policiesList.appendChild(policyCard);
            }
        }
    } catch (error) {
        console.error('Error loading policies:', error);
        alert('Error loading policies. Please try again.');
    }
}

// Create policy card element
function createPolicyCard(policy, policyId) {
    const card = document.createElement('div');
    card.className = 'policy-card';
    
    card.innerHTML = `
        <h3>${policy.name}</h3>
        <div class="policy-details">
            <p>Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH</p>
            <p>Premium: ${ethers.utils.formatEther(policy.premiumAmount)} ETH</p>
            <p>Duration: ${policy.duration} days</p>
        </div>
        <button class="buy-policy-btn" data-policy-id="${policyId}">Buy Policy</button>
    `;

    card.querySelector('.buy-policy-btn').addEventListener('click', () => buyPolicy(policyId));
    
    return card;
}

// Buy a policy
async function buyPolicy(policyId) {
    try {
        const policy = await contract.policies(policyId);
        const tx = await contract.buyPolicy(policyId, { value: policy.premiumAmount });
        await tx.wait();
        
        alert('Policy purchased successfully!');
        loadPolicies();
        loadUserPolicies();
    } catch (error) {
        console.error('Error buying policy:', error);
        alert('Error buying policy. Please try again.');
    }
}

// Load user's policies
async function loadUserPolicies() {
    try {
        const myPoliciesList = document.getElementById('myPoliciesList');
        myPoliciesList.innerHTML = '';

        const policyCount = await contract.getUserPoliciesCount(userAddress);
        
        for (let i = 0; i < policyCount; i++) {
            const userPolicy = await contract.userPolicies(userAddress, i);
            const policy = await contract.policies(userPolicy.policyId);
            
            const policyCard = document.createElement('div');
            policyCard.className = 'policy-card';
            
            const expiryDate = new Date(userPolicy.expiryTime * 1000);
            const status = userPolicy.hasActiveClaim ? 'Claim Pending' : 
                          (Date.now() > expiryDate ? 'Expired' : 'Active');
            
            policyCard.innerHTML = `
                <h3>${policy.name}</h3>
                <div class="policy-details">
                    <p>Coverage: ${ethers.utils.formatEther(policy.coverageAmount)} ETH</p>
                    <p>Expiry: ${expiryDate.toLocaleDateString()}</p>
                    <p>Status: <span class="status status-${status.toLowerCase()}">${status}</span></p>
                </div>
            `;
            
            myPoliciesList.appendChild(policyCard);
        }
    } catch (error) {
        console.error('Error loading user policies:', error);
        alert('Error loading your policies. Please try again.');
    }
}

// Submit a claim
async function submitClaim(e) {
    e.preventDefault();
    
    try {
        const policyId = document.getElementById('policySelect').value;
        const reason = document.getElementById('claimReason').value;
        
        const tx = await contract.submitClaim(policyId, reason);
        await tx.wait();
        
        alert('Claim submitted successfully!');
        document.getElementById('claimForm').reset();
        loadUserPolicies();
    } catch (error) {
        console.error('Error submitting claim:', error);
        alert('Error submitting claim. Please try again.');
    }
}

// Load claims (admin only)
async function loadClaims() {
    try {
        const claimsList = document.getElementById('claimsList');
        claimsList.innerHTML = '';

        const claimCount = await contract.getClaimCount();
        
        for (let i = 0; i < claimCount; i++) {
            const claim = await contract.claims(i);
            if (!claim.isApproved && !claim.isRejected) {
                const policy = await contract.policies(claim.policyId);
                
                const claimCard = document.createElement('div');
                claimCard.className = 'claim-card';
                
                claimCard.innerHTML = `
                    <h3>Claim #${claim.id}</h3>
                    <div class="claim-details">
                        <p>User: ${claim.user}</p>
                        <p>Policy: ${policy.name}</p>
                        <p>Reason: ${claim.reason}</p>
                        <p>Submitted: ${new Date(claim.timestamp * 1000).toLocaleString()}</p>
                    </div>
                    <div class="claim-actions">
                        <button class="admin-button approve-btn" data-claim-id="${claim.id}">Approve</button>
                        <button class="admin-button reject-btn" data-claim-id="${claim.id}">Reject</button>
                    </div>
                `;
                
                claimCard.querySelector('.approve-btn').addEventListener('click', () => processClaim(claim.id, true));
                claimCard.querySelector('.reject-btn').addEventListener('click', () => processClaim(claim.id, false));
                
                claimsList.appendChild(claimCard);
            }
        }
    } catch (error) {
        console.error('Error loading claims:', error);
        alert('Error loading claims. Please try again.');
    }
}

// Process a claim (admin only)
async function processClaim(claimId, approve) {
    try {
        const tx = await contract.processClaim(claimId, approve);
        await tx.wait();
        
        alert(`Claim ${approve ? 'approved' : 'rejected'} successfully!`);
        loadClaims();
    } catch (error) {
        console.error('Error processing claim:', error);
        alert('Error processing claim. Please try again.');
    }
}

// Show create policy modal
function showCreatePolicyModal() {
    document.getElementById('createPolicyModal').style.display = 'block';
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('createPolicyModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Create a new policy (admin only)
async function createPolicy(e) {
    e.preventDefault();
    
    try {
        const name = document.getElementById('policyName').value;
        const coverageAmount = ethers.utils.parseEther(document.getElementById('coverageAmount').value);
        const premiumAmount = ethers.utils.parseEther(document.getElementById('premiumAmount').value);
        const duration = document.getElementById('duration').value;
        
        const tx = await contract.createPolicy(name, coverageAmount, premiumAmount, duration);
        await tx.wait();
        
        alert('Policy created successfully!');
        document.getElementById('createPolicyForm').reset();
        document.getElementById('createPolicyModal').style.display = 'none';
        loadPolicies();
    } catch (error) {
        console.error('Error creating policy:', error);
        alert('Error creating policy. Please try again.');
    }
}

// Withdraw funds (admin only)
async function withdrawFunds() {
    try {
        const tx = await contract.withdrawFunds();
        await tx.wait();
        
        alert('Funds withdrawn successfully!');
    } catch (error) {
        console.error('Error withdrawing funds:', error);
        alert('Error withdrawing funds. Please try again.');
    }
}

// Initialize the application when the page loads
window.addEventListener('load', init); 