import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Cog, Flame, Factory, ThermometerSun, Award, Shield, CheckCircle, Package, Truck, Clock, HeartHandshake, BadgeCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GallerySlider from '@/components/GallerySlider';
import ownerImage from '@/assets/owner-portrait.jpg';
import dealerCertificate from '@/assets/tata-dealer-certificate.png';

const industries = [
  {
    icon: Flame,
    title: 'Power Plants',
    description: 'Industrial boilers, package boilers, and waste heat recovery systems operating at extreme temperatures.',
    details: 'Refractories are used in combustion chambers, burner throats, and heat recovery zones. Operating conditions include temperatures up to 1600°C, thermal shock, and ash corrosion.',
    applications: ['Industrial boilers', 'Package boilers', 'Waste heat recovery', 'Steam generators'],
  },
  {
    icon: Factory,
    title: 'Steel & Foundry',
    description: 'Molten metal applications from ladles to tundish systems requiring high-performance linings.',
    details: 'Critical applications in steelmaking where refractories face molten metal contact at 1500-1700°C, slag attack, and mechanical erosion from metal flow.',
    applications: ['Molten metal flow', 'Ladles & tundish', 'Casting areas', 'Induction furnaces'],
  },
  {
    icon: Cog,
    title: 'Rolling Mills & Furnaces',
    description: 'Reheating furnaces, annealing furnaces, and heat treatment units for metal processing.',
    details: 'Refractories withstand continuous thermal cycling, scale buildup, and load-bearing conditions at temperatures ranging from 800°C to 1350°C.',
    applications: ['Reheating furnaces', 'Annealing furnaces', 'Heat treatment', 'Continuous casting'],
  },
  {
    icon: ThermometerSun,
    title: 'Air Heaters & Thermal',
    description: 'Hot air generators and industrial heating chambers for process heating applications.',
    details: 'Used in thermal oxidizers, heat exchangers, and process heating systems where temperature uniformity and energy efficiency are critical.',
    applications: ['Hot air generators', 'Heating chambers', 'Thermal oxidizers', 'Heat exchangers'],
  },
];

