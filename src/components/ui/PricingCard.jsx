import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ plan, price, period, features, recommended, delay = 0, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative p-8 rounded-2xl ${
        recommended
          ? 'bg-gradient-primary shadow-premium-hover'
          : 'bg-card border border-border'
      } transition-all duration-300`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-accent text-charcoal text-sm font-bold rounded-full">
          RECOMMENDED
        </div>
      )}

      <div className={recommended ? 'text-white' : ''}>
        <h3 className="text-2xl font-heading font-bold mb-2">{plan}</h3>
        <div className="mb-6">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-lg text-muted-foreground">/{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                recommended ? 'text-white' : 'text-cyan-electric'
              }`} />
              <span className={recommended ? 'text-white/90' : 'text-muted-foreground'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          className={`w-full ${
            recommended
              ? 'bg-white text-charcoal hover:bg-gray-100'
              : 'bg-gradient-primary hover:shadow-premium-hover'
          } transition-all duration-300`}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;