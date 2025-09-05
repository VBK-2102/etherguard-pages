import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former insurance executive with 15 years of experience. Led digital transformation at major insurance companies.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@insurechain.com'
      }
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Blockchain architect and former senior engineer at major DeFi protocols. Expert in smart contract security.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex@insurechain.com'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Risk Officer',
      bio: 'Actuarial science PhD with expertise in risk modeling and statistical analysis for insurance products.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@insurechain.com'
      }
    },
    {
      name: 'Marcus Thompson',
      role: 'Head of Engineering',
      bio: 'Full-stack developer with 10+ years building scalable web applications. Previously at major fintech companies.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'marcus@insurechain.com'
      }
    },
    {
      name: 'Lisa Park',
      role: 'Head of Design',
      bio: 'UX/UI designer passionate about creating intuitive interfaces for complex financial products.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@insurechain.com'
      }
    },
    {
      name: 'David Kumar',
      role: 'Head of Operations',
      bio: 'Operations specialist with experience scaling startups and managing global teams in the fintech sector.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        email: 'david@insurechain.com'
      }
    }
  ];

  const advisors = [
    {
      name: 'Dr. Michael Foster',
      role: 'Blockchain Advisor',
      company: 'Former Ethereum Foundation'
    },
    {
      name: 'Jennifer Williams',
      role: 'Insurance Industry Advisor',
      company: 'Former VP at AIG'
    },
    {
      name: 'Robert Chang',
      role: 'Regulatory Advisor',
      company: 'Former SEC Commissioner'
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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind InsureChain, working together to revolutionize 
              the insurance industry through innovation and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
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
              Core Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team combines decades of experience in insurance, blockchain, and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
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
              Advisors
            </h2>
            <p className="text-muted-foreground text-lg">
              Industry experts guiding our strategic direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {advisor.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {advisor.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {advisor.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-primary p-12 rounded-2xl text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We're always looking for talented individuals who share our passion 
              for revolutionizing the insurance industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}