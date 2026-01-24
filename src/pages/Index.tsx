import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Factory, Flame, Clock, Award, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import heroImage from '@/assets/hero-industrial.jpg';

const capabilities = [
  {
    icon: Factory,
    title: 'Advanced Manufacturing',
    description: 'High alumina bricks, castables, and specialty refractory materials manufactured to precise specifications.',
  },
  {
    icon: Wrench,
    title: 'Lining & Relining',
    description: 'Expert boiler and furnace refractory lining services with proven execution methodology.',
  },
  {
    icon: Flame,
    title: 'Repair & Modification',
    description: 'Shutdown maintenance, emergency repairs, and thermal efficiency upgrades for existing systems.',
  },
  {
    icon: Shield,
    title: 'Insulation Systems',
    description: 'Hot and cold insulation solutions for energy loss reduction and safety compliance.',
  },
];

const industries = [
  'Boilers & Power Systems',
  'Steel & Foundry',
  'Rolling Mills & Furnaces',
  'Air Heaters & Thermal Equipment',
];

const stats = [
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '100+', label: 'Projects Executed', icon: Award },
  { value: '50+', label: 'Industrial Clients', icon: Users },
];

const trustIndicators = [
  'GST Registered',
  'HSN Compliant',
  'Banking with Union Bank of India',
  'Certified Raw Materials',
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-overlay-hero"></div>
        </div>

        <div className="container-industrial relative z-10 pt-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Refractory Engineering Excellence
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Engineering Reliable Refractory Solutions for{' '}
                <span className="text-gradient-orange">High-Temperature Industries</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Manufacturing, lining, relining, and maintenance of refractory systems for boilers, 
                furnaces, and molten metal applications — trusted for over 15 years.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary gap-2 group">
                  Get Technical Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Request Site Visit
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/30">
                {trustIndicators.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                    <Shield size={14} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Engineering-Driven Refractory Solutions"
              />
              <ScrollReveal delay={100}>
                <p className="text-body mb-6">
                  Samrat Refractories Works is an engineering-driven refractory manufacturer and 
                  service provider delivering critical refractory solutions for industrial heating systems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-body mb-8">
                  With over 15 years of execution experience, we specialize in designing, supplying, 
                  and installing refractory systems that withstand extreme temperatures, corrosive 
                  environments, and continuous industrial operations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium group">
                  Learn More About Us
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-industrial p-6 text-center hover-lift hover-glow transition-all duration-300">
                    <stat.icon size={24} className="text-primary mx-auto mb-4" />
                    <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Core Capabilities"
            title="Integrated Manufacturing & Service Model"
            description="From advanced refractory manufacturing to expert installation and maintenance — complete solutions under one roof."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-8 h-full hover-lift hover-glow transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="heading-sm text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                label="Industries"
                title="Serving Critical High-Temperature Applications"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <ScrollReveal key={industry} delay={index * 100}>
                    <div className="flex items-center gap-3 p-4 border border-border rounded-sm hover:border-primary/30 transition-colors group">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {industry}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={400}>
                <Link to="/industries" className="inline-flex items-center gap-2 text-primary font-medium mt-8 group">
                  View All Industries
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Visual Element */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-secondary to-background rounded-sm border border-border p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Flame size={80} className="text-primary mx-auto mb-6 opacity-80" />
                    <p className="font-mono text-sm text-muted-foreground">
                      Operating in mission-critical, high-temperature industrial environments
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/20 rounded-sm"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Why Samrat"
            title="Your Trusted Refractory Execution Partner"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Technical Expertise', desc: 'Deep understanding of thermal systems across industries' },
              { title: 'Proven Reliability', desc: 'Consistent execution in mission-critical applications' },
              { title: 'Integrated Model', desc: 'Manufacturing + service under single accountability' },
              { title: 'Quality Materials', desc: 'Certified raw materials and controlled processes' },
              { title: 'Skilled Workforce', desc: 'Experienced refractory technicians and supervisors' },
              { title: 'Long-term Focus', desc: 'Solutions designed for durability and performance' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-primary text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="container-industrial relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Start Your Project
                <span className="w-8 h-px bg-primary"></span>
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="heading-lg text-foreground mb-6">
                Ready to Discuss Your Refractory Requirements?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-body mb-8">
                Connect with our technical team to discuss your project needs. From initial consultation 
                to project execution, we're here to deliver reliable refractory solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary gap-2 group">
                  Get Technical Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
