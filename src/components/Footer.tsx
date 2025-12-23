"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="col-span-1">
            <Link href="/" className="text-primary font-bold text-h3 mb-4 block">
              Deep4IT
            </Link>
            <p className="text-gray-400 text-body-sm mb-6">
              We develop proprietary AI technologies for the financial sector. Juno is our AI assistant team for workers&apos; financial wellbeing.
            </p>
            <div className="flex">
              <a
                href="https://www.linkedin.com/company/deep4it"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-h4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 max-w-xs">
              {[
                { label: "Home", href: "#home" },
                { label: "Technology", href: "#about" },
                { label: "Awards", href: "#selections" },
                { label: "Roadmap", href: "#roadmap" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-h4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-body-sm">
                  Via Italia, 44<br />
                  20900 Monza, Italy
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@deep4it.com"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-body-sm"
                >
                  info@deep4it.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-body-sm mb-4 md:mb-0">
            &copy; {currentYear} Deep4It srl. All rights reserved. | Share Capital: € 70.000,00 | VAT: 13477300969
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-gray-500 text-caption px-2 py-1 bg-gray-900 rounded-full flex items-center h-7">
              Made in Italy 🇮🇹
            </span>
            <span className="text-gray-500 text-caption px-2 py-1 bg-gray-900 rounded-full flex items-center h-7">
              Powered by Next.js
            </span>
            <span className="text-gray-500 text-caption px-2 py-1 bg-gray-900 rounded-full flex items-center h-7">
              <span className="text-primary">AI</span> Enhanced
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
