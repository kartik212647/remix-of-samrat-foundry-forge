import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

import furnaceImg from '@/assets/gallery/furnace-interior.jpg';
import kilnImg from '@/assets/gallery/kiln-lining.jpg';
import thermalImg from '@/assets/gallery/thermal-plant.jpg';
import brickInstallImg from '@/assets/gallery/brick-installation.jpg';
import refractoryProductsImg from '@/assets/gallery/refractory-products.jpg';
import insulationWorkImg from '@/assets/gallery/insulation-work.jpg';

const galleryImages = [
  { src: furnaceImg, alt: 'Refractory-lined industrial furnace interior', caption: 'Furnace Refractory Lining' },
  { src: kilnImg, alt: 'Kiln interior with precision brick lining', caption: 'Kiln Brick Installation' },
  { src: thermalImg, alt: 'Thermal power plant insulation work', caption: 'Thermal Plant Insulation' },
  { src: brickInstallImg, alt: 'Refractory brick installation in progress', caption: 'On-Site Brick Installation' },
  { src: refractoryProductsImg, alt: 'Refractory products and materials', caption: 'Refractory Products' },
  { src: insulationWorkImg, alt: 'Industrial insulation cladding work', caption: 'Insulation Cladding' },
];

interface GallerySliderProps {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function GallerySlider({
  label = 'Gallery',
  title = 'Our Work in Action',
  description = 'Explore our refractory installations, furnace linings, and insulation work across industrial facilities.',
  className = '',
}: GallerySliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container-industrial">
        <SectionHeader label={label} title={title} description={description} centered />
        <ScrollReveal>
          <div className="relative group">
            <div ref={emblaRef} className="overflow-hidden rounded-lg">
              <div className="flex">
                {galleryImages.map((img, i) => (
                  <div key={i} className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_hsl(0_0%_0%/0.12)] group/card">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        width={1024}
                        height={768}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{img.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
