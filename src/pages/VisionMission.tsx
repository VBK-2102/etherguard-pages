import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Users, Shield, Zap } from 'lucide-react';

export default function VisionMission() {
  const goals = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Ensure the highest level of security for all user funds and data through advanced cryptographic protocols.'
    },
    {
      icon: Users,
      title: 'Global Accessibility',
      description: 'Make insurance accessible to underserved populations worldwide, breaking down traditional barriers.'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Reduce claim processing times from weeks to minutes through automated smart contracts.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Stay at the forefront of blockchain technology to continuously improve our platform.'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Platform Launch', description: 'Initial release with basic insurance products' },
    { year: '2025', title: 'Global Expansion', description: 'Expand to 100+ countries with localized offerings' },
    { year: '2026', title: 'AI Integration', description: 'Implement AI-powered risk assessment and pricing' },
    { year: '2027', title: 'DeFi Integration', description: 'Full integration with major DeFi protocols' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shaping the future of insurance through innovation, transparency, and community-driven solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-primary p-4 rounded-xl">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  To create a world where insurance is truly democratic, transparent, and accessible to everyone, 
                  regardless of their geographic location or economic status.
                </p>
                <p>
                  We envision a future where traditional insurance intermediaries are replaced by smart contracts, 
                  where claims are processed instantly, and where communities collectively share and manage risk.
                </p>
                <p>
                  Our vision extends beyond just insurance – we're building the infrastructure for a new financial 
                  ecosystem where trust is built into the technology itself.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold mb-4">2030</div>
                <div className="text-xl font-semibold mb-2">Our Vision Timeline</div>
                <p className="text-primary-foreground/90">
                  By 2030, we aim to serve 10 million users globally, processing over $1 billion in claims 
                  through our decentralized platform.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-2 space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-primary p-4 rounded-xl">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  To democratize insurance by leveraging blockchain technology to create transparent, 
                  efficient, and community-governed insurance solutions.
                </p>
                <p>
                  We are committed to eliminating the inefficiencies of traditional insurance while 
                  maintaining the highest standards of security and reliability.
                </p>
                <p>
                  Our mission is to empower individuals and communities to take control of their 
                  financial protection through innovative technology and fair practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-3">
                      <goal.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">
                      {goal.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {goal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Roadmap
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our journey to revolutionize the insurance industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
                
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}