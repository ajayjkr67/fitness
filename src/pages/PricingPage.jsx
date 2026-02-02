import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import PricingCard from '@/components/ui/PricingCard';
import { Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const { toast } = useToast();

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 49,
      annualPrice: 470,
      features: [
        'Access to gym floor',
        'Standard equipment',
        'Locker room access',
        'Mobile app access',
        '2 guest passes per month',
      ],
      recommended: false,
    },
    {
      name: 'Premium',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Sauna & steam room',
        'Nutrition consultation',
        'Workout plan creation',
        '5 guest passes per month',
        'Priority class booking',
      ],
      recommended: true,
    },
    {
      name: 'Elite',
      monthlyPrice: 129,
      annualPrice: 1290,
      features: [
        'Everything in Premium',
        '4 personal training sessions/month',
        'Body composition analysis',
        'Recovery & massage therapy',
        'VIP locker room',
        'Unlimited guest passes',
        'Exclusive member events',
        '24/7 gym access',
      ],
      recommended: false,
    },
    {
      name: 'VIP',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Everything in Elite',
        '8 personal training sessions/month',
        'Customized meal planning',
        'Private training area access',
        'Concierge service',
        'Towel service',
        'Free merchandise',
        'Complimentary smoothies',
      ],
      recommended: false,
    },
  ];

  const comparisonFeatures = [
    { feature: 'Gym Floor Access', basic: true, premium: true, elite: true, vip: true },
    { feature: 'Group Classes', basic: false, premium: true, elite: true, vip: true },
    { feature: 'Personal Training', basic: false, premium: false, elite: true, vip: true },
    { feature: 'Nutrition Services', basic: false, premium: true, elite: true, vip: true },
    { feature: 'Sauna & Steam', basic: false, premium: true, elite: true, vip: true },
    { feature: 'Recovery Services', basic: false, premium: false, elite: true, vip: true },
    { feature: '24/7 Access', basic: false, premium: false, elite: true, vip: true },
    { feature: 'VIP Locker Room', basic: false, premium: false, elite: true, vip: true },
    { feature: 'Concierge Service', basic: false, premium: false, elite: false, vip: true },
    { feature: 'Meal Planning', basic: false, premium: false, elite: false, vip: true },
  ];

  const handleSelectPlan = (planName) => {
    toast({
      title: "Great Choice!",
      description: `Visit our Contact page to sign up for the ${planName} plan.`,
    });
  };

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : Math.floor(plan.annualPrice / 12);
  };

  const getSavings = (plan) => {
    const annualMonthly = plan.monthlyPrice * 12;
    return annualMonthly - plan.annualPrice;
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - APEX Fitness</title>
        <meta name="description" content="Choose the perfect membership plan for your fitness journey. Flexible pricing options with monthly and annual billing. From basic access to VIP treatment." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 pattern-hexagon opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
              Invest in Your Health
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Choose the membership that fits your goals and lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-cyan-electric' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-accent rounded-full transition-colors duration-300"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-gradient-primary rounded-full shadow-premium"
                animate={{ left: billingPeriod === 'monthly' ? 4 : 36 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-medium ${billingPeriod === 'annual' ? 'text-cyan-electric' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {billingPeriod === 'annual' && (
              <span className="px-3 py-1 bg-gold-accent text-charcoal rounded-full text-sm font-bold">
                Save up to $598/year
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan.name}
                price={getPrice(plan)}
                period={billingPeriod === 'monthly' ? 'month' : 'month'}
                features={plan.features}
                recommended={plan.recommended}
                delay={index * 0.1}
                onSelect={() => handleSelectPlan(plan.name)}
              />
            ))}
          </div>

          {billingPeriod === 'annual' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-muted-foreground">
                Annual plans are billed once per year. Cancel anytime with 30-day notice.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-charcoal dark:bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Compare Plans"
            subtitle="See what's included in each membership tier"
          />

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden shadow-premium">
              <thead>
                <tr className="bg-gradient-primary text-white">
                  <th className="px-6 py-4 text-left font-heading font-bold">Features</th>
                  <th className="px-6 py-4 text-center font-heading font-bold">Basic</th>
                  <th className="px-6 py-4 text-center font-heading font-bold">Premium</th>
                  <th className="px-6 py-4 text-center font-heading font-bold">Elite</th>
                  <th className="px-6 py-4 text-center font-heading font-bold">VIP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border ${index % 2 === 0 ? 'bg-accent/20' : ''}`}
                  >
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.basic ? (
                        <Check className="w-5 h-5 text-cyan-electric mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.premium ? (
                        <Check className="w-5 h-5 text-cyan-electric mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.elite ? (
                        <Check className="w-5 h-5 text-cyan-electric mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.vip ? (
                        <Check className="w-5 h-5 text-cyan-electric mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Have questions? We've got answers"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Yes! All our plans can be cancelled with 30 days notice. No long-term commitments required.',
              },
              {
                q: 'Do you offer family or corporate plans?',
                a: 'Absolutely! Contact us for special pricing on family memberships and corporate wellness programs.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and bank transfers for your convenience.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-cyan-electric/50 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;