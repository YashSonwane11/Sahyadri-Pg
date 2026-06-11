import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { navLinks, contactInfo } from '../data/pgData';
import logoSahyadri from '../assets/logo-sahyadri.svg';
import logoSahyadriWhite from '../assets/logo-sahyadri-white.svg';

export const Logo = ({ className = 'h-10', variant = 'dark' }) => {
  const src = variant === 'white' ? logoSahyadriWhite : logoSahyadri;
  return (
    <img src={src} alt="Sahyadri PG Logo" className={`${className} w-auto object-contain`} />
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showSolid = isScrolled || !isHomePage;

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms & Pricing', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
  ];

  const dropdownLinks = [
    { name: 'Mess Package & Menu', path: '/mess' },
    { name: 'Event Celebration', path: '/events' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const isDropdownActive = dropdownLinks.some(link => location.pathname === link.path);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(isDropdownActive);

  // Sync mobile explore open state if route changes
  useEffect(() => {
    if (isDropdownActive) {
      setIsMobileExploreOpen(true);
    }
  }, [location.pathname, isDropdownActive]);

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
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolid
        ? 'bg-soft-beige/85 backdrop-blur-md border-b border-[#f5efeb]/40 shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" id="nav-logo" aria-label="Sahyadri PG Home" className="shrink-0">
            <Logo className="h-10 sm:h-12" variant={showSolid ? 'dark' : 'white'} />
          </Link>

          {/* Desktop Navigation Link Items - centered with layout-stable spacing and font scaling */}
          <nav className="hidden xl:flex items-center justify-center gap-4 xl:gap-5 2xl:gap-7 flex-grow mx-4 max-w-5xl shrink-0">
            {mainLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-primary py-2.5 shrink-0 whitespace-nowrap relative ${
                    showSolid
                      ? isActive ? 'text-primary' : 'text-premium-black'
                      : isActive ? 'text-white font-bold' : 'text-white/95'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="pb-1 block">{link.name}</span>
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${showSolid ? 'bg-primary' : 'bg-white'}`} />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Explore Dropdown Trigger & Popover */}
            <div
              className="relative py-2.5"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-body text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-primary py-2.5 shrink-0 whitespace-nowrap cursor-pointer relative ${
                  showSolid
                    ? isDropdownActive ? 'text-primary' : 'text-premium-black'
                    : isDropdownActive ? 'text-white font-bold' : 'text-white/95'
                }`}
              >
                <span className="pb-1">Explore</span>
                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-300 ml-1 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
                {isDropdownActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${showSolid ? 'bg-primary' : 'bg-white'}`} />
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#f5efeb] py-2 z-50 overflow-hidden">
                  {dropdownLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-5 py-2.5 text-xs xl:text-sm font-semibold transition-colors hover:bg-primary/5 hover:text-primary ${
                          isActive ? 'text-primary bg-primary/5' : 'text-premium-black/85'
                        }`
                      }
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us Link */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-body text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-primary py-2.5 shrink-0 whitespace-nowrap relative ${
                  showSolid
                    ? isActive ? 'text-primary' : 'text-premium-black'
                    : isActive ? 'text-white font-bold' : 'text-white/95'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="pb-1 block">Contact Us</span>
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${showSolid ? 'bg-primary' : 'bg-white'}`} />
                  )}
                </>
              )}
            </NavLink>
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
                showSolid ? 'text-premium-black hover:bg-premium-black/5' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Nav Sidebar Drawer Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-[60] bg-premium-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Nav Sidebar Drawer Content */}
      <div
        className={`xl:hidden fixed top-0 right-0 z-[70] h-screen w-[80vw] max-w-[400px] bg-soft-beige shadow-2xl p-6 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
          {mainLinks.map((link) => (
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

          {/* Mobile Collapsible Accordion for Explore */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
              className={`w-full flex items-center justify-between font-body text-base font-semibold py-2 transition-colors cursor-pointer text-left ${
                isDropdownActive ? 'text-primary' : 'text-premium-black/80 hover:text-primary'
              }`}
            >
              <span>Explore</span>
              <FaChevronDown
                size={14}
                className={`transition-transform duration-300 ${isMobileExploreOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {isMobileExploreOpen && (
              <div className="pl-4 border-l border-[#f5efeb] mt-2 flex flex-col gap-3">
                {dropdownLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `font-body text-sm font-semibold py-1.5 transition-colors ${
                        isActive ? 'text-primary' : 'text-premium-black/70 hover:text-primary'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Contact Link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-body text-base font-semibold py-2 transition-colors ${isActive ? 'text-primary border-l-4 border-primary pl-3' : 'text-premium-black/80 hover:text-primary pl-0'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
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
    </>
  );
}
