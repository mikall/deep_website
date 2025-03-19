"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation and close menu with smooth scrolling
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/DEEP4IT_logo.png" 
                alt="Deep4IT Logo" 
                className="h-6 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block h-full">
            <div className="ml-10 flex items-center space-x-8 h-full">
              <NavLink href="#home" label="Home" />
              <NavLink href="#about" label="Proposition" />
              <NavLink href="#demo" label="Demo" />
              <NavLink href="#selections" label="Recognition" />
              <NavLink href="#team" label="Team" />
              <NavLink href="#roadmap" label="Roadmap" />
              <Link 
                href="#contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 border border-purple-700 hover:border-purple-500 flex items-center justify-center h-8"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('footer');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                    
                    // Update URL without page reload
                    window.history.pushState(null, '', '#contact');
                  }
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 border-b border-gray-800"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          <MobileNavLink href="#home" label="Home" onClick={handleNavigation} />
          <MobileNavLink href="#about" label="Proposition" onClick={handleNavigation} />
          <MobileNavLink href="#demo" label="Demo" onClick={handleNavigation} />
          <MobileNavLink href="#selections" label="Recognition" onClick={handleNavigation} />
          <MobileNavLink href="#team" label="Team" onClick={handleNavigation} />
          <MobileNavLink href="#roadmap" label="Roadmap" onClick={handleNavigation} />
          <div className="pt-4 pb-2">
            <Link 
              href="#contact" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 border border-purple-700 hover:border-purple-500 block text-center"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const contactSection = document.querySelector('footer');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                  
                  // Update URL without page reload
                  window.history.pushState(null, '', '#contact');
                }
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-body-sm font-medium transition-colors duration-300 flex items-center justify-center h-8"
    onClick={(e) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        window.history.pushState(null, '', href);
      }
    }}
  >
    {label}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-body font-medium border-l-2 border-transparent hover:border-purple-500 transition-all duration-300"
    onClick={(e) => onClick(e, href)}
  >
    {label}
  </Link>
);

export default Navbar;
