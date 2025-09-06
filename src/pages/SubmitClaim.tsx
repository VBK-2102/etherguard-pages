import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { loadScript } from '@/lib/loadScript';

export default function SubmitClaim() {
  const [searchParams] = useSearchParams();
  const [selectedPolicy, setSelectedPolicy] = useState(searchParams.get('policyId') || '');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userPolicies, setUserPolicies] = useState([]);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;
    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');
        
        if (vantaRef.current && (window as any).VANTA) {
          effect = (window as any).VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor:0x154c98,
            color1: 0x4f46e5,
            color2: 0x000000,
            birdSize: 1.5,
            wingSpan: 20.00,
            separation: 50.00,
            alignment: 50.00,
            cohesion: 50.00,
            quantity: 3.00
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Error initializing Vanta effect:', error);
      }
    };

    initVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
     
    } catch (error) {
      console.error('Error submitting claim:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={vantaRef} className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Card className="max-w-2xl mx-auto p-6 bg-background/20 backdrop-blur-md shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-white">Submit Insurance Claim</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-white">
              <Label htmlFor="policy ">Select Policy</Label>
              <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a policy" />
                </SelectTrigger>
                <SelectContent>
                  {userPolicies.map((policy: any) => (
                    <SelectItem key={policy.id} value={policy.id.toString()}>
                      {policy.name || `Policy #${policy.id}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 text-white">
              <Label htmlFor="reason">Claim Reason</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please describe the reason for your claim..."
                className="min-h-[150px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting || !selectedPolicy || !reason}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Claim'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
