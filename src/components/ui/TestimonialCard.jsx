import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, image, content, rating, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-8 rounded-2xl bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300 shadow-premium hover:shadow-premium-hover"
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-cyan-electric/20" />
      
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-cyan-electric"
        />
        <div>
          <h4 className="font-heading font-bold text-lg">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'text-gold-accent fill-gold-accent'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed italic">
        "{content}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;