import { ReactNode } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[var(--color-text-primary)] relative">
      <div className="relative z-20">
        <Header />
        <main className="pt-16 lg:pt-20 relative">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
