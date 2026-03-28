import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package, Thermometer, Scale, Zap, Shield, Lightbulb } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import fireBricksImg from '@/assets/products/fire-bricks.jpg';
import castablesImg from '@/assets/products/castables.jpg';
import insulationImg from '@/assets/products/insulation.jpg';
import specialtyImg from '@/assets/products/specialty.jpg';

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
        image: fireBricksImg,
      },
      {
        name: 'Fire Clay Bricks',
        badge: 'Bricks',
        temperature: 'Up to 1000°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Excellent durability for general applications',
        image: fireBricksImg,
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Bricks',
        temperature: '600°C – 800°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Lightweight with low thermal conductivity',
        image: fireBricksImg,
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Bricks',
        temperature: '600°C – 800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex installations',
        image: fireBricksImg,
      },
      {
        name: 'Slabs – Straight',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Flat refractory slabs for uniform lining surfaces',
        image: fireBricksImg,
      },
      {
        name: 'Slabs – Arch',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Curved slabs for arch and dome constructions',
        image: fireBricksImg,
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
        image: castablesImg,
      },
      {
        name: 'Low Cement Castables',
        badge: 'Dense',
        temperature: 'Up to 1650°C',
        benefit: 'High strength & abrasion resistance',
        application: 'Heavy-duty industrial furnaces',
        image: castablesImg,
      },
      {
        name: 'High Purity Castables',
        badge: 'Dense',
        temperature: 'Up to 1750°C',
        benefit: 'Superior chemical resistance',
        application: 'Corrosive environment applications',
        image: castablesImg,
      },
      {
        name: 'Insulating Castables',
        badge: 'Insulating',
        temperature: '600°C – 800°C',
        benefit: 'Energy-efficient thermal barrier',
        application: 'Backup lining & heat conservation',
        image: castablesImg,
      },
      {
        name: 'High-Flow Castables',
        badge: 'Dense',
        temperature: '1500°C – 1600°C',
        benefit: 'Easy installation, no vibration needed',
        application: 'Intricate mold filling',
        image: castablesImg,
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
        image: insulationImg,
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Lightweight',
        temperature: 'Up to 1400°C',
        benefit: 'Quick installation with pre-engineered units',
        image: insulationImg,
      },
      {
        name: 'Insulating Bricks',
        badge: 'Lightweight',
        temperature: '800°C – 1000°C',
        benefit: 'Structural insulation with low heat storage',
        image: insulationImg,
      },
      {
        name: 'Rockwool Mattresses',
        badge: 'Lightweight',
        temperature: 'Up to 750°C',
        benefit: 'Cost-effective thermal & acoustic insulation',
        image: insulationImg,
      },
      {
        name: 'Calcium Silicate Boards',
        badge: 'Lightweight',
        temperature: 'Up to 1000°C',
        benefit: 'Fire-resistant with excellent machinability',
        image: insulationImg,
      },
      {
        name: 'Aluminium Sheet',
        badge: 'Insulation',
        benefit: 'Reflective cladding for thermal protection',
        application: 'External insulation cladding',
        image: insulationImg,
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
        image: specialtyImg,
      },
      {
        name: 'Fire Cement',
        badge: 'Certified',
        benefit: 'Quick-setting heat-resistant adhesive',
        application: 'Sealing & patching',
        image: specialtyImg,
      },
      {
        name: 'Fire Clay',
        badge: 'Certified',
        temperature: 'Up to 1000°C',
        benefit: 'Versatile bonding & patching material',
        application: 'General refractory applications',
        image: specialtyImg,
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Certified',
        benefit: 'Chemical & corrosion resistance',
        application: 'Chemical plant flooring',
        image: specialtyImg,
      },
      {
        name: 'Boiler Fire Doors',
        badge: 'Quality Tested',
        benefit: 'Secure access with thermal protection',
        application: 'Boiler maintenance access',
        image: specialtyImg,
      },
      {
        name: 'Boiler Nozzles',
        badge: 'Quality Tested',
        benefit: 'Precision-engineered for optimal flow',
        application: 'Combustion systems',
        image: specialtyImg,
      },
      {
        name: 'Anchors & Hardware',
        badge: 'Quality Tested',
        benefit: 'Reliable refractory support systems',
        application: 'Lining installation & anchoring',
        image: specialtyImg,
      },
      {
        name: 'GP 2',
        badge: 'Specialty',
        benefit: 'General purpose refractory compound',
        application: 'Multi-use industrial applications',
        image: specialtyImg,
      },
      {
        name: 'Bed Material',
        badge: 'Specialty',
        benefit: 'Optimized for fluidized bed operations',
        application: 'FBC boiler systems',
        image: specialtyImg,
      },
      {
        name: 'Accosset 50',
        badge: 'Specialty',
        benefit: 'High-performance setting compound',
        application: 'Refractory bonding & setting',
        image: specialtyImg,
      },
      {
        name: 'Sodium Silicate',
        badge: 'Specialty',
        benefit: 'Versatile binding agent for refractories',
        application: 'Refractory bonding & sealing',
        image: specialtyImg,
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={Math.min(index * 50, 300)}>
      <Card className="h-full bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden">
        <div className="relative h-36 sm:h-40 bg-secondary overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 text-[10px] font-mono bg-background/90 backdrop-blur-sm"
          >
            {product.badge}
          </Badge>
        </div>
        
        <CardHeader className="pb-2 pt-3 px-4">
          <h4 className="font-heading font-semibold text-foreground text-sm leading-tight line-clamp-2">
            {product.name}
          </h4>
        </CardHeader>
        <CardContent className="pb-3 px-4 space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {product.temperature && (
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                <Thermometer size={10} className="text-primary flex-shrink-0" />
                <span className="font-mono">{product.temperature}</span>
              </div>
            )}
            {product.density && (
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                <Scale size={10} className="text-primary flex-shrink-0" />
                <span className="font-mono">{product.density}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-start gap-1.5">
            <Zap size={12} className="text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {product.benefit}
            </p>
          </div>
          
          {product.application && (
            <div className="flex items-start gap-1.5">
              <Lightbulb size={12} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-[10px] text-muted-foreground/80 line-clamp-1">
                {product.application}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0 pb-3 px-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-[10px] group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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
    <section className="mb-14 last:mb-0">
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
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
