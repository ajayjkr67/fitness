import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ members: 0, classes: 0, trainers: 0, years: 0 });
  const { toast } = useToast();

  const features = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase your strength with our comprehensive weight training programs and expert guidance.',
    },
    {
      icon: TrendingUp,
      title: 'Cardio Excellence',
      description: 'Boost your endurance and cardiovascular health with state-of-the-art equipment and dynamic workout routines.',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our energetic group sessions including HIIT, yoga, spin, and more. Train together, grow together.',
    },
    {
      icon: Award,
      title: 'Recovery & Wellness',
      description: 'Optimize your recovery with our sauna, massage therapy, and nutritional counseling services.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Member since 2022',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      content: 'APEX Fitness transformed my life! The trainers are incredible, and the community is so supportive. I\'ve never felt stronger or more confident.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Member since 2021',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      content: 'The facilities are world-class and the programs are tailored perfectly to my goals. I\'ve achieved results I never thought possible.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Member since 2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      content: 'Best investment I\'ve ever made in myself. The group classes are addictive and the energy is contagious. Highly recommend!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const targets = { members: 5000, classes: 150, trainers: 50, years: 10 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current = { members: 0, classes: 0, trainers: 0, years: 0 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        current = {
          members: Math.floor(targets.members * progress),
          classes: Math.floor(targets.classes * progress),
          trainers: Math.floor(targets.trainers * progress),
          years: Math.floor(targets.years * progress),
        };

        setStats(current);

        if (step >= steps) {
          setStats(targets);
          clearInterval(timer);
        }
      }, increment);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleCTA = () => {
    toast({
      title: "Ready to start your journey?",
      description: "Visit our Pricing page to choose your perfect plan!",
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>APEX Fitness - Unleash Your Potential</title>
        <meta name="description" content="Transform your body and mind at APEX Fitness. Premium gym facilities, expert trainers, and comprehensive fitness programs designed to help you achieve your goals." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1647645426550-c36f3727ec71?w=1920"
            alt="Gym Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 pattern-diagonal opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              UNLEASH YOUR POTENTIAL
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your body, elevate your mind, and achieve greatness with elite training programs and world-class facilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-premium-hover text-lg px-8 py-6 group"
                onClick={handleCTA}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-white text-lg px-8 py-6"
              >
                View Classes
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-electric rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-electric rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-charcoal dark:bg-black pattern-hexagon">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.members, label: 'Active Members', suffix: '+' },
              { value: stats.classes, label: 'Weekly Classes', suffix: '+' },
              { value: stats.trainers, label: 'Expert Trainers', suffix: '+' },
              { value: stats.years, label: 'Years of Excellence', suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We Offer"
            subtitle="Experience comprehensive fitness solutions designed to help you reach your peak performance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-charcoal dark:bg-black pattern-grid">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from our members who have transformed their lives at APEX Fitness"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard {...testimonials[currentTestimonial]} />
              </motion.div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center hover:shadow-premium-hover transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center hover:shadow-premium-hover transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-electric w-8'
                      : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have achieved their fitness goals at APEX Fitness
            </p>
            <Button
              size="lg"
              className="bg-white text-charcoal hover:bg-gray-100 text-lg px-8 py-6"
              onClick={handleCTA}
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;