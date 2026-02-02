import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import TrainerCard from '@/components/ui/TrainerCard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const TrainersPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const { toast } = useToast();

  const trainers = [
    {
      id: 1,
      name: 'Mike Johnson',
      specialty: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800',
      certifications: ['NASM-CPT', 'CSCS', 'Nutrition'],
      bio: 'With over 10 years of experience, Mike specializes in building strength and muscle mass. His evidence-based approach has helped hundreds of clients achieve their goals.',
      experience: '10+ years',
      achievements: ['Regional Powerlifting Champion', 'Certified Nutrition Coach', 'Published Fitness Author'],
      email: 'mike@apexfitness.com',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'HIIT & Cardio',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800',
      certifications: ['ACE-CPT', 'TRX', 'Spinning'],
      bio: 'Sarah brings infectious energy to every class. Her high-intensity workouts are designed to maximize calorie burn and boost cardiovascular fitness.',
      experience: '8+ years',
      achievements: ['Marathon Finisher', 'Group Fitness Award Winner', 'Master Spin Instructor'],
      email: 'sarah@apexfitness.com',
    },
    {
      id: 3,
      name: 'Emma Davis',
      specialty: 'Yoga & Flexibility',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      certifications: ['RYT-500', 'Meditation', 'Prenatal Yoga'],
      bio: 'Emma\'s holistic approach combines physical practice with mindfulness. She creates a welcoming space for practitioners of all levels.',
      experience: '12+ years',
      achievements: ['International Yoga Teacher', 'Mindfulness Expert', 'Published Wellness Author'],
      email: 'emma@apexfitness.com',
    },
    {
      id: 4,
      name: 'Jake Martinez',
      specialty: 'CrossFit & Functional',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      certifications: ['CrossFit L2', 'USAW', 'Mobility'],
      bio: 'Jake\'s functional fitness approach prepares clients for real-world movements. His CrossFit classes challenge both beginners and advanced athletes.',
      experience: '9+ years',
      achievements: ['CrossFit Games Qualifier', 'Olympic Lifting Coach', 'Mobility Specialist'],
      email: 'jake@apexfitness.com',
    },
    {
      id: 5,
      name: 'Alex Chen',
      specialty: 'Boxing & Combat',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      certifications: ['Boxing Coach', 'Kickboxing', 'Self-Defense'],
      bio: 'Former competitive boxer Alex brings authentic technique and conditioning to every session. Learn proper form while getting an incredible workout.',
      experience: '15+ years',
      achievements: ['Amateur Boxing Champion', 'Combat Sports Coach', 'Self-Defense Instructor'],
      email: 'alex@apexfitness.com',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      specialty: 'Spin & Cycling',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
      certifications: ['Spinning', 'Endurance', 'Cycling Coach'],
      bio: 'Lisa\'s high-energy spin classes feature curated playlists and motivational coaching. Her passion for cycling is contagious.',
      experience: '7+ years',
      achievements: ['Century Ride Finisher', 'Master Spin Instructor', 'Endurance Coach'],
      email: 'lisa@apexfitness.com',
    },
    {
      id: 7,
      name: 'Marcus Thompson',
      specialty: 'Bodybuilding & Physique',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      certifications: ['IFBB Pro Card', 'Nutrition', 'Posing Coach'],
      bio: 'Competitive bodybuilder Marcus helps clients sculpt their ideal physique through precise training and nutrition protocols.',
      experience: '11+ years',
      achievements: ['IFBB Professional', 'Bodybuilding Champion', 'Contest Prep Coach'],
      email: 'marcus@apexfitness.com',
    },
    {
      id: 8,
      name: 'Rachel Kim',
      specialty: 'Pilates & Core',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
      certifications: ['Pilates', 'Core Specialist', 'Rehabilitation'],
      bio: 'Rachel\'s Pilates classes focus on core strength, posture, and body awareness. Perfect for injury prevention and rehabilitation.',
      experience: '10+ years',
      achievements: ['Master Pilates Instructor', 'Rehabilitation Specialist', 'Posture Expert'],
      email: 'rachel@apexfitness.com',
    },
  ];

  const specialties = ['all', 'Strength & Conditioning', 'HIIT & Cardio', 'Yoga & Flexibility', 'CrossFit & Functional', 'Boxing & Combat', 'Spin & Cycling'];

  const filteredTrainers = selectedSpecialty === 'all'
    ? trainers
    : trainers.filter(t => t.specialty === selectedSpecialty);

  const handleBookTrainer = (trainerName) => {
    toast({
      title: "Book Personal Training",
      description: `Contact us to schedule a session with ${trainerName}!`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Expert Trainers - APEX Fitness</title>
        <meta name="description" content="Meet our team of certified fitness professionals. Expert trainers specializing in strength training, HIIT, yoga, CrossFit, boxing, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602067680415-f57316f0e42a?w=1920"
            alt="Fitness Trainers"
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
              Meet Your Trainers
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Expert coaches dedicated to helping you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? 'default' : 'outline'}
                className={selectedSpecialty === specialty ? 'bg-gradient-primary' : ''}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty === 'all' ? 'All Trainers' : specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTrainers.map((trainer, index) => (
              <TrainerCard
                key={trainer.id}
                name={trainer.name}
                specialty={trainer.specialty}
                image={trainer.image}
                certifications={trainer.certifications}
                delay={index * 0.1}
                onClick={() => setSelectedTrainer(trainer)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTrainer(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-electric/50"
          >
            <div className="relative h-80">
              <img
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300 text-white text-xl"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-heading font-bold text-white mb-2">
                  {selectedTrainer.name}
                </h2>
                <p className="text-cyan-electric text-xl font-medium">
                  {selectedTrainer.specialty}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTrainer.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-3">About</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTrainer.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">Experience</h3>
                  <p className="text-muted-foreground">{selectedTrainer.experience}</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3">Contact</h3>
                  <p className="text-muted-foreground">{selectedTrainer.email}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-3">Achievements</h3>
                <ul className="space-y-2">
                  {selectedTrainer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-cyan-electric mt-1">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full bg-gradient-primary"
                onClick={() => handleBookTrainer(selectedTrainer.name)}
              >
                Book Personal Training
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
              Ready to Work with Our Experts?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation or personal training session today
            </p>
            <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100 text-lg px-8 py-6">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrainersPage;