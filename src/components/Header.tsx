import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            {/* Logo/Brand space - can add logo here later if needed */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 hover:text-slate-600 font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="mailto:jangam.monikap@gmail.com"
              className={`transition-colors duration-300 hover:text-slate-600 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+19737064142"
              className={`transition-colors duration-300 hover:text-slate-600 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Phone size={18} />
            </a>
            <a
              href="https://linkedin.com/in/monikajangam"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-slate-600 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 border border-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;