import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { content } from '../config/content';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-apple-lightgray">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-semibold text-apple-darkgray mb-6 tracking-tight leading-tight">
              {content.pricing.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600">
              {content.pricing.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {content.pricing.plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`relative bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden transition-all ${
                  plan.highlighted ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    Best Value
                  </div>
                )}

                <div className={`p-10 ${plan.highlighted ? 'bg-apple-lightgray' : 'bg-white'}`}>
                  <h3 className="text-3xl font-semibold text-apple-darkgray mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-semibold text-apple-darkgray">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-base">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-base">{plan.description}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToBooking}
                    className={`w-full py-3 px-6 rounded-full font-normal transition-colors ${
                      plan.highlighted
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-apple-darkgray text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
