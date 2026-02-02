import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Fitness Tips', 'Nutrition', 'Wellness', 'Training'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Building Muscle Mass',
      excerpt: 'Discover the fundamental movements that form the foundation of any effective muscle-building program.',
      category: 'Training',
      author: 'Mike Johnson',
      date: '2024-01-25',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800',
    },
    {
      id: 2,
      title: 'The Ultimate Guide to HIIT Training',
      excerpt: 'Learn how high-intensity interval training can transform your fitness and maximize calorie burn.',
      category: 'Fitness Tips',
      author: 'Sarah Williams',
      date: '2024-01-22',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    },
    {
      id: 3,
      title: 'Nutrition Strategies for Optimal Performance',
      excerpt: 'Fuel your workouts and recovery with science-backed nutrition principles and meal timing strategies.',
      category: 'Nutrition',
      author: 'Emma Davis',
      date: '2024-01-20',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
    },
    {
      id: 4,
      title: 'Mindfulness and Recovery: The Missing Link',
      excerpt: 'Explore how meditation and stress management enhance athletic performance and overall wellness.',
      category: 'Wellness',
      author: 'Rachel Kim',
      date: '2024-01-18',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    },
    {
      id: 5,
      title: 'CrossFit for Beginners: Where to Start',
      excerpt: 'Everything you need to know before starting your CrossFit journey, from movements to mindset.',
      category: 'Training',
      author: 'Jake Martinez',
      date: '2024-01-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    },
    {
      id: 6,
      title: 'Supplements: What Works and What Doesn\'t',
      excerpt: 'Cut through the marketing hype and learn which supplements are backed by science.',
      category: 'Nutrition',
      author: 'Marcus Thompson',
      date: '2024-01-12',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800',
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Fitness Blog - APEX Fitness</title>
        <meta name="description" content="Expert fitness advice, training tips, nutrition guides, and wellness insights from the APEX Fitness team. Stay informed and motivated." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-primary" />
        <div className="absolute inset-0 pattern-diagonal opacity-20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
              Fitness Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expert insights, training tips, and wellness advice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/20 outline-none transition-all duration-300 text-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category ? 'bg-gradient-primary' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Posts' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300 shadow-premium hover:shadow-premium-hover"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-heading font-bold mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cyan-electric font-medium group-hover:translate-x-2 transition-transform duration-300">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;