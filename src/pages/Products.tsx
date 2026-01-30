import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package, Thermometer, Scale, Zap, Shield, Lightbulb } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  badge: string;
  temperature?: string;
  density?: string;
  benefit: string;
  application?: string;
}

interface ProductCategory {
  icon: React.ElementType;
  title: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    icon: Layers,
    title: 'High Alumina & Fire Bricks',
    products: [
      {
        name: 'High Alumina Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1800°C',
        density: '2.4–2.8 g/cm³',
        benefit: 'Superior load bearing & thermal resistance',
      },
      {
        name: 'Fire Clay Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1500°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Excellent durability for general applications',
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1600°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Lightweight with low thermal conductivity',
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex installations',
      },
    ],
  },
  {
    icon: Droplets,
    title: 'Castables (Dense & Insulating)',
    products: [
      {
        name: 'Alumina Based Castables',
        badge: 'Dense',
        temperature: 'Up to 1700°C',
        benefit: 'Versatile for high-temp linings',
        application: 'Complex shapes & seamless linings',
      },
      {
        name: 'Low Cement Castables',
        badge: 'Dense',
        temperature: 'Up to 1650°C',
        benefit: 'High strength & abrasion resistance',
        application: 'Heavy-duty industrial furnaces',
      },
      {
        name: 'High Purity Castables',
        badge: 'Dense',
        temperature: 'Up to 1750°C',
        benefit: 'Superior chemical resistance',
        application: 'Corrosive environment applications',
      },
      {
        name: 'Insulating Castables',
        badge: 'Insulating',
        temperature: 'Up to 1400°C',
        benefit: 'Energy-efficient thermal barrier',
        application: 'Backup lining & heat conservation',
      },
      {
        name: 'Self-Flow Castables',
        badge: 'Dense',
        temperature: 'Up to 1600°C',
        benefit: 'Easy installation, no vibration needed',
        application: 'Intricate mold filling',
      },
    ],
  },
  {
    icon: Flame,
    title: 'Insulation Materials',
    products: [
      {
        name: 'Ceramic Fiber Blankets',
        badge: 'Lightweight',
        temperature: 'Up to 1400°C',
        benefit: 'Excellent thermal insulation & flexibility',
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Lightweight',
        temperature: 'Up to 1400°C',
        benefit: 'Quick installation with pre-engineered units',
      },
      {
        name: 'Insulating Bricks',
        badge: 'Lightweight',
        temperature: 'Up to 1600°C',
        benefit: 'Structural insulation with low heat storage',
      },
      {
        name: 'Rockwool Mattresses',
        badge: 'Lightweight',
        temperature: 'Up to 750°C',
        benefit: 'Cost-effective thermal & acoustic insulation',
      },
      {
        name: 'Calcium Silicate Boards',
        badge: 'Lightweight',
        temperature: 'Up to 1000°C',
        benefit: 'Fire-resistant with excellent machinability',
      },
    ],
  },
  {
    icon: Package,
    title: 'Specialty & Auxiliary Products',
    products: [
      {
        name: 'Refractory Mortars',
        badge: 'Certified',
        benefit: 'High-bond strength jointing material',
        application: 'Brick laying & repairs',
      },
      {
        name: 'Fire Cement',
        badge: 'Certified',
        benefit: 'Quick-setting heat-resistant adhesive',
        application: 'Sealing & patching',
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Certified',
        benefit: 'Chemical & corrosion resistance',
        application: 'Chemical plant flooring',
      },
      {
        name: 'Boiler Fire Doors',
        badge: 'Quality Tested',
        benefit: 'Secure access with thermal protection',
        application: 'Boiler maintenance access',
      },
      {
        name: 'Boiler Nozzles',
        badge: 'Quality Tested',
        benefit: 'Precision-engineered for optimal flow',
        application: 'Combustion systems',
      },
      {
        name: 'Anchors & Hardware',
        badge: 'Quality Tested',
        benefit: 'Reliable refractory support systems',
        application: 'Lining installation & anchoring',
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={index * 50}>
      <Card className="h-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-heading font-semibold text-foreground text-base leading-tight">
              {product.name}
            </h4>
            <Badge variant="secondary" className="text-[10px] font-mono shrink-0">
              {product.badge}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-4 space-y-3">
          {/* Specs */}
          <div className="flex flex-wrap gap-2">
            {product.temperature && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                <Thermometer size={12} className="text-primary" />
                <span className="font-mono">{product.temperature}</span>
              </div>
            )}
            {product.density && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                <Scale size={12} className="text-primary" />
                <span className="font-mono">{product.density}</span>
              </div>
            )}
          </div>
          
          {/* Benefit */}
          <div className="flex items-start gap-2">
            <Zap size={14} className="text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.benefit}
            </p>
          </div>
          
          {/* Application */}
          {product.application && (
            <div className="flex items-start gap-2">
              <Lightbulb size={14} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground/80">
                {product.application}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link to="/contact">
              View Details
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
}

function CategorySection({ category, categoryIndex }: { category: ProductCategory; categoryIndex: number }) {
  const Icon = category.icon;
  
  return (
    <section className="mb-12 last:mb-0">
      <ScrollReveal delay={categoryIndex * 100}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
            <Icon size={20} className="text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-foreground text-lg md:text-xl">
            {category.title}
          </h3>
          <div className="flex-1 h-px bg-border ml-2"></div>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {category.products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-10 md:pt-32 md:pb-12 bg-background">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-3">
                <span className="w-6 h-px bg-primary"></span>
                Our Products
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Refractory Products We Manufacture & Supply
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Quality-controlled refractory materials designed for demanding industrial applications. 
                All products comply with applicable HSN standards and industrial requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container-industrial">
          {productCategories.map((category, index) => (
            <CategorySection key={category.title} category={category} categoryIndex={index} />
          ))}
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-6 bg-background border-y border-border">
        <div className="container-industrial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Shield size={16} className="text-primary" />
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
      <section className="py-12 md:py-16 bg-background">
        <div className="container-industrial text-center">
          <ScrollReveal>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3">
              Need Technical Specifications?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-5">
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
