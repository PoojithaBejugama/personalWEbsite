import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, TrendingUp } from 'lucide-react';
import { content } from '../config/content';
import SectionShell from './SectionShell';

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
    <section id="about">
      <SectionShell>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-primary mb-6 tracking-tight leading-tight">
              {content.about.title}
            </h2>
            <p className="font-body text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed font-semibold">
              {content.about.description}
            </p>
           
            <p className="font-body text-sm sm:text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed font-semibold m-3">
              Languages I speak: Telugu, Hindi and English
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
                  className="bg-brand-surface p-10 rounded-xl shadow-sm ring-1 ring-brand-line hover:shadow-lg transition-all"
                >
                  <div className="bg-brand-accent w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-brand-muted leading-relaxed text-base font-semibold">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
