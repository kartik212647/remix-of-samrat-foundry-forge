import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Users, Wrench, Shield, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const reasons = [
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Over a decade and a half of hands-on experience in refractory manufacturing and installation across diverse industrial applications.',
  },
  {
    icon: Award,
    title: 'Technical Expertise',
    description: 'Deep understanding of thermal systems, material properties, and installation techniques that comes from years of practical execution.',
  },
  {
    icon: Shield,
    title: 'Proven Reliability',
    description: 'Track record of successful project execution in mission-critical applications where performance and durability are non-negotiable.',
  },
  {
    icon: Wrench,
    title: 'Integrated Model',
    description: 'Combined manufacturing and service capability under single accountability — ensuring material quality and installation excellence work together.',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description: 'Experienced refractory technicians trained in proper installation techniques, safety protocols, and quality standards.',
  },
  {
    icon: Target,
    title: 'Long-term Focus',
    description: 'Solutions designed for durability and long-term performance — not short-term fixes that lead to recurring problems.',
  },
];

const differentiators = [
  {
    title: 'Not Just a Supplier',
    description: 'We are execution partners. We don\'t just supply materials — we take responsibility for proper installation and performance.',
  },
  {
    title: 'Technical Consultation',
    description: 'Our team provides technical guidance on material selection, installation methods, and system optimization.',
  },
  {
    title: 'Responsive Support',
    description: 'When you need us, we\'re available. From planned shutdowns to emergency repairs, we respond quickly.',
  },
];

export default function WhySamrat() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Why Samrat
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Your Trusted Refractory Execution Partner
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                When reliability matters, experience counts. Discover why industrial clients 
                choose Samrat Refractories Works for their critical refractory requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Our Strengths"
            title="What Sets Us Apart"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-8 h-full hover-lift hover-glow transition-all duration-300">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
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

      {/* Partnership Approach */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                label="Partnership Approach"
                title="More Than a Vendor — A Partner"
              />
              <ScrollReveal delay={100}>
                <p className="text-body mb-8">
                  We approach every client relationship as a long-term partnership. Our success 
                  is measured by the performance of your equipment and the value we deliver 
                  over time — not by the volume of materials we sell.
                </p>
              </ScrollReveal>
              <div className="space-y-6">
                {differentiators.map((item, index) => (
                  <ScrollReveal key={item.title} delay={(index + 1) * 100}>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-primary text-sm">{String(index + 1).padStart(2, '0')}</span>
                      </span>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={200}>
              <div className="card-industrial p-8 md:p-12">
                <h3 className="heading-md text-foreground mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  {[
                    'Honest assessment of your requirements',
                    'Transparent pricing with no hidden costs',
                    'Quality materials and proper installation',
                    'Post-installation support when needed',
                    'Long-term performance focus',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Let's discuss how Samrat Refractories Works can support your refractory requirements 
              with reliable execution and long-term value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group">
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
