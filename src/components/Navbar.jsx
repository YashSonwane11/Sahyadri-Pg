import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, contactInfo } from '../data/pgData';

// Custom inline SVG logo matching the Sahyadri theme (mountain + calligraphy style text)
export const Logo = ({ className = 'h-10' }) => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 100 80" className={`${className} fill-current text-primary`} xmlns="http://www.w3.org/2000/svg">
      {/* Mountain outline */}
      <polygon points="50,15 15,70 85,70" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="50,15 40,40 55,50 65,70 85,70 50,15" fill="currentColor" opacity="0.15" />
      {/* Small peak next to it */}
      <polygon points="70,40 50,70 90,70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Snow cap line on main peak */}
      <polyline points="40,32 50,42 60,32" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sun rising */}
      <circle cx="50" cy="70" r="10" fill="none" stroke="#d4af37" strokeWidth="4" strokeDasharray="3 3" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-sans font-extrabold text-xl tracking-wider text-primary">SAHYADRI</span>
      <span className="font-sans text-[10px] tracking-widest text-[#a39e95] uppercase font-bold">Luxury PG Living</span>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to update header background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-soft-beige/85 backdrop-blur-md border-b border-[#f5efeb]/40 shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" id="nav-logo" aria-label="Sahyadri PG Home" className="shrink-0">
            <Logo className="h-10 sm:h-12 text-primary" />
          </Link>

          {/* Desktop Navigation Link Items - centered with layout-stable spacing and font scaling */}
          <nav className="hidden xl:flex items-center justify-center gap-4 xl:gap-5 2xl:gap-7 flex-grow mx-4 max-w-5xl shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-primary py-2.5 shrink-0 whitespace-nowrap relative ${
                    isScrolled
                      ? isActive ? 'text-primary' : 'text-premium-black'
                      : isActive ? 'text-white font-bold' : 'text-white/95'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="pb-1 block">{link.name}</span>
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s+/g, '')}`}
              id="nav-cta-call"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs xl:text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <FaPhoneAlt size={11} className="xl:size-3" />
              <span>Book a Visit</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'text-premium-black hover:bg-premium-black/5' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Sidebar Drawer Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-premium-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Nav Sidebar Drawer Content */}
      <div
        className={`xl:hidden fixed top-0 right-0 z-50 h-full w-[80vw] max-w-[400px] bg-soft-beige shadow-2xl p-6 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between border-b border-[#f5efeb] pb-6 mb-6">
          <Logo className="h-10 text-primary" />
          <button
            onClick={() => setIsOpen(false)}
            id="mobile-menu-close"
            aria-label="Close menu"
            className="text-premium-black p-2 hover:bg-premium-black/5 rounded-full transition-colors"
          >
            <FaTimes size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 mb-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-base font-semibold py-2 transition-colors ${isActive ? 'text-primary border-l-4 border-primary pl-3' : 'text-premium-black/80 hover:text-primary pl-0'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-[#f5efeb] pt-6">
          <p className="text-xs text-premium-black/50 font-medium tracking-wide uppercase">Direct Contact</p>
          {contactInfo.phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-premium-black hover:text-primary transition-colors text-sm font-semibold"
            >
              <FaPhoneAlt size={14} className="text-primary" />
              <span>{phone}</span>
            </a>
          ))}
          <a
            href={`tel:${contactInfo.phones[0].replace(/\s+/g, '')}`}
            id="mobile-menu-cta"
            className="w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-md mt-4 block"
            onClick={() => setIsOpen(false)}
          >
            Book a Visit Now
          </a>
        </div>
      </div>
    </header>
  );
}
