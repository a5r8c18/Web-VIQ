import { ReactNode } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import FloatingParticles from '../components/FloatingParticles';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] relative">
      <div className="relative z-20">
        <Header />
        <main className="pt-16 lg:pt-20 relative">
          {children}
        </main>
        <Footer />
      </div>
      {/* Golden particles across the whole site */}
      <FloatingParticles />
    </div>
  );
};

export default Layout;
