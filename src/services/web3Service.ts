import type { InsurancePolicy } from '@/types/contracts';
import { INSURANCE_CONTRACT_ABI, INSURANCE_CONTRACT_ADDRESS } from '@/config/contracts';

// Dynamic imports to avoid CSP issues
let ethers: any;
const loadEthers = async () => {
    if (!ethers) {
        ethers = await import('ethers');
    }
    return ethers;
};

// Type imports for TypeScript
type BrowserProvider = import('ethers').BrowserProvider;
type JsonRpcSigner = import('ethers').JsonRpcSigner;
type Contract = import('ethers').Contract;
type ContractTransactionResponse = import('ethers').ContractTransactionResponse;

// Helper functions to handle ethers formatting
const getFormatEther = async () => {
    const { formatEther } = await loadEthers();
    return formatEther;
};

const getParseEther = async () => {
    const { parseEther } = await loadEthers();
    return parseEther;
};

declare global {
    interface Window {
        ethereum?: any;
    }
}

class Web3Service {
    private provider: BrowserProvider | null = null;
    private signer: JsonRpcSigner | null = null;
    private contract: InsurancePolicy | null = null;
    private userAddress: string | null = null;
    private readonly EXPECTED_CHAIN_ID = '0xaa36a7'; // Sepolia testnet

