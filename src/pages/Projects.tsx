import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Wrench, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const capabilities = [
  {
    icon: Users,
    title: 'Skilled Technical Workforce',
    description: 'Our refractory technicians bring years of hands-on experience in industrial installations. Each team member is trained in proper installation techniques and safety protocols.',
  },
  {
    icon: Target,
    title: 'Site-Specific Approach',
    description: 'We analyze each project\'s unique requirements — temperature profiles, operating conditions, and material compatibility — to recommend optimal solutions.',
  },
  {
    icon: Wrench,
    title: 'Precision Installation',
    description: 'Our installation practices follow established methodologies with multiple quality checkpoints. We focus on proper curing, joint integrity, and thermal expansion allowances.',
  },
  {
    icon: Award,
    title: 'Performance Focus',
    description: 'Every project is executed with long-term performance in mind. We prioritize solutions that minimize future maintenance and maximize equipment life.',
  },
];

const executionPrinciples = [
  {
    number: '01',
    title: 'Assessment',
    description: 'Thorough site assessment and understanding of operational requirements before proposing solutions.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Detailed execution planning including material staging, sequence, and quality control points.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Disciplined installation following approved procedures with continuous supervision.',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'Comprehensive quality verification before handover to ensure installation meets specifications.',
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Projects & Capabilities
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Execution Expertise That Delivers Results
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We have successfully executed multiple refractory projects across industrial plants 
                with repeat clients and long-term partnerships built on reliable performance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="What Sets Us Apart"
            title="Our Execution Capabilities"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-8 h-full hover-lift hover-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-sm text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Our Process"
            title="Systematic Execution Approach"
            description="Every project follows a structured approach to ensure consistent quality and reliable outcomes."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionPrinciples.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 100}>
                <div className="relative p-6 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <span className="font-mono text-5xl font-bold text-primary/10 absolute top-4 right-4">
                    {item.number}
                  </span>
                  <span className="font-mono text-primary text-sm">{item.number}</span>
                  <h4 className="heading-sm text-foreground mt-2 mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Track Record"
                title="Proven Performance Across Industries"
              />
              <ScrollReveal delay={100}>
                <p className="text-body mb-6">
                  Our project portfolio spans boiler lining for power plants, furnace installations 
                  for steel industries, and insulation work for thermal equipment manufacturers.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-body mb-8">
                  We take pride in our repeat business — a testament to the quality of our work 
                  and our commitment to client satisfaction.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/contact" className="btn-primary gap-2 group">
                  Discuss Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100+', label: 'Projects Completed' },
                  { value: '50+', label: 'Industrial Clients' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '90%+', label: 'Repeat Business' },
                ].map((stat) => (
                  <div key={stat.label} className="card-industrial p-6 text-center">
                    <div className="font-display text-3xl font-bold text-primary mb-2">
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-6">
              Let's Discuss Your Next Project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Whether it's a new installation or a repair project, our team is ready 
              to bring our execution expertise to your facility.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link to="/contact" className="btn-primary gap-2 group">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
