import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Trophy, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We maintain the highest standards in fitness training, equipment, and member experience.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive environment where everyone motivates and inspires each other.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving with the latest fitness science and cutting-edge technology.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering measurable outcomes and helping you achieve your goals.',
    },
  ];

  const milestones = [
    { year: '2014', event: 'APEX Fitness Founded', description: 'Started with a vision to revolutionize fitness' },
    { year: '2016', event: '1,000 Members', description: 'Reached our first major membership milestone' },
    { year: '2018', event: 'Facility Expansion', description: 'Doubled our space with state-of-the-art equipment' },
    { year: '2020', event: 'Virtual Training Launch', description: 'Adapted to serve our community remotely' },
    { year: '2022', event: '5,000+ Active Members', description: 'Became the region\'s premier fitness destination' },
    { year: '2024', event: 'Award-Winning Gym', description: 'Recognized as Best Gym of the Year' },
  ];

  return (
    <div className='overflow-hidden md:overflow-visible'>
      <Helmet>
        <title>About Us - APEX Fitness</title>
        <meta name="description" content="Learn about APEX Fitness - our story, mission, values, and commitment to helping you achieve your fitness goals through excellence and innovation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1693214674477-1159bddf1598?w=1920"
            alt="About APEX Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building a community dedicated to strength, wellness, and transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
                Redefining Fitness Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, APEX Fitness began with a simple yet powerful vision: to create a space where everyone, regardless of their fitness level, could pursue their health goals with confidence and support.
                </p>
                <p>
                  What started as a modest gym has grown into a premier fitness destination, serving over 5,000 active members and offering world-class facilities, expert trainers, and innovative programs.
                </p>
                <p>
                  Our commitment goes beyond just providing equipment and classes. We've built a community where members push each other to new heights, celebrate victories together, and find the motivation to keep going even on the toughest days.
                </p>
                <p>
                  Today, APEX Fitness stands as a testament to what's possible when passion meets purpose. We're not just a gym—we're a movement dedicated to transforming lives through fitness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
                  alt="APEX Fitness Facility"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-3 md:-right-6 bg-gradient-primary p-8 rounded-2xl shadow-premium-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-heading font-bold text-white mb-2">10+</div>
                <div className="text-white/90">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charcoal dark:bg-black pattern-hexagon">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at APEX Fitness"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our growth and evolution"
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-cyan-electric/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-primary" />
                <div className="text-cyan-electric font-heading font-bold text-xl mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {milestone.event}
                </h3>
                <p className="text-muted-foreground">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-charcoal dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading
              title="Meet Our Team"
              subtitle="Expert trainers dedicated to your success"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/trainers">
                <Button size="lg" className="bg-gradient-primary hover:shadow-premium-hover group">
                  View All Trainers
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary" />
        <div className="absolute inset-0 pattern-diagonal opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Join the APEX Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the difference that a supportive community and world-class facilities can make
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100 text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;