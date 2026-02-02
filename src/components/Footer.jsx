import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/trainers' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
    ],
    Services: [
      { name: 'Personal Training', path: '/services' },
      { name: 'Group Classes', path: '/services' },
      { name: 'Nutrition Plans', path: '/services' },
      { name: 'Online Coaching', path: '/services' },
    ],
    Resources: [
      { name: 'Pricing', path: '/pricing' },
      { name: 'FAQ', path: '/contact' },
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms of Service', path: '/' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-charcoal dark:bg-black pattern-grid border-t border-cyan-electric/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <Dumbbell className="w-8 h-8 text-cyan-electric group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-heading font-bold text-gradient">
                APEX Fitness
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your body, elevate your mind, and unleash your full potential with APEX Fitness.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-cyan-electric" />
                <span className="text-muted-foreground">Mahavir Nagar, Kandivali West, Mumbai 400067</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-electric" />
                <span className="text-muted-foreground">+91 8976747475</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-electric" />
                <span className="text-muted-foreground">ajayjkr67@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center hover:shadow-premium transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading font-bold text-lg mb-4 text-gradient">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-cyan-electric transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-cyan-electric/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading font-bold text-2xl mb-4 text-gradient">
              Join Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get fitness tips, nutrition advice, and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/20 outline-none transition-all duration-300 text-foreground"
                required
              />
              <Button type="submit" className="bg-gradient-primary hover:shadow-premium-hover transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-electric/20 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} APEX Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;