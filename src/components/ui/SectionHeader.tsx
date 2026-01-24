import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary"></span>
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={100}>
        <h2 className="heading-lg text-foreground mb-4">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={200}>
          <p className={`text-body max-w-3xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
