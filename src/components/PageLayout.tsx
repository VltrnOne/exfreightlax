import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LegalDisclaimer from './LegalDisclaimer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20">
        <LegalDisclaimer />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

