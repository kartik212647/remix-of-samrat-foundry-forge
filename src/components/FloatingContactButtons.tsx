import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919897329686"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+919897329686"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>
      <a
        href="mailto:sanjaysingh@samratrefractories.com"
        aria-label="Email us"
        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}
