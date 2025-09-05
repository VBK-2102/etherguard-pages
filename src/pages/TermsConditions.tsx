import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

export default function TermsConditions() {
  const sections = [
    {
      title: 'Platform Services',
      icon: FileText,
      content: [
        {
          subtitle: 'Service Description',
          text: 'InsureChain provides a decentralized insurance platform that enables peer-to-peer insurance transactions through smart contracts on the blockchain. Our services include policy creation, claims processing, and community governance features.'
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years old and legally capable of entering into contracts in your jurisdiction. By using our platform, you represent that you meet these requirements.'
        },
        {
          subtitle: 'Account Responsibilities',
          text: 'You are responsible for maintaining the security of your wallet and account credentials. We cannot recover lost private keys or reverse transactions confirmed on the blockchain.'
        }
      ]
    },
    {
      title: 'User Obligations',
      icon: Users,
      content: [
        {
          subtitle: 'Compliance',
          text: 'You agree to comply with all applicable laws and regulations in your jurisdiction when using our platform. This includes but is not limited to financial regulations, tax obligations, and blockchain-specific legislation.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not use our platform for any illegal activities, fraud, money laundering, or any purpose that violates these terms. You also agree not to interfere with the platform\'s operation or security.'
        },
        {
          subtitle: 'Accurate Information',
          text: 'You must provide accurate and complete information when creating policies or filing claims. False information may result in claim denial and account suspension.'
        }
      ]
    },
    {
      title: 'Financial Terms',
      icon: Scale,
      content: [
        {
          subtitle: 'Fees and Payments',
          text: 'Platform fees are clearly displayed before any transaction. All payments are processed through smart contracts and are non-refundable once confirmed on the blockchain.'
        },
        {
          subtitle: 'Claims Processing',
          text: 'Claims are processed according to the terms of your specific insurance policy smart contract. The community governance mechanism may be involved in dispute resolution for certain claim types.'
        },
        {
          subtitle: 'Token Economics',
          text: 'Our platform may utilize governance tokens for voting and other platform features. Token holders participate in platform governance according to the established protocols.'
        }
      ]
    },
    {
      title: 'Disclaimers & Limitations',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Platform Availability',
          text: 'While we strive for maximum uptime, the platform is provided "as is" and we do not guarantee uninterrupted access. Blockchain network congestion or technical issues may affect service availability.'
        },
        {
          subtitle: 'Investment Risks',
          text: 'Cryptocurrency and DeFi investments carry inherent risks. You should carefully consider these risks and consult with financial advisors as appropriate before using our platform.'
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of the platform.'
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully. They govern your use of the InsureChain 
              platform and establish the legal relationship between you and our services.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the InsureChain 
                platform, including our website, mobile applications, and related services (collectively, 
                the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms.
              </p>
              <p>
                InsureChain operates as a decentralized insurance platform built on blockchain technology. 
                These terms are designed to protect both users and the integrity of our decentralized 
                ecosystem while ensuring compliance with applicable regulations.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                <p className="text-accent font-medium text-sm">
                  <AlertTriangle className="h-4 w-4 inline mr-2" />
                  Important: By using our platform, you acknowledge that you understand the risks 
                  associated with blockchain technology and cryptocurrency transactions.
                </p>
              </div>
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

      {/* Additional Terms */}
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
              <h3 className="text-xl font-bold text-foreground mb-4">Intellectual Property</h3>
              <p className="text-muted-foreground text-sm mb-4">
                All intellectual property rights in the platform and its content belong to InsureChain 
                or our licensors. You may not copy, modify, or distribute our proprietary technology.
              </p>
              <p className="text-muted-foreground text-sm">
                Our open-source components are licensed under their respective open-source licenses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Dispute Resolution</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Most disputes will be resolved through our community governance mechanism. 
                For legal disputes, we prefer arbitration over litigation when possible.
              </p>
              <p className="text-muted-foreground text-sm">
                These terms are governed by the laws of [Jurisdiction] without regard to conflict of law principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Termination</h3>
              <p className="text-muted-foreground text-sm mb-4">
                You may discontinue using our platform at any time. We may suspend or terminate 
                accounts that violate these terms or applicable laws.
              </p>
              <p className="text-muted-foreground text-sm">
                Termination does not affect completed transactions or ongoing insurance policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Updates to Terms</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We may update these terms periodically to reflect changes in our services or 
                applicable laws. Material changes will be communicated with advance notice.
              </p>
              <p className="text-muted-foreground text-sm">
                Continued use after updates constitutes acceptance of the new terms.
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
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-primary-foreground/90 mb-6">
              If you have any questions about these Terms and Conditions or need clarification 
              on any provisions, please contact our legal team.
            </p>
            <div className="space-y-2">
              <p>Email: legal@insurechain.com</p>
              <p>Address: 123 Blockchain Ave, Crypto City, CC 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}