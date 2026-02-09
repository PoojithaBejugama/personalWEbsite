import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { content } from '../config/content';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-11">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-apple-darkgray mb-6 leading-[1.05] tracking-tight">
              Excel in Your Studies
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-8 leading-[1.05] tracking-tight">
              with Personalized Tutoring
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Expert tutoring for grades 9-12 in Math, English, and Study Skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#booking')}
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-normal text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              {content.hero.ctaPrimary}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('#subjects')}
              className="text-primary-600 px-8 py-3 rounded-full font-normal text-base hover:bg-apple-gray transition-colors"
            >
              {content.hero.ctaSecondary} →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
