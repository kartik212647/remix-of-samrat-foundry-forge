import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const productCategories = [
  {
    title: 'High Alumina & Fire Bricks',
    description: 'Designed for high-load and high-temperature environments. Our bricks meet stringent quality standards for durability and thermal resistance.',
    products: [
      'High alumina bricks (45-90% Al₂O₃)',
      'Fire clay bricks',
      'Insulating fire bricks',
      'Special shaped bricks',
    ],
  },
  {
    title: 'Castables (Dense & Insulating)',
    description: 'Versatile monolithic refractories for complex shapes and seamless linings. Available in various grades for different temperature requirements.',
    products: [
      'Alumina based castables',
      'Low cement castables',
      'High purity castables',
      'Insulating castables',
      'Self-flow castables',
    ],
  },
  {
    title: 'Insulation Materials',
    description: 'Comprehensive insulation solutions for energy efficiency and safety. Our materials reduce heat loss and protect personnel and equipment.',
    products: [
      'Ceramic fiber blankets',
      'Ceramic fiber modules',
      'Insulating bricks',
      'Rockwool mattresses',
      'Calcium silicate boards',
    ],
  },
  {
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
  },
];

export default function Products() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container-industrial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-primary"></span>
                Our Products
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl text-foreground mb-6">
                Refractory Products We Manufacture & Supply
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Quality-controlled refractory materials designed for demanding industrial applications. 
                All products comply with applicable HSN standards and industrial requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <div className="card-industrial p-8 h-full hover-glow transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-mono text-primary text-2xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="heading-sm text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
                      Product Range
                    </h4>
                    <ul className="space-y-2">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
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
      <section className="py-12 bg-background border-y border-border">
        <div className="container-industrial">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-mono text-sm text-muted-foreground">
                All products comply with applicable HSN standards
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-muted-foreground">GST Registered</span>
              <span className="w-px h-4 bg-border"></span>
              <span className="font-mono text-xs text-muted-foreground">Quality Certified Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-6">
              Need Technical Specifications?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Contact our technical team for detailed product specifications, 
              material recommendations, and custom requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group">
                Request Product Details
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline">
                View Installation Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
