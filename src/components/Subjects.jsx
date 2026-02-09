import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calculator, TrendingUp, BookOpen, Brain } from 'lucide-react';
import { content } from '../config/content';
import SectionShell from './SectionShell';

const iconMap = {
  'calculator': Calculator,
  'function': TrendingUp,
  'trending-up': TrendingUp,
  'book-open': BookOpen,
  'brain': Brain
};

export default function Subjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="subjects">
      <SectionShell>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-accent mb-6 tracking-tight leading-tight uppercase">
              {content.subjects.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600">
              {content.subjects.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {content.subjects.list.map((subject) => {
              const Icon = iconMap[subject.icon] || BookOpen;
              
              return (
                <motion.div
                  key={subject.name}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-apple-lightgray p-8 rounded-3xl hover:bg-apple-gray transition-all cursor-pointer"
                >
                  <div className="bg-accent w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-accent mb-3">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {subject.description}
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
