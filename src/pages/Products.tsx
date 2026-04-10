import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package, Thermometer, Scale, Zap, Shield, ChevronRight, Filter, X, MessageSquare, Factory, FlaskConical } from 'lucide-react';
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
import archBricksImg from '@/assets/products/arch-bricks.jpg';
import acidProofImg from '@/assets/products/acid-proof-bricks.jpg';
import refractorySlabsImg from '@/assets/products/refractory-slabs.jpg';
import refractoryCementImg from '@/assets/products/refractory-cement.jpg';
import millBoardImg from '@/assets/products/mill-board.jpg';
import refractoryMortarImg from '@/assets/products/refractory-mortar.jpg';
import aluminiumSheetImg from '@/assets/products/aluminium-sheet.jpg';
import looseGlassWoolImg from '@/assets/products/loose-glass-wool.jpg';

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
  specs?: Record<string, string>;
  variants?: string[];
  whyChoose?: string[];
}

interface ProductCategory {
  icon: React.ElementType;
  title: string;
  id: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    icon: Layers,
    id: 'bricks',
    title: 'Refractory Bricks & Shapes',
    products: [
      {
        name: 'High Alumina Fire Brick',
        badge: 'Premium',
        temperature: 'Up to 1800°C',
        density: '2.4–2.8 g/cm³',
        benefit: 'Superior load bearing & thermal resistance for extreme environments',
        description: 'High-performance refractory bricks designed to withstand extreme temperatures and mechanical stress in industrial furnaces, kilns, and boilers. Manufactured with high alumina content for durability, thermal stability, and long service life.',
        features: ['High temperature resistance up to 1800°C', 'Excellent mechanical strength (CCS: 40–80 MPa)', 'Superior thermal shock resistance', 'Long service life under extreme conditions'],
        applications: ['Steel furnaces', 'Cement kilns', 'Glass furnaces', 'Petrochemical industries'],
        image: highAluminaImg,
        specs: { 'Max Temperature': '1800°C', 'Bulk Density': '2.4–2.8 g/cm³', 'Al₂O₃ Content': '50%–90%', 'Cold Crushing Strength': '40–80 MPa' },
        variants: ['High Alumina Fire Brick', 'Brown High Alumina Fire Brick', 'Rectangular High Alumina Fire Brick'],
        whyChoose: ['Ensures longer service life', 'Reduces maintenance cost', 'Improves thermal efficiency', 'Reliable under extreme industrial conditions'],
      },
      {
        name: 'Fire Clay Bricks',
        badge: 'Standard',
        temperature: 'Up to 1000°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Cost-effective durability for general refractory applications',
        description: 'Versatile refractory bricks suitable for a wide range of industrial furnace, boiler, and kiln applications. Made from high-quality fire clay for reliable performance in moderate temperature environments.',
        features: ['Good thermal stability up to 1000°C', 'Cost-effective refractory solution', 'Easy to install and maintain', 'Wide availability in standard sizes'],
        applications: ['General furnaces', 'Boiler linings', 'Chimney linings', 'Backup linings'],
        image: fireClayImg,
        specs: { 'Max Temperature': '1000–1200°C', 'Bulk Density': '2.0–2.2 g/cm³', 'Al₂O₃ Content': '30%–40%', 'Material': 'Fire Clay' },
        whyChoose: ['Economical choice for standard applications', 'Proven reliability in boiler linings', 'Easy availability and replacement'],
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Lightweight',
        temperature: '600°C – 800°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Lightweight with low thermal conductivity for energy savings',
        description: 'Porous, lightweight bricks that provide excellent thermal insulation while reducing structural load. Ideal for backup insulation and energy-saving applications in heat treatment furnaces.',
        features: ['Very low thermal conductivity', 'Lightweight construction (0.8–1.2 g/cm³)', 'Significant energy saving properties', 'Easy to cut and shape on site'],
        applications: ['Backup insulation', 'Heat treatment furnaces', 'Kilns', 'Ovens'],
        image: insulatingFBImg,
        specs: { 'Temperature Range': '600°C–800°C', 'Bulk Density': '0.8–1.2 g/cm³', 'Type': 'Porous Insulating', 'Key Property': 'Low thermal conductivity' },
        whyChoose: ['Reduces energy consumption significantly', 'Lowers structural dead load', 'Easy on-site fabrication'],
      },
      {
        name: 'Arch Bricks & Hanger Bricks',
        badge: 'Shaped',
        temperature: '600°C – 800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Precision-formed for arch, dome, and suspended lining constructions',
        description: 'Pre-formed curved and shaped bricks designed for furnace arches, dome roofs, and suspended lining systems. Includes fire arch blocks and hanger bricks for critical structural applications.',
        features: ['Precise curvature for arch construction', 'Self-supporting arch design', 'High load capacity under thermal stress', 'Available as arch blocks & hanger bricks'],
        applications: ['Furnace arches', 'Dome roofs', 'Tunnel kiln crowns', 'Boiler arches'],
        image: archBricksImg,
        specs: { 'Temperature Range': '600°C–800°C', 'Bulk Density': '2.2–2.6 g/cm³', 'Types': 'Fire Arch Block, Hanger Brick', 'Structure': 'Curved / Shaped' },
        variants: ['Fire Arch Block', 'Hanger Bricks'],
        whyChoose: ['Eliminates need for custom formwork', 'Precise geometry for structural integrity', 'Reduces installation time'],
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Custom',
        temperature: '600°C – 800°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex furnace installations',
        description: 'Precision-manufactured bricks in custom shapes and profiles for specialized furnace and kiln geometries. Multiple material grades available for various temperature requirements.',
        features: ['Custom geometry manufacturing', 'Tight dimensional tolerances', 'Multiple material grades available', 'Complex profile capability'],
        applications: ['Rotary kilns', 'Incinerators', 'Ladles', 'Custom furnace linings'],
        image: specialShapedImg,
        specs: { 'Temperature Range': '600°C–800°C', 'Bulk Density': '2.2–2.6 g/cm³', 'Type': 'Custom Manufactured', 'Tolerance': 'Precision machined' },
      },
      {
        name: 'Refractory Slabs – Straight & Arch',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Flat and curved slabs for uniform lining & arch construction',
        description: 'Precision-cut refractory slabs available in straight and arch profiles. Used for creating smooth, uniform lining surfaces and curved dome/arch constructions in furnaces and kilns.',
        features: ['Uniform thickness and smooth finish', 'Available in straight & arch profiles', 'High structural integrity up to 1400°C', 'Alumina fire brick slab grade available'],
        applications: ['Furnace floors', 'Hearth linings', 'Partition walls', 'Furnace arches & domes'],
        image: refractorySlabsImg,
        specs: { 'Max Temperature': '1400°C', 'Types': 'Straight Slabs, Arch Slabs', 'Material': 'Alumina Fire Brick', 'Finish': 'Smooth, precision-cut' },
        variants: ['Alumina Fire Bricks Slab', 'Straight Slabs', 'Arch Slabs'],
      },
      {
        name: 'Acid Proof Bricks',
        badge: 'Chemical',
        benefit: 'Superior chemical & acid resistance for harsh environments',
        description: 'Specialized bricks with exceptional resistance to acids, alkalis, and chemical attack. Designed for chemical plants, acid storage facilities, and corrosive industrial environments.',
        features: ['Excellent acid & chemical resistance', 'Very low porosity', 'High mechanical durability', 'Long-term chemical stability'],
        applications: ['Chemical plant floors', 'Acid storage areas', 'Effluent channels', 'Laboratory floors'],
        image: acidProofImg,
        specs: { 'Chemical Resistance': 'High', 'Porosity': 'Very Low', 'Type': 'Acid Proof', 'Application': 'Chemical environments' },
        whyChoose: ['Protects against corrosive chemical attack', 'Extremely durable in harsh environments', 'Low maintenance cost'],
      },
    ],
  },
  {
    icon: Droplets,
    id: 'castables',
    title: 'Castables & Monolithic Refractories',
    products: [
      {
        name: 'Dense Castables',
        badge: 'Dense',
        temperature: 'Up to 1700°C',
        density: '2.2–3.0 g/cm³',
        benefit: 'Versatile monolithic lining for complex furnace geometries',
        description: 'High-alumina dense castable refractories providing seamless linings in complex furnace geometries. Includes TRL Cast FH 70-G (Super Dense) and TRL Cast AH 90-G (High Alumina Dense) grades.',
        features: ['Seamless monolithic lining capability', 'Excellent hot strength & abrasion resistance', 'Multiple grades: TRL FH 70-G, TRL AH 90-G', 'Superior slag resistance'],
        applications: ['Furnace linings', 'Ladle linings', 'Tundish linings', 'Preheater cyclones'],
        image: castableImg,
        specs: { 'Max Temperature': '1500–1700°C', 'Bulk Density': '2.2–3.0 g/cm³', 'Grades': 'TRL Cast FH 70-G, TRL Cast AH 90-G', 'Type': 'Super Dense / High Alumina Dense' },
        variants: ['TRL Cast FH 70-G (Super Dense Castable)', 'TRL Cast AH 90-G (High Alumina Dense Castable)'],
        whyChoose: ['Seamless lining eliminates weak joints', 'High abrasion resistance extends service life', 'Multiple grades for specific applications'],
      },
      {
        name: 'Low Cement Castables',
        badge: 'Advanced',
        temperature: 'Up to 1650°C',
        benefit: 'Higher strength & superior abrasion resistance',
        description: 'Advanced castables with reduced cement content for superior hot strength, corrosion resistance, and lower porosity after firing. Grade: TRL Cast LC-70.',
        features: ['Low porosity after firing', 'Superior hot strength at 1650°C', 'Excellent slag & corrosion resistance', 'Reduced drying time'],
        applications: ['Heavy-duty furnaces', 'Steel ladles', 'Blast furnace runners', 'EAF roofs'],
        image: castableImg,
        specs: { 'Max Temperature': '1600–1650°C', 'Grade': 'TRL Cast LC-70', 'Type': 'Low Cement', 'Key Property': 'High abrasion resistance' },
        variants: ['TRL Cast LC-70'],
        whyChoose: ['Better performance than conventional castables', 'Lower porosity means higher density lining', 'Excellent resistance to slag attack'],
      },
      {
        name: 'High Purity Castables',
        badge: 'Premium',
        temperature: 'Up to 1750°C',
        benefit: 'Superior chemical resistance for corrosive environments',
        description: 'Ultra-pure castables designed for applications requiring exceptional chemical stability and high temperature performance in corrosive industrial atmospheres.',
        features: ['High purity raw materials', 'Exceptional chemical stability', 'Superior corrosion resistance', 'Outstanding high-temp performance'],
        applications: ['Petrochemical reactors', 'Glass tanks', 'Aluminium melting', 'Special alloy furnaces'],
        image: castableImg,
        specs: { 'Max Temperature': '1750°C', 'Type': 'High Purity', 'Key Property': 'Chemical stability', 'Application': 'Corrosive environments' },
      },
      {
        name: 'Insulating Castables',
        badge: 'Insulating',
        temperature: '600°C – 800°C',
        benefit: 'Energy-efficient thermal barrier for backup linings',
        description: 'Lightweight castable materials providing excellent thermal insulation in monolithic form. Grade: TRL Incast 11-G. Ideal for backup linings and heat conservation.',
        features: ['Low thermal conductivity', 'Lightweight for reduced structural load', 'Easy pump or pour application', 'Good insulating properties'],
        applications: ['Backup linings', 'Heat conservation', 'Kiln shells', 'Duct linings'],
        image: castableImg,
        specs: { 'Temperature Range': '600°C–800°C', 'Grade': 'TRL Incast 11-G', 'Type': 'Insulating', 'Key Property': 'Low thermal conductivity' },
        variants: ['TRL Incast 11-G'],
      },
      {
        name: 'High-Flow Castables',
        badge: 'Self-Flow',
        temperature: '1500°C – 1600°C',
        benefit: 'Self-leveling – no vibration needed for installation',
        description: 'Self-leveling castables that flow into intricate molds and complex geometries without mechanical vibration. Ensures uniform density and rapid installation.',
        features: ['Self-leveling property', 'No vibration required', 'Excellent flowability', 'Uniform density throughout'],
        applications: ['Intricate mold filling', 'Precast shapes', 'Complex geometries', 'Rapid installation projects'],
        image: castableImg,
        specs: { 'Temperature Range': '1500°C–1600°C', 'Type': 'High Flow / Self-Leveling', 'Key Property': 'No vibration required', 'Installation': 'Pour & flow' },
      },
    ],
  },
  {
    icon: Flame,
    id: 'insulation',
    title: 'Insulation Materials',
    products: [
      {
        name: 'Ceramic Fiber Blanket',
        badge: 'Lightweight',
        temperature: 'Up to 1400°C',
        density: '64–128 kg/m³',
        benefit: 'Excellent thermal insulation with minimal weight',
        description: 'High-performance ceramic fiber blankets providing superior insulation at temperatures up to 1400°C. Lightweight, flexible, and chemically resistant for diverse industrial applications.',
        features: ['Low thermal conductivity', 'Excellent flexibility & drapeability', 'Chemical resistance', 'Easy to cut and install'],
        applications: ['Furnace linings', 'Expansion joints', 'Pipe wrapping', 'High-temp gaskets'],
        image: ceramicFiberImg,
        specs: { 'Max Temperature': '1260–1400°C', 'Bulk Density': '64–128 kg/m³', 'Type': 'Ceramic Fiber', 'Key Property': 'Lightweight insulation' },
        whyChoose: ['Dramatically reduces heat loss', 'Quick installation reduces downtime', 'Flexible – conforms to any shape'],
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Pre-engineered',
        temperature: 'Up to 1400°C',
        benefit: 'Quick installation with pre-engineered modular units',
        description: 'Pre-compressed ceramic fiber modules for rapid furnace lining with consistent quality. Reduces installation time and labor costs significantly.',
        features: ['Rapid modular installation', 'Pre-compressed for consistent density', 'Reduced labor cost', 'Excellent thermal performance'],
        applications: ['Furnace walls', 'Kiln linings', 'Annealing furnaces', 'Forge furnaces'],
        image: ceramicFiberImg,
        specs: { 'Max Temperature': '1400°C', 'Type': 'Pre-compressed Module', 'Installation': 'Modular / Quick-fit', 'Key Property': 'Consistent density' },
      },
      {
        name: 'Rockwool Mattress',
        badge: 'Industrial',
        temperature: 'Up to 750°C',
        density: '80–150 kg/m³',
        benefit: 'Cost-effective thermal & acoustic insulation',
        description: 'Industrial-grade rockwool providing dual thermal and acoustic insulation properties. Available in LRB Rockwool Mattress variant for specialized applications.',
        features: ['Thermal insulation up to 750°C', 'Sound absorption capability', 'Fire resistant', 'Cost effective solution'],
        applications: ['Pipe insulation', 'HVAC systems', 'Industrial ovens', 'Building insulation'],
        image: rockwoolImg,
        specs: { 'Max Temperature': '750°C', 'Bulk Density': '80–150 kg/m³', 'Type': 'Rockwool', 'Features': 'Thermal + Acoustic insulation' },
        variants: ['LRB Rockwool Mattress'],
      },
      {
        name: 'Insulating Bricks (Structural)',
        badge: 'Structural',
        temperature: '800°C – 1000°C',
        benefit: 'Structural insulation with low heat storage',
        description: 'Lightweight insulating bricks combining structural strength with thermal insulation. Ideal for kiln backup, furnace walls, and oven construction.',
        features: ['Low heat storage capacity', 'Good structural strength', 'Easy to machine on site', 'Consistent quality'],
        applications: ['Kiln backup', 'Furnace walls', 'Chimney linings', 'Oven construction'],
        image: insulatingFBImg,
        specs: { 'Temperature Range': '800°C–1000°C', 'Type': 'Structural Insulating', 'Key Property': 'Low heat storage', 'Structure': 'Load-bearing insulation' },
      },
      {
        name: 'Calcium Silicate Boards',
        badge: 'Fire-Rated',
        temperature: 'Up to 1000°C',
        benefit: 'Fire-resistant with excellent machinability',
        description: 'Non-combustible calcium silicate boards for high-temperature insulation. Easy to machine, moisture resistant, and used for fire protection and industrial partitions.',
        features: ['Non-combustible material', 'Easy to machine & fabricate', 'High compressive strength', 'Moisture resistant'],
        applications: ['Fire protection', 'Backup insulation', 'Industrial partitions', 'Kiln furniture'],
        image: calciumSilicateImg,
        specs: { 'Max Temperature': '1000°C', 'Type': 'Calcium Silicate', 'Key Property': 'Non-combustible', 'Machinability': 'Excellent' },
      },
      {
        name: 'Asbestos-Free Insulation Board',
        badge: 'Mill Board',
        benefit: 'Safe, asbestos-free insulation for gaskets & linings',
        description: 'High-quality asbestos-free mill board for industrial insulation, gaskets, and thermal barriers. Compliant with modern safety standards.',
        features: ['100% asbestos-free', 'Good thermal insulation', 'Easy to cut and shape', 'Compliant with safety standards'],
        applications: ['Gaskets & seals', 'Thermal barriers', 'Furnace door linings', 'Insulation packing'],
        image: millBoardImg,
        specs: { 'Type': 'Asbestos-Free Mill Board', 'Safety': '100% Asbestos Free', 'Machinability': 'Easy to cut', 'Application': 'Gaskets, barriers, linings' },
      },
      {
        name: 'Aluminium Sheet / Anodised Roll',
        badge: 'Cladding',
        benefit: 'Reflective cladding for external thermal protection',
        description: 'Industrial-grade aluminium sheets and anodised rolls used as outer cladding for insulation systems. Provides weather protection and reflective thermal barrier.',
        features: ['Reflective surface for heat rejection', 'Corrosion resistant', 'Lightweight material', 'Weather protection'],
        applications: ['External insulation cladding', 'Pipe jacketing', 'Tank insulation', 'Duct cladding'],
        image: aluminiumSheetImg,
        specs: { 'Type': 'Aluminium Cladding', 'Variants': 'Sheet, Anodised Roll', 'Key Property': 'Reflective & corrosion resistant', 'Application': 'External cladding' },
        variants: ['Aluminium Sheet', 'Anodised Aluminium Roll'],
      },
      {
        name: 'Loose Glass Wool',
        badge: 'Insulation',
        benefit: 'Lightweight, flexible insulation for irregular spaces and cavities',
        description: 'Loose Glass Wool is a lightweight, flexible insulation material made from fine glass fibers. It provides excellent thermal and acoustic insulation, ideal for filling irregular spaces and cavities.',
        features: ['High thermal efficiency', 'Fire resistant', 'Sound absorption', 'Easy to install', 'Cost-effective'],
        applications: ['Thermal insulation in walls', 'Roof insulation', 'Duct insulation', 'Industrial equipment'],
        image: looseGlassWoolImg,
        specs: { 'Type': 'Loose Glass Wool', 'Key Property': 'Thermal & acoustic insulation', 'Fire Rating': 'Fire Resistant', 'Installation': 'Fill & blow-in' },
        whyChoose: ['Fills irregular spaces conventional materials cannot', 'Excellent thermal and acoustic performance', 'Cost-effective insulation solution', 'Easy and quick installation'],
      },
    ],
  },
  {
    icon: Package,
    id: 'specialty',
    title: 'Specialty & Auxiliary Products',
    products: [
      {
        name: 'Refractory Cement',
        badge: 'Bonding',
        temperature: 'Up to 1400°C',
        benefit: 'Fast-setting, high-strength refractory bonding',
        description: 'Industrial refractory cements for high-temperature bonding and sealing. Available in TRL SET N, High Alumina, and Fire Cement grades for various temperature requirements.',
        features: ['Fast setting formulation', 'High bonding strength', 'Temperature resistant up to 1400°C', 'Multiple grades available'],
        applications: ['Brick laying & jointing', 'Repair & patching', 'Sealing applications', 'Kiln construction'],
        image: refractoryCementImg,
        specs: { 'Max Temperature': '1400°C', 'Grades': 'TRL SET N, High Alumina, Fire Cement', 'Type': 'Refractory Cement', 'Setting': 'Fast setting' },
        variants: ['TRL SET N Refractory Cement', 'High Alumina Refractory Cement', 'Fire Cement'],
        whyChoose: ['Multiple grades for specific temperature needs', 'Fast setting reduces downtime', 'Strong bonding ensures lining integrity'],
      },
      {
        name: 'Refractory Mortars',
        badge: 'Jointing',
        benefit: 'High-bond strength jointing material for brick laying',
        description: 'Specialized mortars formulated for bonding refractory bricks with high-temperature stability. Ensures strong, durable joints in furnace and kiln constructions.',
        features: ['High bond strength', 'Temperature compatible with bricks', 'Good workability', 'Chemical resistant'],
        applications: ['Brick laying', 'Joint filling', 'Repair work', 'Kiln construction'],
        image: refractoryMortarImg,
        specs: { 'Type': 'Refractory Mortar', 'Key Property': 'High bond strength', 'Application': 'Brick jointing', 'Workability': 'Excellent' },
      },
      {
        name: 'Fire Clay',
        badge: 'Versatile',
        temperature: 'Up to 1000°C',
        benefit: 'Multi-purpose bonding & patching material',
        description: 'Versatile fire clay for bonding, patching, and general refractory applications. Temperature stable up to 1000°C with good plasticity for easy working.',
        features: ['Multi-purpose refractory use', 'Good plasticity & workability', 'Temperature stable to 1000°C', 'Cost effective material'],
        applications: ['General refractory work', 'Patching & repairs', 'Bonding applications', 'Mold making'],
        image: fireClayImg,
        specs: { 'Max Temperature': '1000°C', 'Type': 'Fire Clay', 'Key Property': 'Good plasticity', 'Application': 'Multi-purpose' },
      },
      {
        name: 'GP2 Non-Shrink Grout (Conbextra)',
        badge: 'Grout',
        benefit: 'High-strength non-shrink grout for precision grouting',
        description: 'Fosroc Conbextra GP2 non-shrink grout for precision base plate grouting, machinery foundations, and structural applications. Ensures crack-free, high-strength bonding.',
        features: ['Non-shrink formulation', 'High compressive strength', 'Crack resistant', 'Precision grouting capability'],
        applications: ['Base plate grouting', 'Machinery foundations', 'Structural grouting', 'Anchor bolt grouting'],
        image: specialtyMatImg,
        specs: { 'Type': 'Non-Shrink Grout', 'Brand': 'Fosroc Conbextra GP2', 'Key Property': 'Non-shrink, crack resistant', 'Application': 'Precision grouting' },
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Chemical',
        benefit: 'Chemical & corrosion resistance for harsh environments',
        description: 'Specialized tiles providing exceptional resistance to acids, alkalis, and chemical attack. Low porosity ensures long-term durability in corrosive environments.',
        features: ['Acid & alkali resistant', 'Very low porosity', 'High durability', 'Chemical stability'],
        applications: ['Chemical plant floors', 'Acid storage areas', 'Laboratory floors', 'Effluent channels'],
        image: acidProofImg,
        specs: { 'Type': 'Acid Proof Tile', 'Chemical Resistance': 'High', 'Porosity': 'Very Low', 'Application': 'Chemical environments' },
      },
      {
        name: 'Cast Iron Boiler Fire Door',
        badge: 'Heavy-Duty',
        benefit: 'Secure access with thermal protection for boilers',
        description: 'Engineered cast iron fire doors providing safe access while maintaining thermal integrity of boiler systems. Heavy-duty construction for industrial safety.',
        features: ['Heavy-duty cast iron construction', 'Thermal insulation', 'Secure locking mechanism', 'Custom sizes available'],
        applications: ['Boiler access', 'Furnace doors', 'Inspection openings', 'Maintenance access'],
        image: boilerCompImg,
        specs: { 'Material': 'Cast Iron', 'Type': 'Boiler Fire Door', 'Key Property': 'Heat resistant, secure', 'Application': 'Boiler access' },
      },
      {
        name: 'Anchors & Hardware',
        badge: 'Support',
        benefit: 'Reliable refractory support & anchoring systems',
        description: 'High-grade metallic anchors and hardware for securing refractory linings. Multiple configurations in heat-resistant alloys for long-term performance.',
        features: ['Heat resistant alloys', 'Multiple anchor configurations', 'High pull-out strength', 'Corrosion resistant'],
        applications: ['Lining anchoring', 'Castable support', 'Fiber module fixing', 'Roof hangers'],
        image: boilerCompImg,
        specs: { 'Material': 'Heat Resistant Alloy', 'Type': 'Anchoring Hardware', 'Configurations': 'V, Y, Stud types', 'Application': 'Lining support' },
      },
      {
        name: 'Sodium Silicate',
        badge: 'Binder',
        benefit: 'Versatile binding agent for refractory systems',
        description: 'Industrial-grade sodium silicate solution used as a binding agent in refractory formulations, coatings, and sealing applications.',
        features: ['Strong binding power', 'Chemical stability', 'Versatile formulation', 'Cost effective'],
        applications: ['Refractory bonding', 'Sealing applications', 'Surface coating', 'Mold binding'],
        image: specialtyMatImg,
        specs: { 'Type': 'Sodium Silicate Solution', 'Key Property': 'Strong binding', 'Application': 'Binder / Sealer', 'Form': 'Liquid' },
      },
      {
        name: 'Bed Material',
        badge: 'FBC',
        benefit: 'Optimized for fluidized bed combustion operations',
        description: 'Specially graded bed material for optimal performance in FBC boiler systems. Consistent particle size and low attrition rate for reliable combustion.',
        features: ['Optimized particle size distribution', 'Consistent quality', 'Low attrition rate', 'Thermal stability'],
        applications: ['FBC boilers', 'Fluidized bed systems', 'Combustion beds', 'Power plants'],
        image: specialtyMatImg,
        specs: { 'Type': 'FBC Bed Material', 'Key Property': 'Optimized particle size', 'Application': 'Fluidized bed combustion', 'Quality': 'Consistent grading' },
      },
      {
        name: 'Accosset 50',
        badge: 'Premium',
        benefit: 'High-performance setting compound for critical joints',
        description: 'Premium setting compound for critical refractory bonding applications requiring controlled setting and high bond strength at elevated temperatures.',
        features: ['High bond strength', 'Controlled setting time', 'Temperature stable', 'Premium grade material'],
        applications: ['Critical bonding', 'Refractory setting', 'High-temp joints', 'Precision work'],
        image: specialtyMatImg,
        specs: { 'Type': 'Setting Compound', 'Grade': 'Accosset 50', 'Key Property': 'Controlled setting', 'Application': 'Critical bonding' },
      },
    ],
  },
];

