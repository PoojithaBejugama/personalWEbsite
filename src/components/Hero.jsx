import { motion } from 'framer-motion';
import { content } from '../config/content';
import SectionShell from './SectionShell';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24">
      <SectionShell>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-6 leading-[1.05] tracking-tight uppercase">
              Excel in Your Studies
            </h1>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-8 leading-[1.05] tracking-tight uppercase">
              with Personalized Tutoring
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#booking')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              {content.hero.ctaPrimary}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#subjects')}
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium text-base hover:bg-accent hover:text-white transition-all"
            >
              {content.hero.ctaSecondary} →
            </motion.button>
          </motion.div>
        </div>
      </SectionShell>
    </section>
  );
}
