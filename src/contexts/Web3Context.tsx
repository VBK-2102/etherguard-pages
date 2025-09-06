import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { web3Service } from '@/services/web3Service';
import { useToast } from '@/components/ui/use-toast';

interface Web3ContextType {
    connect: () => Promise<void>;
    isConnected: boolean;
    isAdmin: boolean;
    userAddress: string | null;
}

const Web3Context = createContext<Web3ContextType>({
    connect: async () => {},
    isConnected: false,
    isAdmin: false,
    userAddress: null,
});

export function Web3Provider({ children }: { children: ReactNode }) {
    const [isConnected, setIsConnected] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userAddress, setUserAddress] = useState<string | null>(null);
    const { toast } = useToast();

    const connect = async () => {
        try {
            const address = await web3Service.connect();
            setUserAddress(address);
            setIsConnected(true);
            const adminStatus = await web3Service.isAdmin();
            setIsAdmin(adminStatus);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Connection Error",
                description: error instanceof Error ? error.message : "Failed to connect wallet",
            });
        }
    };

    useEffect(() => {
        // Check if already connected
        const checkConnection = async () => {
            const connected = await web3Service.isConnected();
            if (connected) {
                setIsConnected(true);
                setUserAddress(web3Service.getUserAddress());
                const adminStatus = await web3Service.isAdmin();
                setIsAdmin(adminStatus);
            }
        };

        checkConnection();
    }, []);

    return (
        <Web3Context.Provider value={{
            connect,
            isConnected,
            isAdmin,
            userAddress,
        }}>
            {children}
        </Web3Context.Provider>
    );
}

export function useWeb3() {
    return useContext(Web3Context);
}