// Filter options
const temperatureRanges = [
  { label: 'All', value: 'all' },
  { label: 'Up to 800°C', value: '800' },
  { label: '800–1200°C', value: '1200' },
  { label: '1200–1600°C', value: '1600' },
  { label: '1600°C+', value: '1600+' },
];

const industries = [
  { label: 'All Industries', value: 'all' },
  { label: 'Steel Plants', value: 'steel' },
  { label: 'Cement Plants', value: 'cement' },
  { label: 'Boilers', value: 'boiler' },
  { label: 'Chemical Plants', value: 'chemical' },
  { label: 'Power Plants', value: 'power' },
  { label: 'Glass Industries', value: 'glass' },
];

function getMaxTemp(product: Product): number {
  if (!product.temperature) return 0;
  const match = product.temperature.match(/(\d{3,4})/g);
  if (!match) return 0;
  return Math.max(...match.map(Number));
}

function matchesIndustry(product: Product, industry: string): boolean {
  if (industry === 'all') return true;
  const apps = product.applications.join(' ').toLowerCase();
  const desc = product.description.toLowerCase();
  const combined = apps + ' ' + desc;
  const map: Record<string, string[]> = {
    steel: ['steel'],
    cement: ['cement', 'kiln'],
    boiler: ['boiler', 'fbc', 'combustion'],
    chemical: ['chemical', 'acid', 'corros'],
    power: ['power', 'fbc', 'combustion', 'boiler'],
    glass: ['glass'],
  };
  return (map[industry] || []).some(k => combined.includes(k));
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={Math.min(index * 60, 300)}>
      <div className="group h-full bg-card border border-border rounded-sm overflow-hidden hover:border-[hsl(0_0%_75%)]/80 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(0_72%_45%/0.15),0_4px_20px_-4px_hsl(0_0%_55%/0.12)] relative"
        style={{ 
          background: 'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 50%, hsl(0 0% 96%) 100%)',
          boxShadow: '0 2px 16px -2px hsl(0 0% 55% / 0.12), 0 4px 24px -4px hsl(0 0% 45% / 0.08)'
        }}
      >
        {/* Metallic silver top highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(0_0%_75%)] to-transparent opacity-60 z-10" />
        
        {/* Metallic shine sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-5" />
        
        {/* Subtle metallic border glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.5) 0%, hsl(0 0% 85% / 0.2) 50%, hsl(0 0% 100% / 0.5) 100%)',
            borderRadius: 'inherit'
          }}
        />
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
          {product.temperature && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-primary-foreground bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-sm font-mono">
              <Flame size={12} />
              {product.temperature}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-3">
          <h4 className="font-heading font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h4>
          
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
          
          {/* Tech specs badges */}
          <div className="flex flex-wrap gap-1.5">
            {product.density && (
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-sm">
                <Scale size={10} className="text-primary flex-shrink-0" />
                <span className="font-mono">{product.density}</span>
              </div>
            )}
            {product.variants && (
              <div className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-sm font-mono">
                {product.variants.length} variant{product.variants.length > 1 ? 's' : ''}
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

          {/* Expandable details */}
          {expanded && (
            <div className="space-y-3 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Features */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Key Features</p>
                <ul className="space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs table */}
              {product.specs && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Technical Specifications</p>
                  <div className="bg-secondary/50 rounded-sm overflow-hidden">
                    {Object.entries(product.specs).map(([key, val], i) => (
                      <div key={i} className={`flex justify-between text-[11px] px-2.5 py-1.5 ${i % 2 === 0 ? 'bg-secondary/30' : ''}`}>
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-mono font-medium text-foreground">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Applications</p>
                <div className="flex flex-wrap gap-1">
                  {product.applications.map((a, i) => (
                    <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-sm font-mono">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Available Variants</p>
                  <ul className="space-y-0.5">
                    {product.variants.map((v, i) => (
                      <li key={i} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <ChevronRight size={10} className="text-primary" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Choose */}
              {product.whyChoose && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Why Choose This Product</p>
                  <ul className="space-y-1">
                    {product.whyChoose.map((w, i) => (
                      <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                        <Shield size={10} className="text-primary mt-0.5 shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex gap-2 pt-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs font-medium"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'View Details'}
              <ChevronRight size={14} className={`ml-auto transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </Button>
            <Button 
              size="sm" 
              className="text-xs font-medium"
              asChild
            >
              <Link to="/contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function CategorySection({ category, categoryIndex }: { category: ProductCategory; categoryIndex: number }) {
  const Icon = category.icon;
  
  return (
    <section id={category.id} className="mb-20 last:mb-0 scroll-mt-32">
      <ScrollReveal delay={categoryIndex * 100}>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
            <Icon size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl">
              {category.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{category.products.length} products</p>
          </div>
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
  const [tempFilter, setTempFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilter = tempFilter !== 'all' || industryFilter !== 'all';

  const filteredCategories = useMemo(() => {
    return productCategories.map(cat => ({
      ...cat,
      products: cat.products.filter(p => {
        // Temperature filter
        if (tempFilter !== 'all') {
          const maxT = getMaxTemp(p);
          if (tempFilter === '800' && maxT > 800) return false;
          if (tempFilter === '1200' && (maxT <= 800 || maxT > 1200)) return false;
          if (tempFilter === '1600' && (maxT <= 1200 || maxT > 1600)) return false;
          if (tempFilter === '1600+' && maxT <= 1600) return false;
          if (maxT === 0 && tempFilter !== '800') return false;
        }
        // Industry filter
        if (!matchesIndustry(p, industryFilter)) return false;
        return true;
      }),
    })).filter(cat => cat.products.length > 0);
  }, [tempFilter, industryFilter]);

  const totalProducts = filteredCategories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-primary"></span>
                Product Catalogue
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Refractory Products We Manufacture & Supply
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Quality-controlled refractory materials engineered for demanding industrial applications. 
                Every product is tested for thermal resistance, mechanical strength, chemical stability, and dimensional accuracy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="container-industrial py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant={showFilters ? 'default' : 'outline'}
                size="sm"
                className="text-xs gap-1.5"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={14} />
                Filters
                {hasActiveFilter && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                )}
              </Button>
              <span className="text-xs text-muted-foreground font-mono">
                {totalProducts} products
              </span>
              {hasActiveFilter && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground h-7 px-2"
                  onClick={() => { setTempFilter('all'); setIndustryFilter('all'); }}
                >
                  <X size={12} />
                  Clear
                </Button>
              )}
            </div>
            {/* Quick category nav */}
            <div className="hidden md:flex items-center gap-2">
              {productCategories.map(c => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                >
                  {c.title.split(' ')[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="pt-3 pb-1 border-t border-border mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Flame size={12} className="text-primary" />
                    Temperature Range
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {temperatureRanges.map(r => (
                      <button
                        key={r.value}
                        onClick={() => setTempFilter(r.value)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-sm border transition-all ${
                          tempFilter === r.value
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-secondary text-muted-foreground border-border hover:border-primary/30'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Factory size={12} className="text-primary" />
                    Industry
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industries.map(i => (
                      <button
                        key={i.value}
                        onClick={() => setIndustryFilter(i.value)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-sm border transition-all ${
                          industryFilter === i.value
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-secondary text-muted-foreground border-border hover:border-primary/30'
                        }`}
                      >
                        {i.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container-industrial">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <CategorySection key={category.title} category={category} categoryIndex={index} />
            ))
          ) : (
            <div className="text-center py-20">
              <FlaskConical size={40} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No products match your current filters.</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 text-xs"
                onClick={() => { setTempFilter('all'); setIndustryFilter('all'); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
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
