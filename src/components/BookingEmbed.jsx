import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { content } from '../config/content';

export default function BookingEmbed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="booking" className="py-24 md:py-32 bg-white">
      <div className="max-w-[640px] mx-auto px-6 lg:px-8">
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
              <h2 className="text-5xl sm:text-6xl font-semibold text-apple-darkgray mb-6 tracking-tight leading-tight">
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
            className="bg-apple-lightgray rounded-3xl p-10 shadow-sm"
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
            
            <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: '600px' }}>
              {/* PLACEHOLDER - Replace this entire div with your Google Calendar iframe */}
              <div className="flex flex-col items-center justify-center h-full p-12 text-center">
                <Calendar className="h-16 w-16 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Calendar Scheduling Coming Soon
                </h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 max-w-md">
                  <div className="flex gap-2 items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-yellow-800 mb-1">
                        For Website Owner:
                      </p>
                      <p className="text-sm text-yellow-700">
                        Replace this placeholder with your Google Calendar appointment schedule embed code. 
                        See the comments in BookingEmbed.jsx for instructions.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  For now, please use the contact form below to get in touch.
                </p>
              </div>
              
              {/* 
                PASTE YOUR GOOGLE CALENDAR IFRAME HERE
                Example:
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID" 
                  className="w-full h-[600px] border-0"
                  title="Book an Appointment">
                </iframe>
              */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
