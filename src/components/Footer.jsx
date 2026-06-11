import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { navLinks, contactInfo } from '../data/pgData';
import { Logo } from './Navbar';

export default function Footer() {
  return (
    <footer className="bg-premium-black text-[#f5efeb]/80 border-t border-[#f5efeb]/10 pt-10 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-4 md:gap-6 col-span-2 lg:col-span-1">
            <div className="text-white">
              <Logo className="h-10" variant="white" />
            </div>
            <p className="hidden md:block text-sm leading-relaxed text-[#f5efeb]/60">
              Providing clean, comfortable, safe, and highly affordable luxury student accommodations near MIT ADT University, Loni Kalbhor, Pune. Experience premium student living.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://instagram.com/sahyadri_pg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://facebook.com/sahyadri_pg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation links */}
          <div className="flex flex-col gap-5 col-span-1">
            <h3 className="text-white font-sans text-base font-bold tracking-wider uppercase">Sitemap</h3>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors text-[#f5efeb]/70">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Properties/Rooms & Amenities */}
          <div className="flex flex-col gap-5 col-span-1">
            <h3 className="text-white font-sans text-base font-bold tracking-wider uppercase">Accommodations</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#f5efeb]/70">
              <li>
                <Link to="/rooms" className="hover:text-primary transition-colors">
                  Double Sharing Rooms
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-primary transition-colors">
                  Triple Sharing Rooms
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-primary transition-colors">
                  Boys PG Accommodations
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-primary transition-colors">
                  Girls PG Accommodations
                </Link>
              </li>
              <li>
                <Link to="/mess" className="hover:text-primary transition-colors">
                  Daily Mess Package & Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col gap-5 col-span-2 lg:col-span-1">
            <h3 className="text-white font-sans text-base font-bold tracking-wider uppercase">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-[#f5efeb]/70">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" size={16} />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              {contactInfo.phones.map((phone, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary shrink-0" size={14} />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" size={14} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5efeb]/40 gap-4">
          <p>© 2026 Sahyadri PG. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
