import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Samrat Refractories Works', 'Roorkee, Uttarakhand, India'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98973 29686'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['sanjaysingh@samratrefractories.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setFormData(prev => ({
        ...prev,
        service: 'products',
        message: prev.message
          ? prev.message
          : `I would like a quote for: ${product}\n\nPlease share technical specifications, pricing, and lead time.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle at 25% 30%, hsl(0 72% 45%) 1px, transparent 1px), radial-gradient(circle at 75% 70%, hsl(0 0% 30%) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
        <div className="absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl" />
        <div className="container-industrial relative">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.25em] uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Contact Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Let's Discuss Your <span className="text-gradient-orange">Refractory Project</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Connect with our technical team to discuss your project needs.
                From initial consultation to site visit, we're here to help.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact info quick cards */}
      <section className="pb-4 bg-background">
        <div className="container-industrial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="card-premium h-full p-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-xs leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-secondary/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="container-industrial relative">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map + side panel */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="card-premium-dark p-7 group">
                  <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase">Talk Directly</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5 mb-4">
                    Prefer a Quick Call?
                  </h3>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    Our technical team is available for direct discussions, on-site visits, and emergency shutdown support.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+919897329686" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all group/c">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-md shadow-primary/30 group-hover/c:scale-110 transition-transform">
                        <Phone size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-wider">Call us</p>
                        <p className="text-sm font-semibold text-white truncate">+91 98973 29686</p>
                      </div>
                      <ArrowRight size={14} className="text-primary opacity-0 -translate-x-2 group-hover/c:opacity-100 group-hover/c:translate-x-0 transition-all" />
                    </a>
                    <a href="mailto:sanjaysingh@samratrefractories.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all group/c">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-md shadow-primary/30 group-hover/c:scale-110 transition-transform">
                        <Mail size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-wider">Email</p>
                        <p className="text-xs font-semibold text-white truncate">sanjaysingh@samratrefractories.com</p>
                      </div>
                      <ArrowRight size={14} className="text-primary opacity-0 -translate-x-2 group-hover/c:opacity-100 group-hover/c:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="rounded-3xl overflow-hidden border border-border/60 shadow-elevated bg-card">
                  <iframe
                    title="Samrat Refractories Works Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d77.710724!3d29.057468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSamrat+Refractories+Works!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="relative rounded-[2rem] overflow-hidden border border-border/60 p-8 md:p-10"
                  style={{
                    background: 'linear-gradient(165deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 55%, hsl(0 0% 95%) 100%)',
                    boxShadow: '0 30px 60px -25px hsl(0 0% 0% / 0.18), inset 0 1px 0 hsl(0 0% 100% / 0.9)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                  <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl pointer-events-none" />

                  <div className="relative">
                  <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase">Enquiry Form</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1.5 mb-6">Send Us an Enquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="boiler-lining">Boiler Refractory Lining</option>
                        <option value="furnace-lining">Furnace & Mill Lining</option>
                        <option value="repair">Repair & Modernization</option>
                        <option value="insulation">Insulation Work</option>
                        <option value="products">Refractory Products Supply</option>
                        <option value="consultation">Technical Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background/80 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Describe your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full md:w-auto gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit Enquiry
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
