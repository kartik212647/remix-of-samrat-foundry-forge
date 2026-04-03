import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import useScrollToTop from '@/hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
