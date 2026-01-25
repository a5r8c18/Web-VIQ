import { ReactNode } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <Header />
      <main className="pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
