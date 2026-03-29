import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package, Thermometer, Scale, Zap, Shield, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import highAluminaImg from '@/assets/products/high-alumina-bricks.jpg';
import fireClayImg from '@/assets/products/fire-clay-bricks.jpg';
import insulatingFBImg from '@/assets/products/insulating-fire-bricks.jpg';
import specialShapedImg from '@/assets/products/special-shaped-bricks.jpg';
import castableImg from '@/assets/products/castable-material.jpg';
import ceramicFiberImg from '@/assets/products/ceramic-fiber.jpg';
import rockwoolImg from '@/assets/products/rockwool.jpg';
import calciumSilicateImg from '@/assets/products/calcium-silicate.jpg';
import boilerCompImg from '@/assets/products/boiler-components.jpg';
import specialtyMatImg from '@/assets/products/specialty-materials.jpg';

interface Product {
  name: string;
  badge: string;
  temperature?: string;
  density?: string;
  benefit: string;
  description: string;
  features: string[];
  applications: string[];
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
        badge: 'Premium',
        temperature: 'Up to 1800°C',
        density: '2.4–2.8 g/cm³',
        benefit: 'Superior load bearing & thermal resistance for extreme environments',
        description: 'High-performance refractory bricks designed for extreme thermal environments. Ideal for furnaces, kilns, and heavy industrial heat zones.',
        features: ['Excellent load-bearing capacity at high temperatures', 'Superior thermal shock resistance', 'High refractoriness up to 1800°C', 'Long service life'],
        applications: ['Steel plants', 'Cement kilns', 'Glass furnaces', 'Petrochemical industries'],
        image: highAluminaImg,
      },
      {
        name: 'Fire Clay Bricks',
        badge: 'Standard',
        temperature: 'Up to 1000°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Excellent durability for general refractory applications',
        description: 'Versatile refractory bricks suitable for a wide range of industrial furnace and kiln applications.',
        features: ['Good thermal stability', 'Cost-effective solution', 'Easy to install', 'Wide availability'],
        applications: ['General furnaces', 'Boiler linings', 'Chimney linings', 'Backup linings'],
        image: fireClayImg,
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Lightweight',
        temperature: '600°C – 800°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Lightweight with low thermal conductivity for energy savings',
        description: 'Porous, lightweight bricks that provide excellent thermal insulation while reducing structural load.',
        features: ['Very low thermal conductivity', 'Lightweight construction', 'Energy saving properties', 'Easy to cut and shape'],
        applications: ['Backup insulation', 'Heat treatment furnaces', 'Kilns', 'Ovens'],
        image: insulatingFBImg,
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Custom',
        temperature: '600°C – 800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex installations',
        description: 'Precision-manufactured bricks in custom shapes for specialized furnace and kiln geometries.',
        features: ['Custom geometry manufacturing', 'Tight dimensional tolerances', 'Multiple material grades', 'Complex profile capability'],
        applications: ['Rotary kilns', 'Incinerators', 'Ladles', 'Custom furnace linings'],
        image: specialShapedImg,
      },
      {
        name: 'Slabs – Straight',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Flat refractory slabs for uniform lining surfaces',
        description: 'Flat, precision-cut refractory slabs used for creating smooth, uniform lining surfaces.',
        features: ['Uniform thickness', 'Smooth surface finish', 'High structural integrity', 'Easy installation'],
        applications: ['Furnace floors', 'Hearth linings', 'Partition walls', 'Cover slabs'],
        image: highAluminaImg,
      },
      {
        name: 'Slabs – Arch',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Curved slabs for arch and dome constructions',
        description: 'Pre-formed curved refractory slabs designed for arch, dome, and curved lining constructions.',
        features: ['Precise curvature', 'Self-supporting design', 'High load capacity', 'Thermal shock resistant'],
        applications: ['Furnace arches', 'Dome roofs', 'Tunnel kiln crowns', 'Boiler arches'],
        image: specialShapedImg,
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
        benefit: 'Versatile monolithic lining for complex shapes',
        description: 'High-alumina castable refractories providing seamless linings in complex furnace geometries.',
        features: ['Seamless monolithic lining', 'Excellent hot strength', 'Good abrasion resistance', 'Versatile application'],
        applications: ['Furnace linings', 'Ladle linings', 'Tundish linings', 'Preheater cyclones'],
        image: castableImg,
      },
      {
        name: 'Low Cement Castables',
        badge: 'Dense',
        temperature: 'Up to 1650°C',
        benefit: 'High strength & superior abrasion resistance',
        description: 'Advanced castables with reduced cement content for superior hot strength and corrosion resistance.',
        features: ['Low porosity after firing', 'Superior hot strength', 'Excellent slag resistance', 'Reduced drying time'],
        applications: ['Heavy-duty furnaces', 'Steel ladles', 'Blast furnace runners', 'EAF roofs'],
        image: castableImg,
      },
      {
        name: 'High Purity Castables',
        badge: 'Premium',
        temperature: 'Up to 1750°C',
        benefit: 'Superior chemical resistance for corrosive environments',
        description: 'Ultra-pure castables designed for applications requiring exceptional chemical stability.',
        features: ['High purity raw materials', 'Excellent chemical stability', 'Superior corrosion resistance', 'High-temp performance'],
        applications: ['Petrochemical reactors', 'Glass tanks', 'Aluminium melting', 'Special alloy furnaces'],
        image: castableImg,
      },
      {
        name: 'Insulating Castables',
        badge: 'Insulating',
        temperature: '600°C – 800°C',
        benefit: 'Energy-efficient thermal barrier for backup linings',
        description: 'Lightweight castable materials that provide excellent thermal insulation in monolithic form.',
        features: ['Low thermal conductivity', 'Lightweight', 'Easy application', 'Good insulating properties'],
        applications: ['Backup linings', 'Heat conservation', 'Kiln shells', 'Duct linings'],
        image: castableImg,
      },
      {
        name: 'High-Flow Castables',
        badge: 'Self-Flow',
        temperature: '1500°C – 1600°C',
        benefit: 'Easy installation, no vibration needed',
        description: 'Self-leveling castables that flow into intricate molds without mechanical vibration.',
        features: ['Self-leveling property', 'No vibration required', 'Excellent flowability', 'Uniform density'],
        applications: ['Intricate mold filling', 'Precast shapes', 'Complex geometries', 'Rapid installation'],
        image: castableImg,
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
        description: 'High-performance ceramic fiber blankets providing superior insulation with minimal weight.',
        features: ['Low thermal conductivity', 'Excellent flexibility', 'Chemical resistance', 'Easy to install'],
        applications: ['Furnace linings', 'Expansion joints', 'Pipe wrapping', 'High-temp gaskets'],
        image: ceramicFiberImg,
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Pre-engineered',
        temperature: 'Up to 1400°C',
        benefit: 'Quick installation with pre-engineered modular units',
        description: 'Pre-compressed ceramic fiber modules for rapid furnace lining with consistent quality.',
        features: ['Rapid installation', 'Pre-compressed design', 'Consistent density', 'Reduced labor cost'],
        applications: ['Furnace walls', 'Kiln linings', 'Annealing furnaces', 'Forge furnaces'],
        image: ceramicFiberImg,
      },
      {
        name: 'Insulating Bricks',
        badge: 'Structural',
        temperature: '800°C – 1000°C',
        benefit: 'Structural insulation with low heat storage',
        description: 'Lightweight insulating bricks combining structural strength with thermal insulation.',
        features: ['Low heat storage', 'Good structural strength', 'Easy to machine', 'Consistent quality'],
        applications: ['Kiln backup', 'Furnace walls', 'Chimney linings', 'Oven construction'],
        image: insulatingFBImg,
      },
      {
        name: 'Rockwool Mattresses',
        badge: 'Industrial',
        temperature: 'Up to 750°C',
        benefit: 'Cost-effective thermal & acoustic insulation',
        description: 'Industrial-grade rockwool providing dual thermal and acoustic insulation properties.',
        features: ['Thermal insulation', 'Sound absorption', 'Fire resistant', 'Cost effective'],
        applications: ['Pipe insulation', 'HVAC systems', 'Industrial ovens', 'Building insulation'],
        image: rockwoolImg,
      },
      {
        name: 'Calcium Silicate Boards',
        badge: 'Fire-Rated',
        temperature: 'Up to 1000°C',
        benefit: 'Fire-resistant with excellent machinability',
        description: 'Non-combustible calcium silicate boards for high-temperature insulation applications.',
        features: ['Non-combustible', 'Easy to machine', 'High compressive strength', 'Moisture resistant'],
        applications: ['Fire protection', 'Backup insulation', 'Industrial partitions', 'Kiln furniture'],
        image: calciumSilicateImg,
      },
      {
        name: 'Aluminium Sheet',
        badge: 'Cladding',
        benefit: 'Reflective cladding for external thermal protection',
        description: 'Industrial-grade aluminium sheets used as outer cladding for insulation systems.',
        features: ['Reflective surface', 'Corrosion resistant', 'Lightweight', 'Weather protection'],
        applications: ['External insulation cladding', 'Pipe jacketing', 'Tank insulation', 'Duct cladding'],
        image: calciumSilicateImg,
      },
    ],
  },
  {
    icon: Package,
    title: 'Specialty & Auxiliary Products',
    products: [
      {
        name: 'Refractory Mortars',
        badge: 'Bonding',
        benefit: 'High-bond strength jointing material for brick laying',
        description: 'Specialized mortars formulated for bonding refractory bricks with high-temperature stability.',
        features: ['High bond strength', 'Temperature compatible', 'Good workability', 'Chemical resistant'],
        applications: ['Brick laying', 'Joint filling', 'Repair work', 'Kiln construction'],
        image: specialtyMatImg,
      },
      {
        name: 'Fire Cement',
        badge: 'Quick-Set',
        benefit: 'Quick-setting heat-resistant adhesive',
        description: 'Fast-curing cement for quick repairs and sealing in high-temperature environments.',
        features: ['Rapid setting', 'Heat resistant', 'Strong adhesion', 'Easy application'],
        applications: ['Emergency repairs', 'Sealing', 'Patching', 'Crack filling'],
        image: specialtyMatImg,
      },
      {
        name: 'Fire Clay',
        badge: 'Versatile',
        temperature: 'Up to 1000°C',
        benefit: 'Versatile bonding & patching material',
        description: 'Multi-purpose fire clay for bonding, patching, and general refractory applications.',
        features: ['Multi-purpose use', 'Good plasticity', 'Temperature stable', 'Cost effective'],
        applications: ['General refractory work', 'Patching', 'Bonding', 'Mold making'],
        image: specialtyMatImg,
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Chemical',
        benefit: 'Chemical & corrosion resistance for harsh environments',
        description: 'Specialized tiles providing exceptional resistance to acids and chemical attack.',
        features: ['Acid resistant', 'Low porosity', 'High durability', 'Chemical stability'],
        applications: ['Chemical plant floors', 'Acid storage areas', 'Laboratory floors', 'Effluent channels'],
        image: specialShapedImg,
      },
      {
        name: 'Boiler Fire Doors',
        badge: 'Heavy-Duty',
        benefit: 'Secure access with thermal protection',
        description: 'Engineered fire doors providing safe access while maintaining thermal integrity.',
        features: ['Heavy-duty construction', 'Thermal insulation', 'Secure locking', 'Custom sizes'],
        applications: ['Boiler access', 'Furnace doors', 'Inspection openings', 'Maintenance access'],
        image: boilerCompImg,
      },
      {
        name: 'Boiler Nozzles',
        badge: 'Precision',
        benefit: 'Precision-engineered for optimal combustion flow',
        description: 'Custom-engineered nozzles for efficient fuel and air distribution in combustion systems.',
        features: ['Precision machined', 'Optimal flow design', 'Heat resistant alloy', 'Custom specifications'],
        applications: ['Combustion systems', 'Fuel injection', 'Air distribution', 'Boiler firing'],
        image: boilerCompImg,
      },
      {
        name: 'Anchors & Hardware',
        badge: 'Support',
        benefit: 'Reliable refractory support & anchoring systems',
        description: 'High-grade metallic anchors and hardware for securing refractory linings.',
        features: ['Heat resistant alloys', 'Multiple configurations', 'High pull-out strength', 'Corrosion resistant'],
        applications: ['Lining anchoring', 'Castable support', 'Fiber module fixing', 'Roof hangers'],
        image: boilerCompImg,
      },
      {
        name: 'GP 2',
        badge: 'Specialty',
        benefit: 'General purpose refractory compound',
        description: 'Multi-purpose refractory compound for various industrial bonding and sealing needs.',
        features: ['Versatile usage', 'Good adhesion', 'Temperature stable', 'Easy mixing'],
        applications: ['Multi-use applications', 'Bonding', 'Sealing', 'Surface coating'],
        image: specialtyMatImg,
      },
      {
        name: 'Bed Material',
        badge: 'FBC',
        benefit: 'Optimized for fluidized bed combustion operations',
        description: 'Specially graded bed material for optimal performance in FBC boiler systems.',
        features: ['Optimized particle size', 'Consistent quality', 'Low attrition rate', 'Thermal stability'],
        applications: ['FBC boilers', 'Fluidized bed systems', 'Combustion beds', 'Power plants'],
        image: specialtyMatImg,
      },
      {
        name: 'Accosset 50',
        badge: 'Premium',
        benefit: 'High-performance setting compound',
        description: 'Premium setting compound for critical refractory bonding applications.',
        features: ['High bond strength', 'Controlled setting', 'Temperature stable', 'Premium grade'],
        applications: ['Critical bonding', 'Refractory setting', 'High-temp joints', 'Precision work'],
        image: specialtyMatImg,
      },
      {
        name: 'Sodium Silicate',
        badge: 'Binder',
        benefit: 'Versatile binding agent for refractory systems',
        description: 'Industrial-grade sodium silicate solution used as a binding agent in refractory formulations.',
        features: ['Strong binding power', 'Chemical stability', 'Versatile formulation', 'Cost effective'],
        applications: ['Refractory bonding', 'Sealing', 'Coating', 'Mold binding'],
        image: specialtyMatImg,
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={Math.min(index * 60, 300)}>
      <div className="group h-full bg-card border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.15)]">
        {/* Image */}
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
            width={640}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 text-[10px] font-mono bg-background/95 backdrop-blur-sm border-0 shadow-sm"
          >
            {product.badge}
          </Badge>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-3">
          <h4 className="font-heading font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h4>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
          
          {/* Technical Specs */}
          <div className="flex flex-wrap gap-2">
            {product.temperature && (
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary px-2 py-1 rounded-sm">
                <Thermometer size={12} className="text-primary flex-shrink-0" />
                <span className="font-mono">{product.temperature}</span>
              </div>
            )}
            {product.density && (
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary px-2 py-1 rounded-sm">
                <Scale size={12} className="text-primary flex-shrink-0" />
                <span className="font-mono">{product.density}</span>
              </div>
            )}
          </div>

          {/* Key Benefit */}
          <div className="flex items-start gap-2">
            <Zap size={14} className="text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {product.benefit}
            </p>
          </div>
          
          {/* View Details */}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 mt-1"
            asChild
          >
            <Link to="/contact">
              View Details
              <ChevronRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  );
}

function CategorySection({ category, categoryIndex }: { category: ProductCategory; categoryIndex: number }) {
  const Icon = category.icon;
  
  return (
    <section className="mb-20 last:mb-0">
      <ScrollReveal delay={categoryIndex * 100}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
            <Icon size={22} className="text-primary" />
          </div>
          <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl">
            {category.title}
          </h3>
          <div className="flex-1 h-px bg-border ml-3"></div>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-3xl">
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
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Quality-controlled refractory materials designed for demanding industrial applications. 
                Each product is tested for thermal resistance, mechanical strength, chemical stability, and dimensional accuracy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container-industrial">
          {productCategories.map((category, index) => (
            <CategorySection key={category.title} category={category} categoryIndex={index} />
          ))}
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-8 bg-background border-y border-border">
        <div className="container-industrial">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-primary" />
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
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
              Contact our technical team for detailed product specifications, 
              material recommendations, and custom requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary gap-2 group text-sm">
                Contact Us
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
