import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';
import FloatingParticles from '../components/FloatingParticles';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div id="main-scroll-container" className="h-[100dvh] overflow-y-auto scroll-smooth bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] relative">
      <div className="relative z-20">
        <Header />
        <main className={`${isHome ? '' : 'pt-16 lg:pt-20'} relative`}>
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
