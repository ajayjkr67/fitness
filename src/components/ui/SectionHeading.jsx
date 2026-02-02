import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-primary mt-6 ${
          align === 'center' ? 'mx-auto' : align === 'left' ? 'mr-auto' : 'ml-auto'
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;