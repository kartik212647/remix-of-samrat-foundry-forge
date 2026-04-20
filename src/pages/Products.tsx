import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Droplets, Flame, Package, Thermometer, Scale, Zap, Shield, ChevronRight, Filter, X, MessageSquare, Factory, FlaskConical, Anchor, Wrench, Globe } from 'lucide-react';
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

type ApplicationTag = 'furnace-lining' | 'insulation' | 'jointing' | 'repairs';

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
  group?: string;
  appTags?: ApplicationTag[];
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
        temperature: 'Up to 1700°C (depending on grade and application)',
        density: '2.4–2.8 g/cm³',
        benefit: 'Superior load bearing & thermal resistance for extreme industrial environments',
        description: 'High Alumina Fire Bricks manufactured with controlled alumina content (50%–90%) for use in high-temperature zones of furnaces, kilns, and reactors. Designed for applications requiring high refractoriness, mechanical strength, and resistance to slag attack.',
        features: ['Controlled Al₂O₃ content (50%–90%)', 'High cold crushing strength (40–80 MPa)', 'Excellent slag and thermal shock resistance', 'Long service life in heavy industry'],
        applications: ['Steel ladles', 'Cement kilns', 'Glass furnaces', 'Petrochemical reactors'],
        image: highAluminaImg,
        specs: { 'Max Temperature': 'Up to 1700°C', 'Bulk Density': '2.4–2.8 g/cm³', 'Al₂O₃ Content': '50%–90%', 'Cold Crushing Strength': '40–80 MPa' },
        whyChoose: ['Longer lining life reduces shutdowns', 'Lower maintenance cost', 'Improves thermal efficiency'],
        appTags: ['furnace-lining', 'repairs'],
      },
      {
        name: 'Insulating Fire Bricks',
        badge: 'Lightweight',
        temperature: '600°C – 1000°C',
        density: '0.8–1.2 g/cm³',
        benefit: 'Backup insulation for energy-efficient kiln & furnace linings',
        description: 'Used as backup insulation behind dense refractory linings to reduce heat loss and improve energy efficiency. Porous, lightweight bricks providing excellent thermal insulation while reducing structural load on kilns and heat treatment furnaces.',
        features: ['Very low thermal conductivity', 'Lightweight construction (0.8–1.2 g/cm³)', 'Significant energy savings', 'Easy to cut and shape on site'],
        applications: ['Backup insulation in furnaces', 'Heat treatment kilns', 'Annealing ovens', 'Tunnel kiln linings'],
        image: insulatingFBImg,
        specs: { 'Temperature Range': '600°C–1000°C', 'Bulk Density': '0.8–1.2 g/cm³', 'Type': 'Porous Insulating', 'Key Property': 'Low thermal conductivity' },
        whyChoose: ['Reduces energy consumption significantly', 'Lowers structural dead load', 'Easy on-site fabrication'],
        appTags: ['insulation', 'furnace-lining'],
      },
      {
        name: 'Hanger Brick',
        badge: 'Shaped',
        temperature: '1200°C – 1500°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Precision-formed bricks for suspended roofs & arch constructions',
        description: 'Specifically designed for suspended roof systems and arch constructions requiring dimensional precision and load-bearing strength. Pre-formed shaped bricks engineered for furnace arches and dome constructions in steel and cement industries.',
        features: ['Precise curvature for arch construction', 'Self-supporting suspended design', 'High mechanical strength under load', 'Excellent thermal shock resistance'],
        applications: ['Suspended furnace arches', 'Boiler crown roofs', 'Tunnel kiln crowns', 'Reheating furnace roofs'],
        image: archBricksImg,
        specs: { 'Temperature Range': '1200°C–1500°C', 'Bulk Density': '2.2–2.6 g/cm³', 'Type': 'Hanger / Suspended Brick', 'Structure': 'Curved / Shaped' },
        whyChoose: ['Eliminates need for custom formwork', 'Precise geometry ensures structural integrity', 'Reduces installation time'],
        appTags: ['furnace-lining'],
      },
      {
        name: 'Special Shaped Bricks',
        badge: 'Custom',
        temperature: '1200°C – 1700°C',
        density: '2.2–2.6 g/cm³',
        benefit: 'Custom geometries for complex furnace & kiln installations',
        description: 'Precision-manufactured refractory bricks in custom shapes and profiles for specialized furnace, kiln, and ladle geometries. Multiple alumina grades available to meet specific temperature and chemical requirements.',
        features: ['Custom geometry manufacturing', 'Tight dimensional tolerances', 'Multiple material grades available', 'Complex profile capability'],
        applications: ['Rotary kilns', 'Steel ladles', 'Incinerators', 'Custom furnace linings'],
        image: specialShapedImg,
        specs: { 'Temperature Range': '1200°C–1700°C', 'Bulk Density': '2.2–2.6 g/cm³', 'Type': 'Custom Manufactured', 'Tolerance': 'Precision machined' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Arch Block & Slab',
        badge: 'Slabs',
        temperature: 'Up to 1400°C',
        benefit: 'Flat & curved blocks for furnace floors, roofs & lining areas',
        description: 'Used in furnace floors, roofs, and structural lining areas requiring flat or curved refractory support. Precision-cut blocks and slabs available in straight and arch profiles for steel, cement, and glass industries.',
        features: ['Uniform thickness and smooth finish', 'Straight & arch profiles available', 'High structural integrity to 1400°C', 'Alumina fire brick grade'],
        applications: ['Furnace floors and hearths', 'Partition walls in kilns', 'Furnace arches & domes', 'Glass tank roofs'],
        image: refractorySlabsImg,
        specs: { 'Max Temperature': '1400°C', 'Types': 'Arch Block, Straight Slab', 'Material': 'Alumina Fire Brick', 'Finish': 'Smooth, precision-cut' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Acid Proof Bricks',
        badge: 'Chemical',
        benefit: 'Superior chemical & acid resistance for harsh environments',
        description: 'Specialized bricks with exceptional resistance to acids, alkalis, and chemical attack. Low porosity structure ensures resistance to acid penetration and long service life in corrosive environments such as chemical plants, fertilizer units, and acid storage facilities.',
        features: ['Excellent acid & alkali resistance', 'Very low porosity', 'High mechanical durability', 'Long-term chemical stability'],
        applications: ['Chemical plant flooring', 'Acid storage tanks', 'Effluent channels', 'Pickling line linings'],
        image: acidProofImg,
        specs: { 'Chemical Resistance': 'High', 'Porosity': 'Very Low', 'Type': 'Acid Proof', 'Application': 'Chemical environments' },
        whyChoose: ['Protects against corrosive chemical attack', 'Extremely durable in harsh environments', 'Low maintenance cost'],
        appTags: ['furnace-lining'],
      },
    ],
  },
  {
    icon: Droplets,
    id: 'monolithics',
    title: 'Monolithics',
    products: [
      {
        name: 'Dense Castable AH-60',
        badge: 'Dense',
        temperature: 'Up to 1600°C',
        density: '2.3–2.6 g/cm³',
        benefit: 'High-strength dense castable for general furnace linings',
        description: 'High alumina dense castable (60% Al₂O₃) suitable for general furnace linings, burner blocks, and abrasion-resistant areas in steel, cement, and power plant equipment. Provides excellent abrasion and thermal shock resistance.',
        features: ['60% Al₂O₃ content', 'Excellent abrasion resistance', 'Good thermal shock resistance', 'Strong mechanical bond'],
        applications: ['General furnace linings', 'Burner blocks', 'Reheating furnaces', 'Boiler linings'],
        image: castableImg,
        specs: { 'Max Temperature': '1600°C', 'Al₂O₃': '60%', 'Bulk Density': '2.3–2.6 g/cm³', 'Type': 'Dense Castable' },
        appTags: ['furnace-lining', 'repairs'],
      },
      {
        name: 'Dense Castable AH-90',
        badge: 'Dense',
        temperature: 'Up to 1750°C',
        density: '2.6–2.9 g/cm³',
        benefit: 'Premium high alumina dense castable for severe service',
        description: 'High alumina dense castable (~90% Al₂O₃) designed for high-temperature zones with severe abrasion and slag exposure. Used in steel ladles, reheating furnaces, and petrochemical units.',
        features: ['~90% Al₂O₃ content', 'Superior hot strength', 'Excellent slag resistance', 'High-temperature stability'],
        applications: ['Steel ladles', 'Reheating furnaces', 'Petrochemical units', 'EAF roofs & deltas'],
        image: castableImg,
        specs: { 'Max Temperature': '1750°C', 'Al₂O₃': '~90%', 'Bulk Density': '2.6–2.9 g/cm³', 'Type': 'Dense Castable' },
        appTags: ['furnace-lining', 'repairs'],
      },
      {
        name: 'Low Cement Castable LC-70',
        badge: 'Low Cement',
        temperature: 'Up to 1650°C',
        density: '2.6–2.8 g/cm³',
        benefit: 'Low cement, dense lining with superior hot strength',
        description: 'Low cement castable with 70% Al₂O₃. Low cement formulation reduces porosity and enhances hot strength, making it ideal for dense and durable refractory linings in ladles, burner zones, and cyclones.',
        features: ['Low porosity after firing', 'Superior hot strength at 1650°C', 'Excellent slag & corrosion resistance', 'Reduced drying time'],
        applications: ['Ladles', 'Burner zones', 'Cyclones', 'Heavy-duty furnace zones'],
        image: castableImg,
        specs: { 'Max Temperature': '1650°C', 'Al₂O₃': '70%', 'Bulk Density': '2.6–2.8 g/cm³', 'Type': 'Low Cement Castable' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Low Cement Castable LC-60',
        badge: 'Low Cement',
        temperature: 'Up to 1600°C',
        density: '2.5–2.7 g/cm³',
        benefit: 'Cost-effective low cement castable for general heavy-duty use',
        description: 'Low cement 60% alumina castable. Low cement formulation reduces porosity and enhances hot strength, making it ideal for dense and durable refractory linings in ladles, burner zones, and cyclones.',
        features: ['60% Al₂O₃ content', 'Low cement formulation', 'High mechanical strength', 'Good thermal shock resistance'],
        applications: ['Ladles', 'Burner zones', 'Cyclones', 'Boiler refractory linings'],
        image: castableImg,
        specs: { 'Max Temperature': '1600°C', 'Al₂O₃': '60%', 'Bulk Density': '2.5–2.7 g/cm³', 'Type': 'Low Cement Castable' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'High Alumina Castables',
        badge: 'High Alumina',
        temperature: 'Up to 1750°C',
        benefit: 'Structural high alumina castable for load-bearing applications',
        description: 'High Alumina Castables designed for structural applications where high-temperature stability and load-bearing strength are critical. Available in multiple alumina grades depending on service conditions.',
        features: ['Multiple alumina grades available', 'Excellent high-temperature stability', 'High load-bearing strength', 'Good corrosion resistance'],
        applications: ['Petrochemical reactors', 'Glass tanks', 'Aluminium melting furnaces', 'Special alloy furnaces'],
        image: castableImg,
        specs: { 'Max Temperature': '1750°C', 'Type': 'High Alumina Castable', 'Key Property': 'Load-bearing strength', 'Application': 'Structural high-temp linings' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Normal Castable FH-45',
        badge: 'Standard',
        temperature: 'Up to 1400°C',
        density: '2.0–2.2 g/cm³',
        benefit: 'Conventional castable for general-purpose furnace linings',
        description: 'Conventional castable used for general-purpose furnace linings, offering a balance of performance, cost, and ease of installation. 45% Al₂O₃ formulation suited for back-up and lower-duty zones.',
        features: ['45% Al₂O₃ content', 'Easy installation', 'Reliable thermal performance', 'Cost-effective solution'],
        applications: ['Boiler back-up linings', 'Chimney linings', 'Duct linings', 'General refractory work'],
        image: castableImg,
        specs: { 'Max Temperature': '1400°C', 'Al₂O₃': '45%', 'Bulk Density': '2.0–2.2 g/cm³', 'Type': 'Normal Castable' },
        appTags: ['furnace-lining', 'repairs'],
      },
      {
        name: 'Normal Castable FH-70',
        badge: 'Standard',
        temperature: 'Up to 1600°C',
        density: '2.3–2.5 g/cm³',
        benefit: 'Higher alumina conventional castable for moderate-duty service',
        description: 'Conventional castable used for general-purpose furnace linings, offering a balance of performance, cost, and ease of installation. 70% Al₂O₃ grade suited for moderate-duty zones in steel and cement industries.',
        features: ['70% Al₂O₃ content', 'Good hot strength', 'Standard conventional formulation', 'Reliable for moderate duty'],
        applications: ['Reheating furnace zones', 'Cement kiln coolers', 'Boiler linings', 'Soaking pit covers'],
        image: castableImg,
        specs: { 'Max Temperature': '1600°C', 'Al₂O₃': '70%', 'Bulk Density': '2.3–2.5 g/cm³', 'Type': 'Normal Castable' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Insulite Castable IN CAST-07',
        badge: 'Insulating',
        temperature: 'Up to 1000°C',
        density: '0.7–0.9 g/cm³',
        benefit: 'Lightweight insulating castable for back-up insulation',
        description: 'Used as backup insulation behind dense refractory linings to reduce heat loss and improve thermal efficiency. Lightweight castable with bulk density ~0.7 g/cm³. Not recommended for direct flame exposure unless specified.',
        features: ['Very low thermal conductivity', 'Lightweight (0.7 g/cm³)', 'Easy pump or pour application', 'Good insulating properties'],
        applications: ['Back-up insulation linings', 'Heat conservation layers', 'Kiln shells', 'Duct insulation'],
        image: castableImg,
        specs: { 'Max Temperature': '1000°C', 'Bulk Density': '0.7–0.9 g/cm³', 'Type': 'Insulite Castable', 'Key Property': 'Low thermal conductivity' },
        appTags: ['insulation'],
      },
      {
        name: 'Insulite Castable IN CAST-11',
        badge: 'Insulating',
        temperature: 'Up to 1200°C',
        density: '1.0–1.2 g/cm³',
        benefit: 'Higher temperature insulating castable for back-up insulation',
        description: 'Used as backup insulation behind dense refractory linings to reduce heat loss and improve thermal efficiency. Insulating castable with 1.1 g/cm³ density rated up to 1200°C. Not recommended for direct flame exposure unless specified.',
        features: ['Rated up to 1200°C', 'Balanced insulation & strength', 'Pumpable / pourable', 'Reduces shell temperature'],
        applications: ['Heat treatment furnaces', 'Annealing kilns', 'Soaking pit covers', 'Insulation layers'],
        image: castableImg,
        specs: { 'Max Temperature': '1200°C', 'Bulk Density': '1.0–1.2 g/cm³', 'Type': 'Insulite Castable', 'Key Property': 'Insulation + strength' },
        appTags: ['insulation'],
      },
      {
        name: 'TRL SET-N',
        badge: 'Fire Cement',
        group: 'Fire Cement & Accosset',
        temperature: 'Up to 1400°C',
        benefit: 'Air-setting refractory cement for general brick jointing',
        description: 'Air-setting refractory cement used for general brick jointing in furnaces and kilns. Delivers high bonding strength and excellent adhesion in high-temperature environments — ideal for furnace lining, joints, and repairs.',
        features: ['High bonding strength for refractory applications', 'Excellent adhesion at high temperatures', 'Air-setting formulation', 'Easy mixing & application'],
        applications: ['Furnace lining joints', 'Boiler refractory work', 'Kiln construction', 'Repair & patching'],
        image: refractoryCementImg,
        specs: { 'Max Temperature': '1400°C', 'Type': 'Air-setting Cement', 'Grade': 'TRL SET-N', 'Application': 'Brick jointing' },
        appTags: ['jointing', 'repairs'],
      },
      {
        name: 'TRL SET-F',
        badge: 'Fire Cement',
        group: 'Fire Cement & Accosset',
        temperature: 'Up to 1600°C',
        benefit: 'Heat-setting cement for high-temperature ceramic bonding',
        description: 'Heat-setting refractory cement designed for high-temperature zones requiring strong ceramic bonding. Used in furnace lining, joints, and critical repairs across steel and glass industries.',
        features: ['High bonding strength for refractory applications', 'Excellent adhesion in high-temperature environments', 'Heat-setting ceramic bond', 'Withstands up to 1600°C'],
        applications: ['High alumina brick jointing', 'EAF & ladle work', 'Reheating furnace lining', 'Glass tank construction'],
        image: refractoryCementImg,
        specs: { 'Max Temperature': '1600°C', 'Type': 'Heat-setting Cement', 'Grade': 'TRL SET-F', 'Application': 'HA brick jointing' },
        appTags: ['jointing', 'repairs'],
      },
      {
        name: 'ACCOSSET 50',
        badge: 'Fire Cement',
        group: 'Fire Cement & Accosset',
        temperature: 'Up to 1500°C',
        benefit: 'Phosphate-bonded setting compound for critical refractory bonding',
        description: 'Phosphate-bonded setting compound for high-strength bonding in critical refractory applications. Provides excellent adhesion in high-temperature environments and is widely used in furnace lining, joints, and repairs across steel and ferro-alloy industries.',
        features: ['High green & fired bond strength', 'Excellent adhesion at high temperatures', 'Controlled setting time', 'Phosphate-bonded grade'],
        applications: ['Furnace lining & joints', 'Critical refractory bonding', 'High-temp patching & repairs', 'Precision lining work'],
        image: specialtyMatImg,
        specs: { 'Max Temperature': '1500°C', 'Type': 'Phosphate-bonded Compound', 'Grade': 'ACCOSSET 50', 'Application': 'Critical bonding' },
        appTags: ['jointing', 'repairs'],
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
        temperature: 'Classification up to 1260°C / 1400°C',
        density: '64–128 kg/m³',
        benefit: 'Excellent thermal insulation with low conductivity & shock resistance',
        description: 'High-performance ceramic fiber blankets and modules with classification temperature up to 1260°C / 1400°C depending on grade. Lightweight, flexible, and chemically resistant for diverse industrial applications.',
        features: ['Low thermal conductivity', 'Thermal shock resistance', 'Excellent flexibility & drapeability', 'Easy to cut and install'],
        applications: ['Furnace linings', 'Expansion joints', 'Pipe wrapping', 'High-temp gaskets'],
        image: ceramicFiberImg,
        specs: { 'Classification Temp': '1260°C / 1400°C', 'Bulk Density': '64–128 kg/m³', 'Type': 'Ceramic Fiber', 'Key Property': 'Low conductivity, shock resistant' },
        whyChoose: ['Dramatically reduces heat loss', 'Quick installation reduces downtime', 'Flexible – conforms to any shape'],
        appTags: ['insulation'],
      },
      {
        name: 'Ceramic Fiber Modules',
        badge: 'Pre-engineered',
        temperature: 'Classification up to 1260°C / 1400°C',
        benefit: 'Quick installation with pre-engineered modular units',
        description: 'Pre-compressed ceramic fiber modules for rapid furnace lining with consistent quality and classification temperature up to 1260°C / 1400°C depending on grade. Reduces installation time and labor costs significantly.',
        features: ['Rapid modular installation', 'Pre-compressed for consistent density', 'Low thermal conductivity', 'Thermal shock resistance'],
        applications: ['Furnace walls', 'Kiln linings', 'Annealing furnaces', 'Forge furnaces'],
        image: ceramicFiberImg,
        specs: { 'Classification Temp': '1260°C / 1400°C', 'Type': 'Pre-compressed Module', 'Installation': 'Modular / Quick-fit', 'Key Property': 'Consistent density' },
        appTags: ['insulation'],
      },
      {
        name: 'Rockwool Mattress',
        badge: 'Industrial',
        temperature: 'Up to 750°C',
        density: '80–150 kg/m³',
        benefit: 'Available in multiple densities & thicknesses for industrial use',
        description: 'Industrial-grade rockwool providing dual thermal and acoustic insulation properties. Available in multiple densities and thicknesses for industrial applications including LRB Rockwool Mattress.',
        features: ['Thermal insulation up to 750°C', 'Sound absorption capability', 'Fire resistant', 'Multiple densities & thicknesses'],
        applications: ['Pipe insulation', 'HVAC systems', 'Industrial ovens', 'Building insulation'],
        image: rockwoolImg,
        specs: { 'Max Temperature': '750°C', 'Bulk Density': '80–150 kg/m³', 'Type': 'Rockwool', 'Features': 'Thermal + Acoustic insulation' },
        variants: ['LRB Rockwool Mattress', 'Multiple densities', 'Multiple thicknesses'],
        appTags: ['insulation'],
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
        appTags: ['insulation'],
      },
      {
        name: 'Asbestos-Free Mill Board',
        badge: 'Mill Board',
        benefit: 'Asbestos-free mill board for gaskets, barriers & insulation',
        description: 'Used for gaskets, thermal barriers, and insulation in industrial applications with safe asbestos-free composition. Compliant with modern safety standards across steel, power, and chemical industries.',
        features: ['100% asbestos-free composition', 'Good thermal insulation', 'Easy to cut and shape', 'Compliant with safety standards'],
        applications: ['Gaskets & seals', 'Thermal barriers', 'Furnace door linings', 'Insulation packing'],
        image: millBoardImg,
        specs: { 'Type': 'Asbestos-Free Mill Board', 'Safety': '100% Asbestos Free', 'Machinability': 'Easy to cut', 'Application': 'Gaskets, barriers, linings' },
        appTags: ['insulation', 'jointing'],
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
        name: 'Refractory Mortars',
        badge: 'Jointing',
        temperature: 'Up to 1700°C',
        benefit: 'Refractory mortars for bonding fire & high alumina bricks',
        description: 'Refractory mortars used for bonding fire bricks and high alumina bricks, ensuring strong joints and thermal stability. TRL 60M and TRL 70M grades available for varying service conditions.',
        features: ['High bond strength', 'TRL 60M (60% Al₂O₃) & TRL 70M (70% Al₂O₃) grades', 'Good workability & trowellability', 'Chemical & thermal resistant'],
        applications: ['High alumina brick laying', 'Joint filling in furnaces', 'Repair work', 'Kiln & boiler construction'],
        image: refractoryMortarImg,
        specs: { 'Max Temperature': '1700°C', 'Grades': 'TRL 60M, TRL 70M', 'Type': 'Refractory Mortar', 'Workability': 'Excellent' },
        variants: ['TRL 60M', 'TRL 70M'],
        appTags: ['jointing', 'repairs'],
      },
      {
        name: 'Fire Clay',
        badge: 'Versatile',
        temperature: 'Up to 1000°C',
        benefit: 'Plastic clay for patching, jointing & low-temperature repairs',
        description: 'Plastic refractory clay used for patching, jointing, and temporary repairs in low-temperature applications. Good plasticity for easy on-site working.',
        features: ['Plastic refractory clay', 'Good plasticity & workability', 'Suitable for low-temperature repairs', 'Easy on-site application'],
        applications: ['Patching & temporary repairs', 'Joint filling', 'General refractory work', 'Mold making'],
        image: fireClayImg,
        specs: { 'Max Temperature': '1000°C', 'Type': 'Plastic Fire Clay', 'Key Property': 'Good plasticity', 'Application': 'Patching & jointing' },
        appTags: ['repairs', 'jointing'],
      },
      {
        name: 'Acid Proof Tiles',
        badge: 'Chemical',
        benefit: 'Chemical & corrosion resistance for harsh environments',
        description: 'Specialized tiles providing exceptional resistance to acids, alkalis, and chemical attack. Low porosity ensures long-term durability in chemical and fertilizer industries.',
        features: ['Acid & alkali resistant', 'Very low porosity', 'High durability', 'Chemical stability'],
        applications: ['Chemical plant floors', 'Acid storage areas', 'Laboratory floors', 'Effluent channels'],
        image: acidProofImg,
        specs: { 'Type': 'Acid Proof Tile', 'Chemical Resistance': 'High', 'Porosity': 'Very Low', 'Application': 'Chemical environments' },
        appTags: ['furnace-lining'],
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
        appTags: ['repairs'],
      },
      {
        name: 'Nozzles',
        badge: 'Flow Control',
        temperature: 'Up to 1700°C',
        benefit: 'Precision refractory nozzles for molten metal flow control',
        description: 'High-quality refractory nozzles engineered for molten metal flow control in steel ladles, tundishes, and continuous casting operations. Manufactured for dimensional precision and erosion resistance.',
        features: ['High erosion & corrosion resistance', 'Precise dimensional accuracy', 'Withstands molten metal contact', 'Long service life'],
        applications: ['Steel ladle nozzles', 'Tundish nozzles', 'Continuous casting', 'Foundry pouring systems'],
        image: boilerCompImg,
        specs: { 'Max Temperature': '1700°C', 'Type': 'Refractory Nozzle', 'Application': 'Molten metal flow control', 'Material': 'High Alumina / Zirconia' },
        appTags: ['furnace-lining'],
      },
      {
        name: 'Sodium Silicate Binder',
        badge: 'Binder',
        benefit: 'Sodium silicate binder for refractory & foundry applications',
        description: 'Industrial-grade sodium silicate binder widely used in refractory formulations and foundry applications for binding and sealing. Used across steel, foundry, and chemical industries for core making, coatings, and sealing.',
        features: ['Strong binding power', 'Chemical stability', 'Versatile for refractory & foundry use', 'Effective sealing & coating'],
        applications: ['Refractory bonding', 'Foundry core binding', 'Surface coating', 'Sealing applications'],
        image: specialtyMatImg,
        specs: { 'Type': 'Sodium Silicate Binder', 'Key Property': 'Strong binding', 'Application': 'Binder / Sealer', 'Form': 'Liquid' },
        appTags: ['jointing'],
      },
      {
        name: 'Bed Material',
        badge: 'FBC',
        benefit: 'Graded bed material for FBC boilers',
        description: 'Graded bed material for Fluidized Bed Combustion (FBC) boilers ensuring proper fluidization, efficient combustion, and minimal clinker formation in power plants and industrial boilers.',
        features: ['Optimized particle size distribution', 'Ensures proper fluidization', 'Minimal clinker formation', 'Low attrition rate'],
        applications: ['FBC boilers', 'Fluidized bed systems', 'Combustion beds', 'Power plants'],
        image: specialtyMatImg,
        specs: { 'Type': 'Fluidized Bed Combustion (FBC) Bed Material', 'Key Property': 'Optimized fluidization', 'Application': 'FBC boilers', 'Quality': 'Consistent grading' },
        appTags: ['repairs'],
      },
    ],
  },
  {
    icon: Anchor,
    id: 'grounding',
    title: 'Grounding',
    products: [
      {
        name: 'GP2 Non-Shrink Grout',
        badge: 'Grout',
        benefit: 'High-strength, non-shrink grout for industrial foundations',
        description: 'High-strength cementitious non-shrink grout used for machinery foundations, base plates, and structural anchoring. Provides high load-bearing capacity and crack-free performance under heavy industrial loads.',
        features: ['High bonding strength', 'Non-shrink performance', 'High load-bearing capacity', 'Crack-free cured matrix'],
        applications: ['Machinery foundations', 'Base plate grouting', 'Anchor bolt grouting', 'Industrial structural anchoring'],
        image: specialtyMatImg,
        specs: { 'Type': 'Non-Shrink Cementitious Grout', 'Key Property': 'Non-shrink, high bond', 'Load Capacity': 'High', 'Application': 'Industrial foundations' },
        whyChoose: ['Ensures long-term machinery stability', 'No shrinkage means perfect load transfer', 'High load-bearing & crack-free'],
        appTags: ['jointing'],
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
      <div
        className="group h-full relative rounded-xl overflow-hidden border border-[hsl(0_0%_82%)] transition-all duration-500 hover:scale-[1.02] hover:border-[hsl(0_0%_70%)] hover:shadow-[0_18px_45px_-12px_hsl(0_0%_50%/0.35),0_0_0_1px_hsl(0_0%_88%)_inset]"
        style={{
          background: 'linear-gradient(145deg, hsl(0 0% 99%) 0%, hsl(0 0% 94%) 50%, hsl(0 0% 97%) 100%)',
          boxShadow: '0 4px 18px -6px hsl(0 0% 0% / 0.10), inset 0 1px 0 hsl(0 0% 100% / 0.9)',
        }}
      >
        {/* Silver shine top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_0%_100%)] to-transparent z-10" />
        {/* Diagonal light reflection */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[5]"
          style={{
            background: 'linear-gradient(115deg, transparent 30%, hsl(0 0% 100% / 0.35) 48%, transparent 60%)',
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
      
      {(() => {
        const items: JSX.Element[] = [];
        let currentGroup: string | undefined = undefined;
        category.products.forEach((product, index) => {
          if (product.group && product.group !== currentGroup) {
            currentGroup = product.group;
            items.push(
              <div key={`group-${product.group}`} className="sm:col-span-2 lg:col-span-3 mt-4 first:mt-0">
                <div className="flex items-center gap-3">
                  <Flame size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-base md:text-lg">
                    {product.group}
                  </h4>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #C0C0C0, #E8E8E8, transparent)' }}></div>
                </div>
              </div>
            );
          }
          items.push(<ProductCard key={product.name} product={product} index={index} />);
        });
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items}
          </div>
        );
      })()}
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
