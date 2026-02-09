import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { content } from '../config/content';
import SectionShell from './SectionShell';

export default function BookingEmbed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="booking">
      <SectionShell>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-accent mb-6 tracking-tight leading-tight uppercase">
                {content.booking.title}
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 mb-3">
                {content.booking.subtitle}
              </p>
              <p className="text-gray-500 text-base">
                {content.booking.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-apple-lightgray rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            {/* 
              ============================================================
              GOOGLE CALENDAR APPOINTMENT SCHEDULE EMBED INSTRUCTIONS
              ============================================================
              
              To add your Google Calendar appointment scheduling:
              
              1. Go to: https://calendar.google.com/calendar/appointments/schedules
              2. Create a new appointment schedule (or use an existing one)
              3. Click "Share" on your appointment schedule
              4. Click "Get shareable link" or "Embed code"
              5. Copy the <iframe> code Google provides
              6. Replace the PLACEHOLDER iframe below with your actual Google Calendar embed code
              
              Example of what Google provides:
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID" 
                style="border: 0" 
                width="100%" 
                height="600" 
                frameborder="0">
              </iframe>
              
              IMPORTANT: Keep the className and styling wrapper below for consistent design.
              ============================================================
            */}
            
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Qo5otHlUVhYtn_DsQQj6S7LwoJYRM3dN5-29pdio0WwY7PM_PipRHfKvEJWW9qc3DPzyoSL72?gv=true"
                className="w-full h-[520px] sm:h-[600px] border-0"
                title="Book an Appointment"
              />
            </div>
          </motion.div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
