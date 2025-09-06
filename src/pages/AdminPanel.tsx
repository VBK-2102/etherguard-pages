import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Claim {
  id: number;
  user: string;
  policyId: number;
  reason: string;
  timestamp: number;
  isApproved: boolean;
  isRejected: boolean;
}

export default function AdminPanel() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [isOwner, setIsOwner] = useState(false);
  const [newPolicy, setNewPolicy] = useState({
    name: '',
    coverageAmount: '',
    premiumAmount: '',
    duration: ''
  });

  useEffect(() => {
    // TODO: Check if current user is contract owner
    const checkOwner = async () => {
      try {
        // Contract interaction code will go here
      } catch (error) {
        console.error('Error checking owner:', error);
      }
    };

    checkOwner();
  }, []);

  const handleCreatePolicy = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement policy creation logic
      // Contract interaction code will go here
    } catch (error) {
      console.error('Error creating policy:', error);
    }
  };

  const handleProcessClaim = async (claimId: number, approve: boolean) => {
    try {
      // TODO: Implement claim processing logic
      // Contract interaction code will go here
    } catch (error) {
      console.error('Error processing claim:', error);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  if (!isOwner) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p>You must be the contract owner to access this page.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
      <Tabs defaultValue="claims" className="space-y-6">
        <TabsList>
          <TabsTrigger value="claims">Process Claims</TabsTrigger>
          <TabsTrigger value="create">Create Policy</TabsTrigger>
        </TabsList>

        <TabsContent value="claims">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {claims.map((claim) => (
              <Card key={claim.id} className="p-6">
                <h3 className="font-semibold mb-2">Claim #{claim.id}</h3>
                <div className="space-y-2 mb-4">
                  <p>Policy ID: {claim.policyId}</p>
                  <p>User: {claim.user}</p>
                  <p>Date: {formatDate(claim.timestamp)}</p>
                  <p>Reason: {claim.reason}</p>
                </div>
                {!claim.isApproved && !claim.isRejected && (
                  <div className="space-x-2">
                    <Button
                      variant="default"
                      onClick={() => handleProcessClaim(claim.id, true)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleProcessClaim(claim.id, false)}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create">
          <Card className="max-w-2xl p-6">
            <form onSubmit={handleCreatePolicy} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Policy Name</Label>
                <Input
                  id="name"
                  value={newPolicy.name}
                  onChange={(e) => setNewPolicy({...newPolicy, name: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverageAmount">Coverage Amount (ETH)</Label>
                <Input
                  id="coverageAmount"
                  type="number"
                  step="0.01"
                  value={newPolicy.coverageAmount}
                  onChange={(e) => setNewPolicy({...newPolicy, coverageAmount: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="premiumAmount">Premium Amount (ETH)</Label>
                <Input
                  id="premiumAmount"
                  type="number"
                  step="0.01"
                  value={newPolicy.premiumAmount}
                  onChange={(e) => setNewPolicy({...newPolicy, premiumAmount: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newPolicy.duration}
                  onChange={(e) => setNewPolicy({...newPolicy, duration: e.target.value})}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Create Policy
              </Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
