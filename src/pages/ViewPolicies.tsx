import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInsuranceContract } from '@/hooks/use-insurance-contract';
import { useWeb3 } from '@/contexts/Web3Context';

export default function ViewPolicies() {
  const { policies, loading, loadPolicies, buyPolicy } = useInsuranceContract();
  const { isConnected } = useWeb3();

  useEffect(() => {
    if (isConnected) {
      loadPolicies();
    }
  }, [isConnected, loadPolicies]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Insurance Policies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <Card key={policy.id} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{policy.name}</h2>
            <div className="space-y-2 mb-4">
              <p>Coverage: {policy.coverageAmount} ETH</p>
              <p>Premium: {policy.premiumAmount} ETH</p>
              <p>Duration: {policy.duration} days</p>
              <p className={policy.isActive ? "text-green-600" : "text-red-600"}>
                Status: {policy.isActive ? "Active" : "Inactive"}
              </p>
            </div>
            <Button 
              className="w-full"
              disabled={!policy.isActive || !isConnected || loading}
              onClick={() => buyPolicy(policy.id, policy.premiumAmount)}
            >
              {loading ? "Processing..." : "Purchase Policy"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
