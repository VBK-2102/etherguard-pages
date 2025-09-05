import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, wallet address, and communication preferences.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about your use of our platform, including transaction data, log files, device information, and interaction patterns with our smart contracts.'
        },
        {
          subtitle: 'Blockchain Data',
          text: 'As a decentralized platform, certain information is inherently public on the blockchain, including transaction hashes, wallet addresses, and smart contract interactions.'
        }
      ]
    },
    {
      title: 'How We Use Information',
      icon: Users,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our insurance services, process claims, and facilitate peer-to-peer insurance interactions.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you service-related notifications, updates about your policies, and important security information.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to understand how our platform is used and to improve our services, always in an aggregated and anonymized manner.'
        }
      ]
    },
    {
      title: 'Data Protection',
      icon: Lock,
      content: [
        {
          subtitle: 'Encryption',
          text: 'All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols. We employ end-to-end encryption for all communications.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls and regularly audit our systems. Only authorized personnel have access to personal data, and only when necessary for service provision.'
        },
        {
          subtitle: 'Data Minimization',
          text: 'We collect and retain only the minimum amount of data necessary to provide our services effectively and comply with legal requirements.'
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information. You can manage most of your data directly through your account settings.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your data in a structured, commonly used format. This includes your policy history and transaction records.'
        },
        {
          subtitle: 'Deletion Rights',
          text: 'You may request deletion of your personal data, subject to legal and contractual obligations. Note that blockchain data cannot be deleted due to its immutable nature.'
        }
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is fundamental to us. Learn how we collect, use, and protect 
              your information in our decentralized insurance platform.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: December 1, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-soft mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At InsureChain, we are committed to protecting your privacy and ensuring transparency 
                in how we handle your personal information. This Privacy Policy explains our practices 
                regarding the collection, use, and disclosure of information through our decentralized 
                insurance platform.
              </p>
              <p>
                As a blockchain-based platform, we operate with unique considerations around data 
                privacy and decentralization. We strive to balance the benefits of transparency 
                inherent in blockchain technology with robust privacy protections for our users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl shadow-soft"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <section.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Data Retention</h3>
              <p className="text-muted-foreground text-sm">
                We retain your personal information only as long as necessary to provide our services 
                and comply with legal obligations. Blockchain data, by its nature, is permanent and 
                cannot be deleted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">International Transfers</h3>
              <p className="text-muted-foreground text-sm">
                As a global platform, your data may be processed in various countries. We ensure 
                appropriate safeguards are in place for international data transfers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Third-Party Services</h3>
              <p className="text-muted-foreground text-sm">
                We may use trusted third-party services for analytics and infrastructure. These 
                partners are bound by strict confidentiality agreements and data protection standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Policy Updates</h3>
              <p className="text-muted-foreground text-sm">
                We may update this policy occasionally. We'll notify you of significant changes 
                through our platform or email. Continued use constitutes acceptance of updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-primary p-8 rounded-xl text-primary-foreground text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-primary-foreground/90 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-2">
              <p>Email: privacy@insurechain.com</p>
              <p>Address: 123 Blockchain Ave, Crypto City, CC 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}