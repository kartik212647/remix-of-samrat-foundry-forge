import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-primary"></span>
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={100}>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-3">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={200}>
          <p className={`text-sm md:text-base text-muted-foreground max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