const tataBullets = [
  { icon: BadgeCheck, text: 'Official association with TATA refractory products' },
  { icon: Shield, text: 'Assured product authenticity & quality guarantee' },
  { icon: Truck, text: 'Reliable supply chain with timely delivery' },
  { icon: Clock, text: 'Consistent availability & quick turnaround' },
  { icon: HeartHandshake, text: 'Strong industry trust built over decades' },
  { icon: Package, text: 'Access to premium refractory materials' },
  { icon: Users, text: 'Dedicated customer support & technical guidance' },
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
                title="25+ Years of Refractory Expertise"
              />
              <ScrollReveal delay={100}>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  With over 25 years of experience in refractory manufacturing and supply, our operations 
                  combine technical expertise, modern installation practices, and quality-controlled materials 
                  to support industries where failure is not an option.
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

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: 'Leadership', desc: 'Proprietor-led with hands-on technical oversight' },
                { icon: Cog, title: 'Methodology', desc: 'Proven installation and quality control practices' },
                { icon: Target, title: 'Focus', desc: 'Mission-critical industrial applications' },
                { icon: Eye, title: 'Approach', desc: 'Long-term performance over short-term gains' },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="card-premium h-full p-5 md:p-6 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                        <item.icon size={20} />
                      </div>
                      <span className="font-mono text-[10px] text-primary/70 tracking-widest">0{index + 1}</span>
                    </div>
                    <h4 className="font-heading font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Owner - Enhanced */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Leadership"
            title="About the Founder"
            centered
          />
          <ScrollReveal>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              {/* Owner Image */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden border border-border">
                    <img
                      src={ownerImage}
                      alt="Mr. Sanjay Singh - Founder, Samrat Refractories Works"
                      className="w-full h-full object-cover scale-125"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-primary/20 rounded-sm -z-10"></div>
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <h3 className="font-heading font-bold text-foreground text-lg">Mr. Sanjay Singh</h3>
                  <p className="text-primary font-mono text-xs">Founder & Proprietor</p>
                </div>
              </div>

              {/* Owner Content */}
              <div className="lg:col-span-3 space-y-4">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  With over <strong className="text-foreground">25 years of hands-on experience</strong> in the refractory 
                  and industrial materials sector, Mr. Sanjay Singh founded Samrat Refractories Works with a 
                  clear vision — to deliver reliable, high-performance refractory solutions that industries can trust.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  His deep understanding of thermal systems, materials science, and on-site execution 
                  has been the driving force behind the company's growth and reputation. From personally 
                  overseeing critical installations to building long-term client relationships, his 
                  leadership reflects a commitment to quality that goes beyond business.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Vision', text: 'To become India\'s most trusted & reliable organization in refractory segment.' },
                    { label: 'Mission', text: 'Enhance equipment life and thermal efficiency for every client' },
                    { label: 'Values', text: 'Integrity, precision, and long-term value creation' },
                    { label: 'Commitment', text: 'Zero compromise on quality, safety, and delivery timelines' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-foreground font-semibold text-xs">{item.label}:</span>
                        <span className="text-muted-foreground text-xs ml-1">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TATA Association - Premium Redesign */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="relative p-8 md:p-10 rounded-sm border border-border/50 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, hsl(0 0% 98%) 0%, hsl(0 0% 95%) 50%, hsl(0 0% 93%) 100%)',
                  boxShadow: '0 4px 30px -8px hsl(0 0% 0% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.6)',
                }}
              >
                {/* Subtle metallic shine line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-sm flex items-center justify-center border border-border/50"
                      style={{ background: 'linear-gradient(145deg, hsl(0 0% 97%), hsl(0 0% 92%))' }}
                    >
                      <Shield size={40} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={18} className="text-primary" />
                      <span className="font-mono text-xs text-primary uppercase tracking-wider">Authorized Dealer</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Authorized & Trusted Dealer – TATA</h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      As an authorized dealer of TATA refractory products, Samrat Refractories brings the credibility, 
                      quality assurance, and supply reliability that industrial clients demand. This partnership reflects 
                      our adherence to the highest standards of product integrity and customer service in the refractory industry.
                    </p>
                  </div>
                </div>

                {/* Icon-based bullet points */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {tataBullets.map((bullet, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-primary/30 via-border to-border hover:from-primary hover:via-primary/40 hover:to-primary/10 transition-all duration-500"
                    >
                      <div className="relative flex items-start gap-3 rounded-2xl bg-card/95 backdrop-blur-sm p-4 h-full transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                          <bullet.icon size={16} />
                        </div>
                        <span className="text-sm text-foreground/85 leading-snug font-medium">{bullet.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dealer Certificate */}
                <div className="rounded-lg p-4 md:p-5 border border-border/60"
                  style={{
                    background: 'linear-gradient(145deg, hsl(0 0% 100%), hsl(0 0% 97%))',
                    boxShadow: '0 8px 24px -12px hsl(0 0% 0% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.8)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={16} className="text-primary" />
                      <p className="text-sm font-semibold text-foreground">Official Letter of Authorization</p>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">2026–27</span>
                  </div>
                  <a
                    href={dealerCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-md border border-border/60 group"
                  >
                    <img
                      src={dealerCertificate}
                      alt="TRL Krosaki Letter of Authorization 2026-27 — Samrat Refractories Works authorized channel partner certificate"
                      className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </a>
                  <p className="text-xs text-muted-foreground/80 mt-3 text-center">
                    Authorized channel partner of TRL Krosaki Refractories Limited · Valid till 31st March, 2027
                  </p>
                </div>

                {/* Bottom metallic line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </ScrollReveal>
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

      {/* Product Gallery Slider */}
      <GallerySlider
        label="Product Gallery"
        title="Our Products & Installations"
        description="A closer look at our refractory products, on-site installations, and insulation work across industrial facilities."
        className="bg-secondary"
      />

      {/* Industries We Serve */}
      <section className="section-metallic py-16 md:py-20">
        <div className="container-industrial">
          <SectionHeader
            label="Industries We Serve"
            title="Serving Critical High-Temperature Applications"
            description="Our refractory solutions support industries where reliability, durability, and technical execution are essential."
            centered
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={index * 100}>
                <div className="card-premium-dark h-full p-6 md:p-7 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/40 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                      <industry.icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[10px] text-primary/90 tracking-widest uppercase">0{index + 1} / Industry</span>
                      <h3 className="font-heading font-bold text-white text-lg mt-1 mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                      <p className="text-xs text-white/75 mb-2 leading-relaxed">{industry.description}</p>
                      <p className="text-xs text-white/55 italic mb-4 leading-relaxed">{industry.details}</p>
                      <div className="h-px w-full bg-gradient-to-r from-primary/50 via-white/15 to-transparent mb-3" />
                      <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {industry.applications.map((app) => (
                          <li key={app} className="flex items-center gap-2 text-white/80 text-xs">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/60"></span>
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
      <section className="section-metallic py-16 md:py-20">
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
