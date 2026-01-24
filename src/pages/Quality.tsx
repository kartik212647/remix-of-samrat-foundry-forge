import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, FileCheck, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const qualityPillars = [
  {
    icon: FileCheck,
    title: 'Material Quality',
    description: 'We source raw materials from certified suppliers and maintain strict incoming quality checks to ensure material consistency.',
  },
  {
    icon: Shield,
    title: 'Process Control',
    description: 'Our manufacturing and installation processes follow documented procedures with defined quality checkpoints.',
  },
  {
    icon: CheckCircle,
    title: 'Installation Standards',
    description: 'Every installation is supervised by experienced technicians and verified against specifications before handover.',
  },
  {
    icon: Building2,
    title: 'Continuous Improvement',
    description: 'We learn from each project to continuously improve our processes and deliver better results.',
  },
];

const compliance = [
  {
    title: 'GST Registration',
    description: 'Fully compliant with Goods and Services Tax requirements for transparent business operations.',
    status: 'Active',
  },
  {
    title: 'HSN Classification',
    description: 'All products properly classified under Harmonized System of Nomenclature for clear documentation.',
    status: 'Compliant',
  },
  {
    title: 'Banking Credibility',
    description: 'Established banking relationship with Union Bank of India, demonstrating financial stability.',
    status: 'Verified',
  },
  {
    title: 'Certified Materials',
    description: 'Use of quality-certified raw materials from reputable suppliers with proper documentation.',
    status: 'Certified',
  },
];

export default function Quality() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Quality & Compliance
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Quality Embedded in Every Process
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Quality is not an afterthought — it's embedded in material selection, workmanship, 
                and supervision throughout every project we undertake.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Quality Framework"
            title="Our Approach to Quality"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-8 h-full text-center hover-lift hover-glow transition-all duration-300">
                  <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-primary" />
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

      {/* Compliance */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Compliance"
            title="Regulatory & Business Compliance"
            description="We maintain full compliance with applicable regulations and industry standards, ensuring transparent and credible business operations."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container-industrial">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-foreground italic leading-relaxed">
                "We believe that quality is the foundation of reliability. In refractory applications, 
                there is no room for compromise — our reputation is built on the performance of 
                every installation we execute."
              </p>
              <p className="mt-6 text-muted-foreground font-medium">
                — Samrat Refractories Works
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-6">
              Experience Quality-Driven Execution
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Partner with a team that prioritizes quality at every step. 
              Discuss your project requirements with us.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link to="/contact" className="btn-primary gap-2 group">
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
