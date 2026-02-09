import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, TrendingUp } from 'lucide-react';
import { content } from '../config/content';

const iconMap = {
  heart: Heart,
  target: Target,
  trending: TrendingUp
};

export default function About() {
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

  return (
    <section id="about" className="py-24 md:py-32 bg-apple-lightgray">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-semibold text-apple-darkgray mb-6 tracking-tight leading-tight">
              {content.about.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
              {content.about.description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {content.about.values.map((value, index) => {
              const icons = [Heart, Target, TrendingUp];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-apple-darkgray mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
