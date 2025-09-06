import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '@/contexts/Web3Context';
import { web3Service } from '@/services/web3Service';
import { useToast } from '@/components/ui/use-toast';

export interface Policy {
  id: number;
  name: string;
  coverageAmount: string;
  premiumAmount: string;
  duration: number;
  isActive: boolean;
}

export interface UserPolicy {
  policyId: number;
  startTime: number;
  expiryTime: number;
  hasActiveClaim: boolean;
  policy?: Policy;
}

export interface Claim {
  id: number;
  user: string;
  policyId: number;
  reason: string;
  timestamp: number;
  isApproved: boolean;
  isRejected: boolean;
}

export function useInsuranceContract() {
  const { isConnected } = useWeb3();
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [userPolicies, setUserPolicies] = useState<UserPolicy[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isConnected) {
      loadPolicies();
    }
  }, [isConnected]);

  const loadPolicies = async () => {
    try {
      setLoading(true);
      const policies = await web3Service.getPolicies();
      setPolicies(policies);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load policies",
      });
    } finally {
      setLoading(false);
    }
  };

  const buyPolicy = async (policyId: number, premiumAmount: string) => {
    try {
      setLoading(true);
      await web3Service.buyPolicy(policyId, premiumAmount);
      toast({
        title: "Success",
        description: "Policy purchased successfully",
      });
      await loadPolicies();
      await loadUserPolicies();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to purchase policy",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadUserPolicies = async () => {
    try {
      setLoading(true);
      const userPolicies = await web3Service.getUserPolicies();
      setUserPolicies(userPolicies);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load user policies",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitClaim = async (policyId: number, reason: string) => {
    try {
      setLoading(true);
      await web3Service.submitClaim(policyId, reason);
      toast({
        title: "Success",
        description: "Claim submitted successfully",
      });
      await loadUserPolicies();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit claim",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadClaims = async () => {
    try {
      setLoading(true);
      const claims = await web3Service.getClaims();
      setClaims(claims);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load claims",
      });
    } finally {
      setLoading(false);
    }
  };

  const processClaim = async (claimId: number, approve: boolean) => {
    try {
      setLoading(true);
      await web3Service.processClaim(claimId, approve);
      toast({
        title: "Success",
        description: `Claim ${approve ? 'approved' : 'rejected'} successfully`,
      });
      await loadClaims();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process claim",
      });
    } finally {
      setLoading(false);
    }
  };

  const createPolicy = async (
    name: string,
    coverageAmount: string,
    premiumAmount: string,
    duration: number
  ) => {
    try {
      setLoading(true);
      await web3Service.createPolicy(name, coverageAmount, premiumAmount, duration);
      toast({
        title: "Success",
        description: "Policy created successfully",
      });
      await loadPolicies();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create policy",
      });
    } finally {
      setLoading(false);
    }
  };

  const withdrawFunds = async () => {
    try {
      setLoading(true);
      await web3Service.withdrawFunds();
      toast({
        title: "Success",
        description: "Funds withdrawn successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to withdraw funds",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    policies,
    userPolicies,
    claims,
    loading,
    loadPolicies,
    buyPolicy,
    loadUserPolicies,
    submitClaim,
    loadClaims,
    processClaim,
    createPolicy,
    withdrawFunds,
  };
}
