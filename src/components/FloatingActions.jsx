import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { contactInfo } from '../data/pgData';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detection to toggle Visibility of "Back to Top" button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent("Hi Sahyadri PG team, I'm interested in booking a room. Could you please share more details?");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating CTA */}
      <motion.a
        href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        id="float-whatsapp"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* Call Now Floating CTA */}
      <motion.a
        href={`tel:${contactInfo.phones[0].replace(/\s+/g, '')}`}
        id="float-call"
        aria-label="Call Sahyadri PG"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <FaPhoneAlt size={20} />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            id="float-back-to-top"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-white text-primary border border-[#f5efeb] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
