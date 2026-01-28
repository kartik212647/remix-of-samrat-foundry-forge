import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Wrench, Award, Shield, CheckCircle, FileCheck, Building2, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const capabilities = [
  {
    icon: Users,
    title: 'Skilled Technical Workforce',
    description: 'Our refractory technicians bring years of hands-on experience in industrial installations.',
  },
  {
    icon: Target,
    title: 'Site-Specific Approach',
    description: 'We analyze each project\'s unique requirements to recommend optimal solutions.',
  },
  {
    icon: Wrench,
    title: 'Precision Installation',
    description: 'Our installation practices follow established methodologies with multiple quality checkpoints.',
  },
  {
    icon: Award,
    title: 'Performance Focus',
    description: 'Every project is executed with long-term performance in mind.',
  },
];

const executionPrinciples = [
  { number: '01', title: 'Assessment', description: 'Thorough site assessment and understanding of operational requirements.' },
  { number: '02', title: 'Planning', description: 'Detailed execution planning including material staging and quality control points.' },
  { number: '03', title: 'Execution', description: 'Disciplined installation following approved procedures with continuous supervision.' },
  { number: '04', title: 'Quality Check', description: 'Comprehensive quality verification before handover.' },
];

const qualityPillars = [
  { icon: FileCheck, title: 'Material Quality', description: 'We source raw materials from certified suppliers with strict quality checks.' },
  { icon: Shield, title: 'Process Control', description: 'Our processes follow documented procedures with defined quality checkpoints.' },
  { icon: CheckCircle, title: 'Installation Standards', description: 'Every installation is supervised and verified against specifications.' },
  { icon: Building2, title: 'Continuous Improvement', description: 'We learn from each project to continuously improve our processes.' },
];

const compliance = [
  { title: 'GST Registration', description: 'Fully compliant with Goods and Services Tax requirements.', status: 'Active' },
  { title: 'HSN Classification', description: 'All products properly classified under Harmonized System.', status: 'Compliant' },
  { title: 'Banking Credibility', description: 'Established banking relationship with Union Bank of India.', status: 'Verified' },
  { title: 'Certified Materials', description: 'Use of quality-certified raw materials from reputable suppliers.', status: 'Certified' },
];

const reasons = [
  { icon: Clock, title: '15+ Years Experience', description: 'Over a decade of hands-on experience in refractory manufacturing and installation.' },
  { icon: Award, title: 'Technical Expertise', description: 'Deep understanding of thermal systems, material properties, and installation techniques.' },
  { icon: Shield, title: 'Proven Reliability', description: 'Track record of successful project execution in mission-critical applications.' },
  { icon: Wrench, title: 'Integrated Model', description: 'Combined manufacturing and service capability under single accountability.' },
  { icon: Users, title: 'Skilled Workforce', description: 'Experienced technicians trained in proper installation and safety protocols.' },
  { icon: Target, title: 'Long-term Focus', description: 'Solutions designed for durability and long-term performance.' },
];

export default function QualityProcess() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Our Quality & Process
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Quality Embedded in Every Process
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Quality is not an afterthought — it's embedded in material selection, workmanship, 
                and supervision throughout every project we undertake.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Execution Capabilities */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="What Sets Us Apart"
            title="Our Execution Capabilities"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-5 h-full hover-lift hover-glow transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Our Process"
            title="Systematic Execution Approach"
            description="Every project follows a structured approach to ensure consistent quality and reliable outcomes."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {executionPrinciples.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 100}>
                <div className="relative p-5 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <span className="font-mono text-4xl font-bold text-primary/10 absolute top-3 right-3">
                    {item.number}
                  </span>
                  <span className="font-mono text-primary text-xs">{item.number}</span>
                  <h4 className="text-sm font-semibold text-foreground mt-2 mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Quality Framework"
            title="Our Approach to Quality"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityPillars.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-5 h-full text-center hover-lift hover-glow transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Compliance"
            title="Regulatory & Business Compliance"
            description="We maintain full compliance with applicable regulations and industry standards."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {compliance.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="flex items-start gap-3 p-4 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-foreground text-sm truncate">{item.title}</h4>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded flex-shrink-0">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Samrat */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Why Samrat"
            title="Your Trusted Refractory Partner"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-5 h-full hover-lift hover-glow transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                label="Track Record"
                title="Proven Performance Across Industries"
              />
              <ScrollReveal delay={100}>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Our project portfolio spans boiler lining for power plants, furnace installations 
                  for steel industries, and insulation work for thermal equipment manufacturers.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  We take pride in our repeat business — a testament to the quality of our work 
                  and our commitment to client satisfaction.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/contact" className="btn-primary gap-2 group text-sm">
                  Discuss Your Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '100+', label: 'Projects Completed' },
                  { value: '50+', label: 'Industrial Clients' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '90%+', label: 'Repeat Business' },
                ].map((stat) => (
                  <div key={stat.label} className="card-industrial p-4 text-center">
                    <div className="font-display text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container-industrial">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base md:text-lg text-foreground italic leading-relaxed">
                "We believe that quality is the foundation of reliability. In refractory applications, 
                there is no room for compromise — our reputation is built on the performance of 
                every installation we execute."
              </p>
              <p className="mt-4 text-muted-foreground text-sm font-medium">
                — Samrat Refractories Works
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Ready to Partner With Us?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
              Let's discuss how Samrat Refractories Works can support your refractory requirements 
              with reliable execution and long-term value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group text-sm">
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline text-sm">
                Explore Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
