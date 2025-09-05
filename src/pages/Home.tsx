import { motion } from 'framer-motion';
import { Shield, Zap, Users, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Smart contracts ensure transparent claims processing and secure fund management.'
    },
    {
      icon: Zap,
      title: 'Instant Claims',
      description: 'Automated claim processing reduces wait times from weeks to minutes.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Decentralized governance puts the power in the hands of our community.'
    }
  ];

  const benefits = [
    'No intermediaries - Direct peer-to-peer insurance',
    'Lower premiums through reduced overhead costs',
    'Transparent smart contract operations',
    'Global coverage without geographical restrictions',
    'Community-governed claim assessments'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              The Future of{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Decentralized Insurance
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Experience transparent, efficient, and community-driven insurance powered by blockchain technology. 
              No middlemen, no hidden fees, just fair coverage for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose InsureChain?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Revolutionary features that make insurance fair, fast, and transparent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience True Insurance Innovation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of users who have already discovered the benefits of decentralized insurance.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-secondary p-8 rounded-2xl shadow-large"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our community and experience the future of insurance today.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300 w-full flex items-center justify-center"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}