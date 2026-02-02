import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, Heart, Users, Clock, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ServicesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedClass, setSelectedClass] = useState(null);
  const { toast } = useToast();

  const classes = [
    {
      id: 1,
      name: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      description: 'Build muscle and increase strength with guided weightlifting and resistance training.',
      difficulty: 'intermediate',
      duration: '60 min',
      capacity: '12 people',
      instructor: 'Mike Johnson',
      schedule: ['Mon 6:00 AM', 'Wed 6:00 AM', 'Fri 6:00 AM'],
    },
    {
      id: 2,
      name: 'HIIT Blast',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800',
      description: 'High-intensity interval training to maximize calorie burn and boost metabolism.',
      difficulty: 'advanced',
      duration: '45 min',
      capacity: '20 people',
      instructor: 'Sarah Williams',
      schedule: ['Tue 7:00 AM', 'Thu 7:00 AM', 'Sat 9:00 AM'],
    },
    {
      id: 3,
      name: 'Yoga Flow',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      description: 'Improve flexibility, balance, and mindfulness with guided yoga sessions.',
      difficulty: 'beginner',
      duration: '60 min',
      capacity: '15 people',
      instructor: 'Emma Davis',
      schedule: ['Mon 5:30 PM', 'Wed 5:30 PM', 'Sun 10:00 AM'],
    },
    {
      id: 4,
      name: 'CrossFit',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800',
      description: 'Functional fitness combining cardio, weightlifting, and gymnastics movements.',
      difficulty: 'advanced',
      duration: '60 min',
      capacity: '15 people',
      instructor: 'Jake Martinez',
      schedule: ['Mon 6:00 PM', 'Wed 6:00 PM', 'Fri 6:00 PM'],
    },
    {
      id: 5,
      name: 'Boxing',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800',
      description: 'Learn boxing techniques while getting an intense full-body workout.',
      difficulty: 'intermediate',
      duration: '50 min',
      capacity: '10 people',
      instructor: 'Alex Chen',
      schedule: ['Tue 6:30 PM', 'Thu 6:30 PM', 'Sat 11:00 AM'],
    },
    {
      id: 6,
      name: 'Spin Class',
      image: 'https://images.unsplash.com/photo-1559223607-a43c990f5e2c?w=800',
      description: 'Indoor cycling with energizing music and motivating instructors.',
      difficulty: 'beginner',
      duration: '45 min',
      capacity: '25 people',
      instructor: 'Lisa Anderson',
      schedule: ['Mon 7:00 PM', 'Wed 7:00 PM', 'Fri 7:00 PM'],
    },
  ];

  const filteredClasses = selectedDifficulty === 'all' 
    ? classes 
    : classes.filter(c => c.difficulty === selectedDifficulty);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500';
      case 'intermediate': return 'text-yellow-500';
      case 'advanced': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const handleBookClass = (className) => {
    toast({
      title: "Class Booking",
      description: `Visit our Contact page to book ${className}!`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Classes & Services - APEX Fitness</title>
        <meta name="description" content="Explore our comprehensive range of fitness classes including strength training, HIIT, yoga, CrossFit, boxing, and spin. Find the perfect workout for your goals." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563454621355-5ba92b92285c?w=1920"
            alt="Fitness Classes"
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
              Our Classes
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Diverse programs designed to challenge, inspire, and transform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                className={selectedDifficulty === difficulty ? 'bg-gradient-primary' : ''}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300 shadow-premium hover:shadow-premium-hover cursor-pointer"
                onClick={() => setSelectedClass(classItem)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm ${getDifficultyColor(classItem.difficulty)} font-bold text-sm`}>
                    {classItem.difficulty.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {classItem.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {classItem.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-cyan-electric" />
                      <span className="text-muted-foreground">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-cyan-electric" />
                      <span className="text-muted-foreground">Max {classItem.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Target className="w-4 h-4 text-cyan-electric" />
                      <span className="text-muted-foreground">Instructor: {classItem.instructor}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookClass(classItem.name);
                    }}
                  >
                    View Schedule
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedClass(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-electric/50"
          >
            <div className="relative h-64">
              <img
                src={selectedClass.image}
                alt={selectedClass.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className={`inline-block px-3 py-1 rounded-full ${getDifficultyColor(selectedClass.difficulty)} bg-opacity-20 font-bold text-sm mb-4`}>
                {selectedClass.difficulty.toUpperCase()}
              </div>

              <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                {selectedClass.name}
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedClass.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-electric" />
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{selectedClass.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-electric" />
                  <div>
                    <div className="text-sm text-muted-foreground">Capacity</div>
                    <div className="font-medium">{selectedClass.capacity}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg mb-3">Weekly Schedule</h3>
                <div className="space-y-2">
                  {selectedClass.schedule.map((time, index) => (
                    <div key={index} className="px-4 py-2 bg-accent rounded-lg">
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg mb-2">Instructor</h3>
                <p className="text-muted-foreground">{selectedClass.instructor}</p>
              </div>

              <Button
                className="w-full bg-gradient-primary"
                onClick={() => handleBookClass(selectedClass.name)}
              >
                Book This Class
              </Button>
            </div>
          </motion.div>
        </div>
      )}

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
              Ready to Start Training?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose your membership plan and get unlimited access to all classes
            </p>
            <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100 text-lg px-8 py-6">
              View Pricing
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;