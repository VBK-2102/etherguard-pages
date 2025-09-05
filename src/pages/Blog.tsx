import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    title: 'The Future of Decentralized Insurance: A Comprehensive Guide',
    excerpt: 'Explore how blockchain technology is revolutionizing the insurance industry, making it more transparent, efficient, and accessible to everyone.',
    author: 'Sarah Chen',
    date: 'December 1, 2024',
    readTime: '8 min read',
    category: 'Industry Insights',
    image: '/api/placeholder/800/400'
  };

  const blogPosts = [
    {
      title: 'Smart Contracts in Insurance: How They Work',
      excerpt: 'Understanding the mechanics of smart contracts and their role in automating insurance processes.',
      author: 'Alex Rodriguez',
      date: 'November 28, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Community Governance: The Democratic Approach to Insurance',
      excerpt: 'How decentralized governance is putting power back in the hands of insurance community members.',
      author: 'Dr. Emily Watson',
      date: 'November 25, 2024',
      readTime: '6 min read',
      category: 'Governance',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Risk Assessment in the Digital Age',
      excerpt: 'Leveraging AI and blockchain data to create more accurate and fair risk assessment models.',
      author: 'Marcus Thompson',
      date: 'November 22, 2024',
      readTime: '7 min read',
      category: 'Risk Management',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Global Insurance: Breaking Down Barriers',
      excerpt: 'How decentralized insurance is making coverage accessible to underserved populations worldwide.',
      author: 'Lisa Park',
      date: 'November 20, 2024',
      readTime: '4 min read',
      category: 'Global Impact',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Security in DeFi Insurance: Best Practices',
      excerpt: 'Essential security measures and best practices for protecting assets in decentralized insurance.',
      author: 'David Kumar',
      date: 'November 18, 2024',
      readTime: '9 min read',
      category: 'Security',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'The Economics of Peer-to-Peer Insurance',
      excerpt: 'Understanding the economic models that make peer-to-peer insurance sustainable and profitable.',
      author: 'Sarah Chen',
      date: 'November 15, 2024',
      readTime: '6 min read',
      category: 'Economics',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Technology', 'Industry Insights', 'Governance', 'Risk Management', 'Global Impact', 'Security', 'Economics'];

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
              InsureChain Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and developments in 
              decentralized insurance and blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-large"
              >
                <div className="w-full h-80 bg-gradient-primary opacity-20" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </motion.div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-medium hover:shadow-large transition-all duration-300 flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground shadow-medium' 
                    : 'bg-background text-muted-foreground hover:text-foreground hover:bg-card border border-border'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-primary p-8 rounded-2xl text-center text-primary-foreground"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Subscribe to our newsletter and never miss the latest insights on decentralized insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}