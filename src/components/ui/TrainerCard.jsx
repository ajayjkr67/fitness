import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainerCard = ({ name, specialty, image, certifications, delay = 0, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300 shadow-premium hover:shadow-premium-hover cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Social Links */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-electric transition-colors duration-300"
          >
            <Instagram className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-electric transition-colors duration-300"
          >
            <Facebook className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-electric transition-colors duration-300"
          >
            <Twitter className="w-5 h-5 text-white" />
          </motion.a>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">{name}</h3>
          <p className="text-cyan-electric font-medium mb-3">{specialty}</p>
          {certifications && (
            <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}
          <Button
            size="sm"
            className="bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;