import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300 shadow-premium hover:shadow-premium-hover"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-premium"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;