import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { companyInfo, navLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img
                src={companyInfo.logoDark}
                alt="LEUWE TISSUE Logo"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed text-sm sm:text-base">
              LEUWE TISSUE is South Africa's trusted manufacturer of premium quality 
              tissue products. We deliver excellence in every roll, serving businesses 
              and consumers nationwide.
            </p>
            <div className="flex gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm sm:text-base break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-200"
          >
            <span className="text-xs sm:text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
