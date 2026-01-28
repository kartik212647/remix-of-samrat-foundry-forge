import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const productCategories = [
  {
    icon: Layers,
    title: 'High Alumina & Fire Bricks',
    description: 'Designed for high-load and high-temperature environments. Our bricks meet stringent quality standards for durability and thermal resistance.',
    products: [
      'High alumina bricks (45-90% Al₂O₃)',
      'Fire clay bricks',
      'Insulating fire bricks',
      'Special shaped bricks',
    ],
    specs: ['Temp: up to 1800°C', 'Density: 2.2-2.8 g/cm³'],
  },
  {
    icon: Droplets,
    title: 'Castables (Dense & Insulating)',
    description: 'Versatile monolithic refractories for complex shapes and seamless linings. Available in various grades for different temperature requirements.',
    products: [
      'Alumina based castables',
      'Low cement castables',
      'High purity castables',
      'Insulating castables',
      'Self-flow castables',
    ],
    specs: ['Temp: up to 1700°C', 'Various densities'],
  },
  {
    icon: Flame,
    title: 'Insulation Materials',
    description: 'Comprehensive insulation solutions for energy efficiency and safety. Our materials reduce heat loss and protect personnel and equipment.',
    products: [
      'Ceramic fiber blankets',
      'Ceramic fiber modules',
      'Insulating bricks',
      'Rockwool mattresses',
      'Calcium silicate boards',
    ],
    specs: ['Thermal conductivity: Low', 'Weight: Lightweight'],
  },
  {
    icon: Package,
    title: 'Specialty & Auxiliary Products',
    description: 'Supporting materials and specialty products for complete refractory installations. Quality-tested for compatibility and performance.',
    products: [
      'Refractory mortars',
      'Fire cement',
      'Acid proof tiles',
      'Boiler fire doors',
      'Boiler nozzles',
      'Anchors and hardware',
    ],
    specs: ['Application: Various', 'Quality: Certified'],
  },
];

export default function Products() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Our Products
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Refractory Products We Manufacture & Supply
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Quality-controlled refractory materials designed for demanding industrial applications. 
                All products comply with applicable HSN standards and industrial requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-industrial">
          <div className="grid sm:grid-cols-2 gap-6">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <div className="card-industrial p-6 h-full hover-lift hover-glow transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <category.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.specs.map((spec) => (
                          <span key={spec} className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Product List */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-3">
                      Product Range
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-8 bg-background border-y border-border">
        <div className="container-industrial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-mono text-xs text-muted-foreground">
                All products comply with applicable HSN standards
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground">GST Registered</span>
              <span className="w-px h-4 bg-border"></span>
              <span className="font-mono text-xs text-muted-foreground">Quality Certified Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Need Technical Specifications?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
              Contact our technical team for detailed product specifications, 
              material recommendations, and custom requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group text-sm">
                Request Product Details
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline text-sm">
                View Installation Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
