import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Factory, Cog, ThermometerSun } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const industries = [
  {
    icon: Flame,
    title: 'Boilers & Power Systems',
    description: 'Comprehensive refractory solutions for industrial boilers, package boilers, and waste heat recovery systems. Our lining and relining services ensure optimal thermal performance and extended equipment life.',
    applications: ['Industrial boilers', 'Package boilers', 'Waste heat recovery systems', 'Steam generators'],
  },
  {
    icon: Factory,
    title: 'Steel & Foundry',
    description: 'High-performance refractory materials and installation services for molten metal applications. From ladles to tundish systems, we deliver solutions that withstand extreme temperatures and corrosive environments.',
    applications: ['Molten metal flow control', 'Ladles & tundish applications', 'Casting areas', 'Induction furnaces'],
  },
  {
    icon: Cog,
    title: 'Rolling Mills & Furnaces',
    description: 'Specialized refractory lining for reheating furnaces, annealing furnaces, and heat treatment units. Our solutions are designed for continuous high-temperature operations and minimal downtime.',
    applications: ['Reheating furnaces', 'Annealing furnaces', 'Heat treatment units', 'Continuous casting'],
  },
  {
    icon: ThermometerSun,
    title: 'Air Heaters & Thermal Equipment',
    description: 'Custom refractory solutions for hot air generators and industrial heating chambers. We provide both new installations and retrofit services for improved thermal efficiency.',
    applications: ['Hot air generators', 'Industrial heating chambers', 'Thermal oxidizers', 'Heat exchangers'],
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Industries We Serve
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Serving Critical High-Temperature Applications
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our refractory solutions support industries where reliability, durability, and 
                technical execution are essential for continuous operations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={index * 100}>
                <div className="card-industrial p-8 md:p-12 hover-glow transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <industry.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="heading-md text-foreground">{industry.title}</h3>
                        </div>
                      </div>
                      <p className="text-body">{industry.description}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-4">
                        Key Applications
                      </h4>
                      <ul className="space-y-2">
                        {industry.applications.map((app) => (
                          <li key={app} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {app}
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
              Your Industry. Our Expertise.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Discuss your specific industrial requirements with our technical team.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group">
                Discuss Your Requirements
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
