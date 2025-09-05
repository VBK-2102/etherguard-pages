import { motion } from 'framer-motion';
import { Target, Heart, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'Every transaction and claim is recorded on the blockchain, ensuring complete transparency and accountability.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Our platform is built by the community, for the community. Every decision is made with our users in mind.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Breaking down geographical barriers to provide insurance coverage to anyone, anywhere in the world.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of what\'s possible in insurance through cutting-edge technology.'
    }
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
              About InsureChain
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing the insurance industry through blockchain technology, 
              creating a more transparent, efficient, and fair system for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  InsureChain was born from a simple yet powerful idea: insurance should be fair, 
                  transparent, and accessible to everyone. Traditional insurance systems are plagued 
                  by inefficiencies, high costs, and lack of transparency.
                </p>
                <p>
                  Our founders, a team of blockchain experts and insurance professionals, recognized 
                  that decentralized technology could solve these fundamental problems. By leveraging 
                  smart contracts and community governance, we've created a platform that puts power 
                  back in the hands of the people.
                </p>
                <p>
                  Today, InsureChain serves thousands of users worldwide, processing claims in minutes 
                  rather than weeks, and providing coverage at a fraction of traditional costs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground"
            >
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg">
                To democratize insurance through blockchain technology, making it more accessible, 
                affordable, and transparent for people around the world. We believe everyone deserves 
                fair protection without the complexity and overhead of traditional systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and drive our innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              Numbers that showcase our growing community and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Active Users' },
              { number: '$5M+', label: 'Claims Processed' },
              { number: '50+', label: 'Countries Served' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}