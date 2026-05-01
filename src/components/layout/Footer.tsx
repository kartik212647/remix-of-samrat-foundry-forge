import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Quality & Process', href: '/quality-process' },
  { name: 'Contact', href: '/contact' },
];

const products = [
  { name: 'High Alumina Bricks', href: '/products' },
  { name: 'Fire Clay Bricks', href: '/products' },
  { name: 'Dense Castables', href: '/products' },
  { name: 'Ceramic Fiber Blanket', href: '/products' },
  { name: 'Insulating Fire Bricks', href: '/products' },
  { name: 'Refractory Cement', href: '/products' },
];

const services = [
  'Boiler Refractory Lining',
  'Furnace & Mill Lining',
  'Repair & Modernization',
  'Hot & Cold Insulation',
];

const industriesServed = [
  'Steel & Foundry',
  'Cement Plants',
  'Power Plants',
  'Glass Industries',
  'Chemical Plants',
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-fg))] border-t-4 border-primary">
        <div className="container-industrial section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Samrat Refractories Works" className="h-12 w-auto mb-6 brightness-0 invert" />
              <p className="text-[hsl(var(--footer-muted))] text-sm leading-relaxed mb-6">
                Engineering reliable refractory solutions for high-temperature industries. 
                25+ years of proven execution excellence.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/15 text-primary font-mono text-xs border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                GST Registered
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase text-sm tracking-wider">Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.href}
                      className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="break-words">{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="break-words">{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Served */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase text-sm tracking-wider">Industries</h4>
              <ul className="space-y-3">
                {industriesServed.map((industry) => (
                  <li key={industry}>
                    <Link
                      to="/about"
                      className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="break-words">{industry}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-[hsl(var(--footer-muted))] text-sm">
                    Samrat Refractories Works, Roorkee, Uttarakhand, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+919897329686" className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors text-sm">
                    +91 98973 29686
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a href="mailto:sanjaysingh@samratrefractories.com" className="text-[hsl(var(--footer-muted))] hover:text-primary transition-colors text-sm break-all">
                    sanjaysingh@samratrefractories.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[hsl(var(--footer-muted))] text-sm">
              © {new Date().getFullYear()} Samrat Refractories Works. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-[hsl(var(--footer-muted))]">
                HSN Compliant
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919897329686?text=Hello%2C%20I%20am%20interested%20in%20your%20refractory%20products.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
        <a
          href="tel:+919897329686"
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  );
}
