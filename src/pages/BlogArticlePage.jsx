import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogArticlePage = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // In a real app, this would fetch from an API
  const articles = {
    1: {
      title: '10 Essential Exercises for Building Muscle Mass',
      category: 'Training',
      author: 'Mike Johnson',
      date: '2024-01-25',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920',
      content: `
        <p>Building muscle mass requires a strategic approach to training, focusing on compound movements that engage multiple muscle groups. In this comprehensive guide, we'll explore the ten most effective exercises for hypertrophy.</p>

        <h2>1. Barbell Squats</h2>
        <p>The king of all exercises, barbell squats target your quads, hamstrings, glutes, and core. Proper form is crucial: keep your chest up, break at the hips, and drive through your heels. Aim for 3-4 sets of 8-12 reps.</p>

        <h2>2. Deadlifts</h2>
        <p>Deadlifts are unmatched for building overall strength and mass. This movement engages your entire posterior chain, from your calves to your traps. Start with lighter weights to master the hip hinge pattern.</p>

        <h2>3. Bench Press</h2>
        <p>For chest development, the bench press is fundamental. Focus on a controlled descent, brief pause at the bottom, and explosive concentric phase. Vary your grip width to target different areas of the chest.</p>

        <h2>4. Pull-Ups and Chin-Ups</h2>
        <p>These bodyweight exercises are excellent for building a strong, wide back. If you can't do full pull-ups yet, use assistance bands or the assisted pull-up machine.</p>

        <h2>5. Overhead Press</h2>
        <p>Build powerful shoulders with the overhead press. This movement also engages your core and stabilizer muscles. Keep your core tight and avoid excessive back arching.</p>

        <h2>Progressive Overload is Key</h2>
        <p>Remember, muscle growth occurs when you consistently challenge your muscles beyond their current capacity. Track your workouts, gradually increase weights, and prioritize recovery through proper nutrition and sleep.</p>

        <h2>Conclusion</h2>
        <p>These exercises form the foundation of any effective muscle-building program. Master the basics, stay consistent, and the results will follow. At APEX Fitness, our trainers can help you perfect your form and design a program tailored to your goals.</p>
      `,
    },
    2: {
      title: 'The Ultimate Guide to HIIT Training',
      category: 'Fitness Tips',
      author: 'Sarah Williams',
      date: '2024-01-22',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920',
      content: `
        <p>High-Intensity Interval Training (HIIT) has revolutionized the fitness industry, offering maximum results in minimum time. Let's dive deep into what makes HIIT so effective and how to incorporate it into your routine.</p>

        <h2>What is HIIT?</h2>
        <p>HIIT alternates between short bursts of intense exercise and periods of rest or lower-intensity exercise. This approach keeps your heart rate elevated and burns more fat in less time compared to steady-state cardio.</p>

        <h2>Science-Backed Benefits</h2>
        <p>Research shows HIIT can improve cardiovascular health, increase metabolism for up to 24 hours post-workout (the "afterburn effect"), and preserve muscle mass while burning fat.</p>

        <h2>Sample HIIT Workout</h2>
        <p>Try this beginner-friendly routine: 30 seconds of burpees, 30 seconds rest, 30 seconds of mountain climbers, 30 seconds rest, 30 seconds of jump squats, 30 seconds rest. Repeat 4-6 times.</p>

        <h2>Important Considerations</h2>
        <p>HIIT is demanding on your body. Start with 2-3 sessions per week, allowing adequate recovery between workouts. Always warm up properly and listen to your body.</p>
      `,
    },
    3: {
      title: 'Nutrition Strategies for Optimal Performance',
      category: 'Nutrition',
      author: 'Emma Davis',
      date: '2024-01-20',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920',
      content: `
        <p>Nutrition is the foundation of athletic performance and recovery. Understanding when and what to eat can dramatically impact your results in the gym.</p>

        <h2>Macronutrient Timing</h2>
        <p>Protein: Aim for 0.8-1g per pound of body weight daily. Distribute evenly across meals for optimal muscle protein synthesis.</p>
        <p>Carbohydrates: Time them around your workouts. Complex carbs before training provide sustained energy, while simple carbs post-workout aid recovery.</p>
        <p>Fats: Essential for hormone production. Include healthy sources like avocados, nuts, and fatty fish.</p>

        <h2>Pre-Workout Nutrition</h2>
        <p>Eat a balanced meal 2-3 hours before training, or a small snack 30-60 minutes prior. Focus on easily digestible carbs and moderate protein.</p>

        <h2>Post-Workout Recovery</h2>
        <p>Within 30-60 minutes after training, consume protein and carbohydrates to replenish glycogen stores and support muscle repair.</p>

        <h2>Hydration Matters</h2>
        <p>Drink at least half your body weight in ounces of water daily. During intense training, add electrolytes to maintain performance.</p>
      `,
    },
  };

  const article = articles[id] || articles[1];

  const relatedArticles = [
    {
      id: 2,
      title: 'The Ultimate Guide to HIIT Training',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    },
    {
      id: 3,
      title: 'Nutrition Strategies for Optimal Performance',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
    },
  ].filter(a => a.id.toString() !== id);

  const handleShare = () => {
    toast({
      title: "Share Article",
      description: "Link copied to clipboard!",
    });
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - APEX Fitness Blog</title>
        <meta name="description" content={article.content.substring(0, 160)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center space-x-2 text-cyan-electric hover:text-cyan-electric/80 mb-6 transition-colors duration-300">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-4">
              <span className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white max-w-4xl">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-8">
              <Button
                variant="outline"
                onClick={handleShare}
                className="border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: 'var(--foreground)',
              }}
            />

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">{article.author}</h3>
                  <p className="text-muted-foreground">Fitness Expert & Trainer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A certified fitness professional with years of experience helping clients achieve their health and fitness goals at APEX Fitness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-charcoal dark:bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-gradient text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${related.id}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold group-hover:text-gradient transition-all duration-300">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogArticlePage;