import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Wrench, RefreshCw, Shield } from 'lucide-react';
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
    ],
    brands: [],
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
    ],
    brands: [],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Complete Refractory Execution Services
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From new installations to repairs and modernization — expert refractory services 
                backed by 15+ years of execution experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={100}>
                <div className="card-industrial p-8 md:p-12 hover-glow transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon size={28} className="text-primary" />
                        </div>
                        <div>
                          <span className="font-mono text-primary text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="heading-md text-foreground">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-body mb-6">{service.description}</p>
                      
                      {service.brands.length > 0 && (
                        <div className="pt-6 border-t border-border">
                          <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                            Experience with Major Brands
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.brands.map((brand) => (
                              <span key={brand} className="px-3 py-1 bg-secondary border border-border rounded-sm text-sm text-muted-foreground">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">
                        Service Scope
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Our technical team is ready to discuss your refractory service requirements. 
              From initial assessment to project completion, we're your execution partner.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group">
                Request Service Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="btn-outline">
                View Our Capabilities
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