    async connect() {
        try {
            if (typeof window.ethereum === 'undefined') {
                throw new Error('Please install MetaMask to connect your wallet');
            }

            // Request account access and handle user rejection
            let accounts;
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error: any) {
                if (error.code === 4001) {
                    throw new Error('Please allow access to your wallet');
                }
                throw new Error('Failed to connect to your wallet');
            }

            if (!accounts || accounts.length === 0) {
                throw new Error('Please unlock your MetaMask wallet');
            }

            // Check and switch network if needed
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            console.log('Current chain ID:', chainId);
            console.log('Expected chain ID:', this.EXPECTED_CHAIN_ID);
            
            if (chainId !== this.EXPECTED_CHAIN_ID) {
                console.log('Network mismatch, attempting to switch...');
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: this.EXPECTED_CHAIN_ID }],
                    });
                    console.log('Successfully switched to Sepolia');
                } catch (switchError: any) {
                    console.error('Error switching network:', switchError);
                    // This error code indicates that the chain has not been added to MetaMask
                    if (switchError.code === 4902) {
                        console.log('Sepolia not found in wallet, attempting to add...');
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: this.EXPECTED_CHAIN_ID,
                                    chainName: 'Sepolia Test Network',
                                    nativeCurrency: {
                                        name: 'Sepolia ETH',
                                        symbol: 'ETH',
                                        decimals: 18
                                    },
                                    rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/demo'],
                                    blockExplorerUrls: ['https://sepolia.etherscan.io']
                                }]
                            });
                            console.log('Successfully added Sepolia network');
                        } catch (addError) {
                            console.error('Error adding Sepolia:', addError);
                            throw new Error('Please add and switch to Sepolia network in MetaMask');
                        }
                    } else {
                        throw new Error('Please switch to Sepolia network in MetaMask');
                    }
                }
            } else {
                console.log('Already on Sepolia network');
            }

            // Initialize provider and signer
            console.log('Initializing provider and signer...');
            const { BrowserProvider, Contract } = await loadEthers();
            this.provider = new BrowserProvider(window.ethereum);
            this.userAddress = accounts[0];
            console.log('Connected wallet address:', this.userAddress);
            this.signer = await this.provider.getSigner();
            console.log('Signer initialized');
            
            // Create contract instance
            this.contract = new Contract(
                INSURANCE_CONTRACT_ADDRESS,
                INSURANCE_CONTRACT_ABI,
                this.signer
            ) as unknown as InsurancePolicy;

            // Verify we can access the contract
            try {
                console.log('Verifying contract at address:', INSURANCE_CONTRACT_ADDRESS);
                
                // First verify chain ID
                const chainId = await this.provider.getNetwork();
                console.log('Current network:', chainId);

                // Check contract existence
                const code = await this.provider.getCode(INSURANCE_CONTRACT_ADDRESS);
                console.log('Contract bytecode length:', code.length);
                console.log('First 64 chars of bytecode:', code.slice(0, 64));
                
                if (code === '0x' || code === '0x0') {
                    console.error('No bytecode found at address');
                    throw new Error('Contract not found at the specified address');
                }

                // Try to get contract owner
                console.log('Attempting to access owner property...');
                const owner = await this.contract.owner;
                console.log('Contract owner:', owner);
                
                // Additional verification
                const contractBalance = await this.provider.getBalance(INSURANCE_CONTRACT_ADDRESS);
                console.log('Contract balance:', contractBalance.toString());
                
            } catch (error: any) {
                console.error('Detailed error:', error);
                if (error.message.includes('contract not found')) {
                    throw new Error(`Contract not found at address ${INSURANCE_CONTRACT_ADDRESS}. Please verify the contract is deployed on Sepolia network.`);
                } else {
                    throw new Error(`Failed to connect to the insurance contract: ${error.message}`);
                }
            }

            // Listen for account and chain changes
            window.ethereum.on('accountsChanged', this.handleAccountChange.bind(this));
            window.ethereum.on('chainChanged', () => window.location.reload());

            return this.userAddress;
        } catch (error: any) {
            // Clean up state in case of error
            this.provider = null;
            this.signer = null;
            this.contract = null;
            this.userAddress = null;
            throw error;
        }
    }

    private async handleAccountChange(accounts: string[]) {
        if (accounts.length === 0) {
            // User disconnected their wallet
            this.provider = null;
            this.signer = null;
            this.contract = null;
            this.userAddress = null;
        } else {
            // Update the user address and reconnect
            this.userAddress = accounts[0];
            try {
                if (this.provider) {
                this.signer = await this.provider.getSigner();
            }
                if (this.signer) {
                    const { Contract } = await loadEthers();
                    this.contract = new Contract(
                        INSURANCE_CONTRACT_ADDRESS,
                        INSURANCE_CONTRACT_ABI,
                        this.signer
                    ) as InsurancePolicy;
                }
            } catch (error) {
                console.error('Error updating wallet connection:', error);
                this.provider = null;
                this.signer = null;
                this.contract = null;
                this.userAddress = null;
            }
        }
    }

    async isConnected(): Promise<boolean> {
        return !!this.userAddress;
    }

    async isAdmin(): Promise<boolean> {
        try {
            if (!this.contract || !this.userAddress) return false;
            const owner = await this.contract.owner;
            return owner.toLowerCase() === this.userAddress.toLowerCase();
        } catch (error) {
            console.error('Error checking admin status:', error);
            return false;
        }
    }

    async getPolicies() {
        if (!this.contract) throw new Error('Not connected');
        const policyCount = await this.contract.getPoliciesCount();
        const policies = [];
        
        for (let i = 0; i < Number(policyCount); i++) {
            const policy = await this.contract.policies(i);
            if (policy.isActive) {
                const formatEther = await getFormatEther();
                policies.push({
                    id: Number(policy.id),
                    name: policy.name,
                    coverageAmount: formatEther(policy.coverageAmount),
                    premiumAmount: formatEther(policy.premiumAmount),
                    duration: Number(policy.duration),
                    isActive: policy.isActive
                });
            }
        }
        
        return policies;
    }

    async getUserPolicies() {
        if (!this.contract || !this.userAddress) throw new Error('Not connected');
        const policyCountBN = await this.contract.getUserPoliciesCount(this.userAddress);
        const policyCount = Number(policyCountBN);
        const policies = [];
        
        for (let i = 0; i < policyCount; i++) {
            const userPolicy = await this.contract.userPolicies(this.userAddress, i);
            const policy = await this.contract.policies(userPolicy.policyId);
            
            const formatEther = await getFormatEther();
            policies.push({
                id: userPolicy.policyId.toNumber(),
                name: policy.name,
                coverageAmount: formatEther(policy.coverageAmount),
                premiumAmount: formatEther(policy.premiumAmount),
                startTime: userPolicy.startTime.toNumber(),
                expiryTime: userPolicy.expiryTime.toNumber(),
                hasActiveClaim: userPolicy.hasActiveClaim
            });
        }
        
        return policies;
    }

    async buyPolicy(policyId: number, premiumAmount: string) {
        if (!this.contract) throw new Error('Not connected');
        const parseEther = await getParseEther();
        const tx: ContractTransactionResponse = await this.contract.buyPolicy(policyId, { 
            value: parseEther(premiumAmount)
        });
        const receipt = await tx.wait();
        return receipt;
    }

    async submitClaim(policyId: number, reason: string) {
        if (!this.contract) throw new Error('Not connected');
        const tx = await this.contract.submitClaim(policyId, reason);
        const receipt = await tx.wait();
        return receipt;
    }

    async getClaims() {
        if (!this.contract) throw new Error('Not connected');
        const claimCount = await this.contract.getClaimCount();
        const claims = [];
        
        for (let i = 0; i < Number(claimCount); i++) {
            const claim = await this.contract.claims(i);
            if (!claim.isApproved && !claim.isRejected) {
                claims.push({
                    id: claim.id.toNumber(),
                    user: claim.user,
                    policyId: claim.policyId.toNumber(),
                    reason: claim.reason,
                    timestamp: claim.timestamp.toNumber(),
                    isApproved: claim.isApproved,
                    isRejected: claim.isRejected
                });
            }
        }
        
        return claims;
    }

    async processClaim(claimId: number, approve: boolean) {
        if (!this.contract) throw new Error('Not connected');
        const tx = await this.contract.processClaim(claimId, approve);
        const receipt = await tx.wait();
        return receipt;
    }

    async createPolicy(
        name: string,
        coverageAmount: string,
        premiumAmount: string,
        duration: number
    ) {
        if (!this.contract) throw new Error('Not connected');
        const parseEther = await getParseEther();
        const tx = await this.contract.createPolicy(
            name,
            parseEther(coverageAmount),
            parseEther(premiumAmount),
            duration
        );
        const receipt = await tx.wait();
        return receipt;
    }

    async withdrawFunds() {
        if (!this.contract) throw new Error('Not connected');
        const tx = await this.contract.withdrawFunds();
        const receipt = await tx.wait();
        return receipt;
    }

    getUserAddress() {
        return this.userAddress;
    }
}

export const web3Service = new Web3Service();
