import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface UserPolicy {
  policyId: number;
  startTime: number;
  expiryTime: number;
  hasActiveClaim: boolean;
  policyDetails?: {
    name: string;
    coverageAmount: number;
    premiumAmount: number;
  };
}

export default function MyPolicies() {
  const [userPolicies, setUserPolicies] = useState<UserPolicy[]>([]);

  useEffect(() => {
    // TODO: Connect to smart contract and fetch user's policies
    const fetchUserPolicies = async () => {
      try {
        // Contract interaction code will go here
      } catch (error) {
        console.error('Error fetching user policies:', error);
      }
    };

    fetchUserPolicies();
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">My Insurance Policies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userPolicies.map((policy) => (
          <Card key={policy.policyId} className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {policy.policyDetails?.name || `Policy #${policy.policyId}`}
            </h2>
            <div className="space-y-2 mb-4">
              <p>Start Date: {formatDate(policy.startTime)}</p>
              <p>Expiry Date: {formatDate(policy.expiryTime)}</p>
              <p>Coverage: {policy.policyDetails?.coverageAmount} ETH</p>
              <p>Premium Paid: {policy.policyDetails?.premiumAmount} ETH</p>
              <p className={policy.hasActiveClaim ? "text-yellow-600" : "text-green-600"}>
                Status: {policy.hasActiveClaim ? "Active Claim" : "No Active Claims"}
              </p>
            </div>
            <Button 
              className="w-full"
              disabled={policy.hasActiveClaim}
              onClick={() => {
                // Navigate to submit claim page
                window.location.href = `/submit-claim?policyId=${policy.policyId}`;
              }}
            >
              Submit Claim
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
