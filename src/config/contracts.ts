export const INSURANCE_CONTRACT_ADDRESS = '0x5Bf67FE9AeD06fE0aD442bcBD2454963d2ff7Ee9';

export const INSURANCE_CONTRACT_ABI = [
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
    // ... (rest of the ABI)
] as const;
