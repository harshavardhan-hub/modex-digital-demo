import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main className="flex-grow pt-0" style={{ width: '100%', overflowX: 'hidden' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
