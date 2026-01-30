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
  image: string;
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
        image: '/placeholder.svg',
      },
      {
        name: 'Fire Clay Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1500°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Excellent durability for general applications',
        image: '/placeholder.svg',
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1600°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Lightweight with low thermal conductivity',
        image: '/placeholder.svg',
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex installations',
        image: '/placeholder.svg',
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
        image: '/placeholder.svg',
      },
      {
        name: 'Low Cement Castables',
        badge: 'Dense',
        temperature: 'Up to 1650°C',
        benefit: 'High strength & abrasion resistance',
        application: 'Heavy-duty industrial furnaces',
        image: '/placeholder.svg',
      },
      {
        name: 'High Purity Castables',
        badge: 'Dense',
        temperature: 'Up to 1750°C',
        benefit: 'Superior chemical resistance',
        application: 'Corrosive environment applications',
        image: '/placeholder.svg',
      },
      {
        name: 'Insulating Castables',
        badge: 'Insulating',
        temperature: 'Up to 1400°C',
        benefit: 'Energy-efficient thermal barrier',
        application: 'Backup lining & heat conservation',
        image: '/placeholder.svg',
      },
      {
        name: 'Self-Flow Castables',
        badge: 'Dense',
        temperature: 'Up to 1600°C',
        benefit: 'Easy installation, no vibration needed',
        application: 'Intricate mold filling',
        image: '/placeholder.svg',
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
        image: '/placeholder.svg',
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Lightweight',
        temperature: 'Up to 1400°C',
        benefit: 'Quick installation with pre-engineered units',
        image: '/placeholder.svg',
      },
      {
        name: 'Insulating Bricks',
        badge: 'Lightweight',
        temperature: 'Up to 1600°C',
        benefit: 'Structural insulation with low heat storage',
        image: '/placeholder.svg',
      },
      {
        name: 'Rockwool Mattresses',
        badge: 'Lightweight',
        temperature: 'Up to 750°C',
        benefit: 'Cost-effective thermal & acoustic insulation',
        image: '/placeholder.svg',
      },
      {
        name: 'Calcium Silicate Boards',
        badge: 'Lightweight',
        temperature: 'Up to 1000°C',
        benefit: 'Fire-resistant with excellent machinability',
        image: '/placeholder.svg',
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
        image: '/placeholder.svg',
      },
      {
        name: 'Fire Cement',
        badge: 'Certified',
        benefit: 'Quick-setting heat-resistant adhesive',
        application: 'Sealing & patching',
        image: '/placeholder.svg',
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Certified',
        benefit: 'Chemical & corrosion resistance',
        application: 'Chemical plant flooring',
        image: '/placeholder.svg',
      },
      {
        name: 'Boiler Fire Doors',
        badge: 'Quality Tested',
        benefit: 'Secure access with thermal protection',
        application: 'Boiler maintenance access',
        image: '/placeholder.svg',
      },
      {
        name: 'Boiler Nozzles',
        badge: 'Quality Tested',
        benefit: 'Precision-engineered for optimal flow',
        application: 'Combustion systems',
        image: '/placeholder.svg',
      },
      {
        name: 'Anchors & Hardware',
        badge: 'Quality Tested',
        benefit: 'Reliable refractory support systems',
        application: 'Lining installation & anchoring',
        image: '/placeholder.svg',
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={index * 50}>
      <Card className="h-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden">
        {/* Product Image */}
        <div className="relative h-32 sm:h-40 bg-secondary overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 text-[10px] font-mono bg-background/90 backdrop-blur-sm"
          >
            {product.badge}
          </Badge>
        </div>
        
        <CardHeader className="pb-2 pt-3">
          <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base leading-tight line-clamp-2">
            {product.name}
          </h4>
        </CardHeader>
        <CardContent className="pb-3 space-y-2">
          {/* Specs */}
          <div className="flex flex-wrap gap-1.5">
            {product.temperature && (
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                <Thermometer size={10} className="text-primary flex-shrink-0" />
                <span className="font-mono truncate">{product.temperature}</span>
              </div>
            )}
            {product.density && (
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                <Scale size={10} className="text-primary flex-shrink-0" />
                <span className="font-mono truncate">{product.density}</span>
              </div>
            )}
          </div>
          
          {/* Benefit */}
          <div className="flex items-start gap-1.5">
            <Zap size={12} className="text-primary mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {product.benefit}
            </p>
          </div>
          
          {/* Application */}
          {product.application && (
            <div className="flex items-start gap-1.5">
              <Lightbulb size={12} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-[10px] sm:text-xs text-muted-foreground/80 line-clamp-1">
                {product.application}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0 pb-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-[10px] sm:text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link to="/contact">
              View Details
              <ArrowRight size={12} className="ml-1" />
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
