import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWeb3 } from '@/contexts/Web3Context';
import { motion } from 'framer-motion';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'View Policies', path: '/policies' },
  { name: 'My Policies', path: '/my-policies' },
  { name: 'Submit Claim', path: '/submit-claim' },
  { name: 'Admin Panel', path: '/admin' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { connect, isConnected, isAdmin, userAddress } = useWeb3();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-primary p-2 rounded-lg"
            >
              <img
                src="/logo.svg"
                alt="InsureChain Logo"
                className="w-6 h-6"
              />
            </motion.div>
            <span className="font-bold text-xl text-foreground">InsureChain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-foreground hover:text-primary transition-colors duration-200`}
                >
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-foreground hover:text-primary transition-colors duration-200"
              onClick={async () => {
                try {
                  setIsConnecting(true);
                  await connect();
                } finally {
                  setIsConnecting(false);
                }
              }}
            >
              {isConnecting ? (
                <div className="flex items-center space-x-2">
                  <LoadingSpinner size="sm" />
                  <span>Connecting...</span>
                </div>
              ) : isConnected ? (
                `${userAddress?.slice(0, 6)}...${userAddress?.slice(-4)}`
              ) : (
                'Connect Wallet'
              )}
            </motion.button>
           
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-foreground hover:text-primary transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-primary font-medium' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Divider */}
            <div className="pt-2 border-t border-border"></div>

            <div className="pt-2 border-t border-border space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-foreground hover:text-primary transition-colors duration-200 text-center"
                onClick={async () => {
                  try {
                    setIsConnecting(true);
                    await connect();
                  } finally {
                    setIsConnecting(false);
                    setIsOpen(false);
                  }
                }}
              >
                {isConnecting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <LoadingSpinner size="sm" />
                    <span>Connecting...</span>
                  </div>
                ) : isConnected ? (
                  `${userAddress?.slice(0, 6)}...${userAddress?.slice(-4)}`
                ) : (
                  'Connect Wallet'
                )}
              </motion.button>
              
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}