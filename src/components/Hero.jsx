import { motion } from 'framer-motion';
import { content } from '../config/content';
import SectionShell from './SectionShell';
import logo from '../assets/logo-light-nobackground.png';

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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 bg-brand-secondary ring-1 ring-brand-line rounded-lg px-4 py-2"
          >
            <img src={logo} alt="Poojitha Tutoring" className="h-7 w-auto object-contain" />
            <span className="font-body text-sm font-semibold text-brand-primary">Trusted 1:1 Tutoring</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-primary mb-6 leading-[1.05] tracking-tight">
              Excel in Your Studies
            </h1>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-primary mb-8 leading-[1.05] tracking-tight">
              with Personalized Tutoring
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg sm:text-xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed font-semibold"
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
              className="font-body bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
            >
              {content.hero.ctaPrimary}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#subjects')}
              className="font-body bg-brand-primary border-2 border-brand-primary text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-primary-700 transition-all"
            >
              {content.hero.ctaSecondary} →
            </motion.button>
          </motion.div>
        </div>
      </SectionShell>
    </section>
  );
}
