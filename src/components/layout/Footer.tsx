import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Quality & Process', href: '/quality-process' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Boiler Refractory Lining',
  'Furnace & Mill Lining',
  'Repair & Modernization',
  'Hot & Cold Insulation',
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-industrial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Samrat Refractories Works" className="h-12 w-auto mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Engineering reliable refractory solutions for high-temperature industries. 
              25+ years of proven execution excellence.
            </p>
            <div className="flex items-center gap-2 text-primary font-mono text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              GST Registered
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="break-words">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact for details
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@samratrefractories.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@samratrefractories.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Samrat Refractories Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-muted-foreground">
              HSN Compliant
            </span>
            <span className="w-px h-4 bg-border"></span>
            <span className="font-mono text-xs text-muted-foreground">
              Union Bank of India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
