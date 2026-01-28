import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Cog, Flame, Factory, ThermometerSun } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const industries = [
  {
    icon: Flame,
    title: 'Boilers & Power Systems',
    description: 'Industrial boilers, package boilers, and waste heat recovery systems.',
    applications: ['Industrial boilers', 'Package boilers', 'Waste heat recovery', 'Steam generators'],
  },
  {
    icon: Factory,
    title: 'Steel & Foundry',
    description: 'Molten metal applications from ladles to tundish systems.',
    applications: ['Molten metal flow', 'Ladles & tundish', 'Casting areas', 'Induction furnaces'],
  },
  {
    icon: Cog,
    title: 'Rolling Mills & Furnaces',
    description: 'Reheating furnaces, annealing furnaces, and heat treatment units.',
    applications: ['Reheating furnaces', 'Annealing furnaces', 'Heat treatment', 'Continuous casting'],
  },
  {
    icon: ThermometerSun,
    title: 'Air Heaters & Thermal',
    description: 'Hot air generators and industrial heating chambers.',
    applications: ['Hot air generators', 'Heating chambers', 'Thermal oxidizers', 'Heat exchangers'],
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Building Trust Through Engineering Excellence
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Samrat Refractories Works is a proprietorship-led industrial enterprise founded and 
                operated by Mr. Sanjay Singh, focused on delivering dependable refractory engineering solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionHeader
                label="Our Story"
                title="15+ Years of Refractory Expertise"
              />
              <ScrollReveal delay={100}>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Our operations combine technical expertise, modern installation practices, and 
                  quality-controlled materials to support industries where failure is not an option.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  We operate with a skilled technical team, modern tools, and a deep understanding 
                  of thermal systems across industries. Every project reflects our commitment to 
                  reliability and long-term performance.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  From boiler refractory lining to complex furnace installations, our execution 
                  philosophy prioritizes precision, safety, and durability.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, title: 'Leadership', desc: 'Proprietor-led with hands-on technical oversight' },
                { icon: Cog, title: 'Methodology', desc: 'Proven installation and quality control practices' },
                { icon: Target, title: 'Focus', desc: 'Mission-critical industrial applications' },
                { icon: Eye, title: 'Approach', desc: 'Long-term performance over short-term gains' },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="card-industrial p-4 md:p-5 h-full hover-lift hover-glow transition-all duration-300">
                    <item.icon size={20} className="text-primary mb-3" />
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="card-industrial p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                  <Target size={20} className="text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To deliver refractory solutions that enhance equipment life, improve thermal 
                  efficiency, and reduce operational downtime for industrial operations across India.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-industrial p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                  <Eye size={20} className="text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become a trusted refractory execution partner across industrial clusters in 
                  India, recognized for technical expertise, reliable execution, and unwavering 
                  commitment to quality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Industries We Serve"
            title="Serving Critical High-Temperature Applications"
            description="Our refractory solutions support industries where reliability, durability, and technical execution are essential."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={index * 100}>
                <div className="card-industrial p-5 h-full hover-lift hover-glow transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                    <industry.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{industry.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{industry.description}</p>
                  <ul className="space-y-1">
                    {industry.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-muted-foreground text-xs">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Work Culture"
            title="Execution Philosophy"
            description="Our approach to every project is grounded in technical rigor, attention to detail, and a commitment to delivering results that last."
            centered
          />

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { number: '01', title: 'Technical Precision', desc: 'Every installation follows established methodologies and quality checkpoints.' },
              { number: '02', title: 'Safety First', desc: 'Strict adherence to industrial safety standards in all operations.' },
              { number: '03', title: 'Client Partnership', desc: 'Transparent communication and collaborative problem-solving approach.' },
            ].map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 100}>
                <div className="text-center p-5">
                  <span className="font-mono text-primary text-3xl font-bold">{item.number}</span>
                  <h4 className="text-base font-semibold text-foreground mt-3 mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Partner With a Team That Delivers
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
              Learn more about our capabilities and how we can support your refractory requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link to="/contact" className="btn-primary gap-2 group text-sm">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
