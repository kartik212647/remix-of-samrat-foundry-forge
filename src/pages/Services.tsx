import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Wrench, RefreshCw, Shield, Cog } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    icon: Flame,
    title: 'Boiler Refractory Lining & Relining',
    description: 'Complete refractory lining and relining services for industrial boilers. Our experienced team has executed projects for major OEMs and end-users across India.',
    features: [
      'New boiler refractory installations',
      'Relining of existing boilers',
      'Performance optimization',
      'Emergency shutdown support',
    ],
    brands: ['Thermax', 'Babcock & Wilcox', 'Texmaco', 'Lipi', 'Indicon', 'Veesons', 'Thermopach'],
    subcategories: ['Hut Shape', 'Thermopack Boiler', 'RDF Boiler'],
  },
  {
    icon: Wrench,
    title: 'Furnace & Rolling Mill Lining',
    description: 'Specialized refractory lining services for furnaces and rolling mills. We handle new installations, repairs, and complete relining projects with precision execution.',
    features: [
      'New lining installations',
      'Repair & modification',
      'Performance optimization',
      'Hot repairs where applicable',
    ],
    brands: [],
    subcategories: [],
  },
  {
    icon: RefreshCw,
    title: 'Repair & Modernization',
    description: 'Comprehensive repair and modernization services to extend equipment life and improve thermal efficiency. Our team responds to both planned shutdowns and emergency situations.',
    features: [
      'Shutdown maintenance',
      'Emergency repairs',
      'Thermal efficiency upgrades',
      'System modernization',
      'Boiler modification (for capacity increase)',
    ],
    brands: [],
    subcategories: [],
  },
  {
    icon: Shield,
    title: 'Hot & Cold Insulation Work',
    description: 'Professional insulation services for energy loss reduction and safety compliance. We work with a range of insulation materials to meet your specific requirements.',
    features: [
      'Hot insulation systems',
      'Cold insulation applications',
      'Energy loss reduction',
      'Safety & compliance improvement',
      'Tanks & Pipes',
      'Boilers & Ovens',
      'APH (Air Pre Heater)',
      'Economizer',
      'Headers',
      'Whole Boilers',
    ],
    brands: [],
    subcategories: [],
  },
  {
    icon: Cog,
    title: 'Manufacturing on Demand',
    description: 'Customized manufacturing solutions for special refractory products and tiles, developed as per specific operational requirements, industry norms, and on-site challenges. We provide tailored refractory solutions designed to perform under unique temperature, load, and application conditions.',
    features: [
      'Custom tile manufacturing',
      'Special refractory material development',
      'Application-specific solutions',
      'Engineering support during requirement analysis',
      'Solutions aligned with real-time industrial needs',
    ],
    brands: [],
    subcategories: [],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Complete Refractory Execution Services
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                From new installations to repairs and modernization — expert refractory services 
                backed by 25+ years of execution experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-industrial">
          <div className="space-y-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={80}>
                <div
                  className="group relative overflow-hidden rounded-[2rem] border border-border/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_40px_80px_-25px_hsl(0_72%_45%/0.35),0_0_0_1px_hsl(0_72%_45%/0.15)]"
                  style={{
                    background:
                      'linear-gradient(165deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 55%, hsl(0 0% 94%) 100%)',
                    boxShadow:
                      '0 10px 30px -12px hsl(0 0% 0% / 0.12), inset 0 1px 0 hsl(0 0% 100% / 0.9)',
                  }}
                >
                  {/* Red gradient top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent z-20" />
                  {/* Corner glow */}
                  <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Number watermark */}
                  <div className="pointer-events-none absolute top-6 right-8 font-mono text-[6rem] md:text-[8rem] leading-none font-bold text-primary/[0.04] select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative p-6 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-8">
                    {/* Icon column */}
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-[0_14px_36px_-10px_hsl(0_72%_45%/0.55)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                        <service.icon size={32} />
                      </div>
                      <div className="hidden md:block w-px h-full bg-gradient-to-b from-primary/40 via-border to-transparent flex-1" />
                    </div>

                    {/* Content column */}
                    <div className="min-w-0">
                      <span className="font-mono text-primary text-[11px] tracking-[0.25em] uppercase">
                        {String(index + 1).padStart(2, '0')} · Service
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-bold text-foreground mt-1.5 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Service Scope */}
                      <div className="relative rounded-2xl p-5 md:p-6 mb-5 border border-border/60 bg-gradient-to-br from-secondary/80 to-secondary/30">
                        <div className="absolute top-0 left-6 w-12 h-[2px] bg-primary rounded-full" />
                        <h4 className="font-mono text-[11px] text-primary uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Service Scope
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-foreground/85 text-sm">
                              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-primary/60 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-primary/40"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.subcategories && service.subcategories.length > 0 && (
                        <div className="mb-5 p-5 rounded-2xl border border-border/60 bg-card/60">
                          <h4 className="font-mono text-[11px] text-primary uppercase tracking-[0.2em] mb-3">
                            Category of Lining & Relining
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.subcategories.map((sub) => (
                              <span
                                key={sub}
                                className="px-3.5 py-1.5 bg-gradient-to-br from-background to-secondary/60 border border-primary/20 rounded-full text-sm text-foreground font-medium shadow-sm"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.brands.length > 0 && (
                        <div className="pt-5 border-t border-dashed border-border">
                          <h4 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-3">
                            Experience with Major Brands
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.brands.map((brand) => (
                              <span
                                key={brand}
                                className="px-3 py-1 bg-secondary/70 border border-border rounded-full text-xs text-foreground/80 font-medium"
                              >
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: 'var(--gradient-dark-red)' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(0 0% 100%) 1px, transparent 1px), radial-gradient(circle at 80% 70%, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-industrial text-center relative">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto mb-6">
              Our technical team is ready to discuss your refractory service requirements. 
              From initial assessment to project completion, we're your execution partner.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group text-sm">
                Request Service Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products" className="btn-outline text-sm bg-white/5 border-white text-white hover:!bg-white hover:!text-foreground">
                View Our Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
