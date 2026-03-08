import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionShell({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className={`py-16 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="bg-brand-surface rounded-xl shadow-[0_10px_30px_rgba(158,0,89,0.08)] ring-1 ring-brand-line p-8 md:p-12">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
