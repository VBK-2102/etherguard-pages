import { BigNumberish, Contract, ContractTransactionResponse } from 'ethers';

export interface InsurancePolicy extends Contract {
  owner(): Promise<string>;
  policies(index: number): Promise<{
    id: bigint;
    name: string;
    coverageAmount: bigint;
    premiumAmount: bigint;
    duration: bigint;
    isActive: boolean;
  }>;
  getPoliciesCount(): Promise<bigint>;
  getUserPoliciesCount(address: string): Promise<bigint>;
  getClaimCount(): Promise<bigint>;
  createPolicy(
    name: string,
    coverageAmount: BigNumberish,
    premiumAmount: BigNumberish,
    duration: BigNumberish
  ): Promise<ContractTransactionResponse>;
  buyPolicy(
    policyId: BigNumberish,
    overrides?: { value: BigNumberish }
  ): Promise<ContractTransactionResponse>;
  submitClaim(
    policyId: BigNumberish,
    reason: string
  ): Promise<ContractTransactionResponse>;
  processClaim(
    claimId: BigNumberish,
    approve: boolean
  ): Promise<ContractTransactionResponse>;
  withdrawFunds(): Promise<ContractTransactionResponse>;
}
