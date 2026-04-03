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

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary border-t border-border">
        <div className="container-industrial section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
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

            {/* Products */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-6">Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
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
                    Samrat Refractories Works, Roorkee, Uttarakhand, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+919897329686" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +91 98973 29686
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a href="mailto:sanjaysingh@samratrefractories.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    sanjaysingh@samratrefractories.com
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
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
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
