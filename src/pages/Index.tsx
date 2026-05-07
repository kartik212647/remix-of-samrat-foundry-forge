import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Factory, Flame, Clock, Award, Users, Cog, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GallerySlider from '@/components/GallerySlider';
import heroImage from '@/assets/hero-kiln.jpg';
import industriesImage from '@/assets/industries-refractory.jpg';
import fireBricksImg from '@/assets/products/fire-bricks.jpg';
import castablesImg from '@/assets/products/castables.jpg';
import insulationImg from '@/assets/products/insulation.jpg';
import specialtyImg from '@/assets/products/specialty.jpg';

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
  {
    icon: Cog,
    title: 'Manufacturing on Demand',
    description: 'Custom refractory solutions built for specific industrial requirements and operational challenges.',
  },
];

const showcaseProducts = [
  { name: 'High Alumina Bricks', image: fireBricksImg, category: 'Bricks' },
  { name: 'Refractory Castables', image: castablesImg, category: 'Castables' },
  { name: 'Ceramic Fiber Insulation', image: insulationImg, category: 'Insulation' },
  { name: 'Specialty Products', image: specialtyImg, category: 'Auxiliary' },
  { name: 'Fire Clay Bricks', image: fireBricksImg, category: 'Bricks' },
  { name: 'Insulating Castables', image: castablesImg, category: 'Castables' },
];

const industries = [
  'Steel & Foundry',
  'Cement Plants',
  'Power Plants',
  'Glass Industries',
  'Chemical Plants',
  'Rolling Mills & Furnaces',
];

const stats = [
  { value: '25+', label: 'Years Experience', icon: Clock },
  { value: '100+', label: 'Projects Executed', icon: Award },
  { value: '200+', label: 'Industrial Clients', icon: Users },
];

const trustIndicators = [
  'GST Registered',
  'HSN Compliant',
  'Certified Raw Materials',
];

function ProductShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-hidden rounded-sm">
        <div className="flex">
          {showcaseProducts.map((product, i) => (
            <div key={i} className="flex-[0_0_50%] sm:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 pl-4">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border group/card hover:border-primary/30 transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider">{product.category}</span>
                  <h4 className="text-white text-sm font-semibold leading-tight">{product.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40"></div>
        </div>

        <div className="container-industrial relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Refractory Engineering Excellence
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight">
                Reliable Refractory & Insulation Solutions for{' '}
                <span className="text-gradient-orange">Industrial Applications</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
                Serving steel, cement, power, glass & chemical industries with manufactured refractories,
                insulation systems, and on-site installation — trusted for over 25 years.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary gap-2 group text-sm">
                  Get Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919897329686?text=Hello%2C%20I%20am%20interested%20in%20your%20refractory%20products.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-foreground text-sm"
                >
                  WhatsApp Now
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-5 mt-10 pt-6 border-t border-white/20">
                {trustIndicators.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/70 text-xs font-mono">
                    <Shield size={12} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Engineering-Driven Refractory Solutions"
              />
              <ScrollReveal delay={100}>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Samrat Refractories Works is an engineering-driven refractory manufacturer and 
                  service provider delivering critical refractory solutions for industrial heating systems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  With over 25 years of execution experience, we specialize in designing, supplying, 
                  and installing refractory systems that withstand extreme temperatures, corrosive 
                  environments, and continuous industrial operations.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-medium group">
                  Learn More About Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-industrial p-4 md:p-5 text-center hover-lift hover-glow transition-all duration-300">
                    <stat.icon size={20} className="text-primary mx-auto mb-3" />
                    <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
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

      {/* Core Capabilities */}
      <section className="section-metallic py-16 md:py-20">
        <div className="container-industrial">
          <SectionHeader
            label="Core Capabilities"
            title="Integrated Manufacturing & Service Model"
            description="From advanced refractory manufacturing to expert installation and maintenance — complete solutions under one roof."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-industrial p-6 h-full hover-lift hover-glow transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Our Products"
            title="Premium Refractory Products"
            description="Explore our range of high-performance refractory materials engineered for demanding industrial environments."
            centered
          />
          <ScrollReveal>
            <ProductShowcaseCarousel />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="text-center mt-8">
              <Link to="/products" className="btn-primary gap-2 group text-sm">
                View All Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeader
                label="Industries"
                title="Serving Critical High-Temperature Applications"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <ScrollReveal key={industry} delay={index * 100}>
                    <div className="flex items-center gap-2.5 p-3 border border-border rounded-sm hover:border-primary/30 transition-colors group">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                        {industry}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={400}>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-6 group">
                  View All Industries
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-sm border border-border overflow-hidden">
                  <img 
                    src={industriesImage} 
                    alt="Refractory brick lining inside high-temperature furnace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-mono text-xs text-white/90">
                      Operating in mission-critical, high-temperature industrial environments
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 border border-primary/20 rounded-sm"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-primary/20 rounded-sm"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <GallerySlider className="bg-background" />

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial">
          <SectionHeader
            label="Why Samrat"
            title="Your Trusted Refractory Execution Partner"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'Technical Expertise', desc: 'Deep understanding of thermal systems across industries' },
              { title: 'Proven Reliability', desc: 'Consistent execution in mission-critical applications' },
              { title: 'Integrated Model', desc: 'Manufacturing + service under single accountability' },
              { title: 'Quality Materials', desc: 'Certified raw materials and controlled processes' },
              { title: 'Skilled Workforce', desc: 'Experienced refractory technicians and supervisors' },
              { title: 'Long-term Focus', desc: 'We prioritize durable partnerships, consistent quality, and sustainable industrial performance' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="flex items-start gap-3 p-4 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <span className="w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-primary text-xs">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-0.5">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise & Quality */}
      <section className="section-metallic py-16 md:py-20">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-industrial p-6 md:p-8 h-full">
                <SectionHeader
                  label="Technical Expertise"
                  title="Engineering Excellence"
                />
                <ul className="space-y-3 mt-4">
                  {[
                    'Advanced thermal analysis and material selection',
                    'Custom refractory design for unique applications',
                    'Installation supervision by experienced engineers',
                    'Post-installation support and maintenance planning',
                    'Compliance with Industry Norms & Integrity-driven Engineering Practices',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-industrial p-6 md:p-8 h-full">
                <SectionHeader
                  label="Quality Assurance"
                  title="Uncompromising Standards"
                />
                <ul className="space-y-3 mt-4">
                  {[
                    'Certified raw materials from trusted suppliers',
                    'In-process quality checks at every stage',
                    'Final inspection before dispatch',
                    'Documentation and traceability for all products',
                    'Supply on Fuel Basis – Quality consistency maintained across fuel-specific industrial applications',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="container-industrial relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-6 h-px bg-primary"></span>
                Start Your Project
                <span className="w-6 h-px bg-primary"></span>
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ready to Discuss Your Refractory Requirements?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Connect with our technical team to discuss your project needs. From initial consultation 
                to project execution, we're here to deliver reliable refractory solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary gap-2 group text-sm">
                  Contact Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-outline text-sm">
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
