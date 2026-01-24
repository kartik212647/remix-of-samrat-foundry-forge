import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Cog } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Building Trust Through Engineering Excellence
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Samrat Refractories Works is a proprietorship-led industrial enterprise founded and 
                operated by Mr. Sanjay Singh, focused on delivering dependable refractory engineering solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeader
                label="Our Story"
                title="15+ Years of Refractory Expertise"
              />
              <ScrollReveal delay={100}>
                <p className="text-body mb-6">
                  Our operations combine technical expertise, modern installation practices, and 
                  quality-controlled materials to support industries where failure is not an option.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-body mb-6">
                  We operate with a skilled technical team, modern tools, and a deep understanding 
                  of thermal systems across industries. Every project we undertake reflects our 
                  commitment to reliability and long-term performance.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-body">
                  From boiler refractory lining to complex furnace installations, our execution 
                  philosophy prioritizes precision, safety, and durability — ensuring that every 
                  system we build performs under the most demanding conditions.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: 'Leadership', desc: 'Proprietor-led with hands-on technical oversight' },
                { icon: Cog, title: 'Methodology', desc: 'Proven installation and quality control practices' },
                { icon: Target, title: 'Focus', desc: 'Mission-critical industrial applications' },
                { icon: Eye, title: 'Approach', desc: 'Long-term performance over short-term gains' },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="card-industrial p-6 h-full hover-lift hover-glow transition-all duration-300">
                    <item.icon size={24} className="text-primary mb-4" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-industrial p-8 md:p-12 h-full">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-4">Our Mission</h3>
                <p className="text-body">
                  To deliver refractory solutions that enhance equipment life, improve thermal 
                  efficiency, and reduce operational downtime for industrial operations across India.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-industrial p-8 md:p-12 h-full">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <Eye size={24} className="text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-4">Our Vision</h3>
                <p className="text-body">
                  To become a trusted refractory execution partner across industrial clusters in 
                  India, recognized for technical expertise, reliable execution, and unwavering 
                  commitment to quality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <SectionHeader
            label="Work Culture"
            title="Execution Philosophy"
            description="Our approach to every project is grounded in technical rigor, attention to detail, and a commitment to delivering results that last."
            centered
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '01', title: 'Technical Precision', desc: 'Every installation follows established methodologies and quality checkpoints.' },
              { number: '02', title: 'Safety First', desc: 'Strict adherence to industrial safety standards in all operations.' },
              { number: '03', title: 'Client Partnership', desc: 'Transparent communication and collaborative problem-solving approach.' },
            ].map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 100}>
                <div className="text-center p-6">
                  <span className="font-mono text-primary text-4xl font-bold">{item.number}</span>
                  <h4 className="heading-sm text-foreground mt-4 mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              Partner With a Team That Delivers
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Learn more about our capabilities and how we can support your refractory requirements.
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
