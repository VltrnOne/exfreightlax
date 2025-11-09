import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [howToShipMenuOpen, setHowToShipMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-900">ExFreight</Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`${isActive('/') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <button className={`${location.pathname.startsWith('/our-services') || location.pathname.startsWith('/international-small-parcel') || location.pathname.startsWith('/cargo-insurance') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>
              Services
            </button>
            {servicesMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                <Link to="/our-services/trucking" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Trucking</Link>
                <Link to="/our-services/trucking/ltl-freight" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 pl-8">LTL Freight</Link>
                <Link to="/our-services/trucking/ftl-trucking" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 pl-8">FTL Trucking</Link>
                <Link to="/our-services/air-freight" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Air Freight</Link>
                <Link to="/international-small-parcel-shipping" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">International Small Parcel</Link>
                <Link to="/our-services/ocean-freight" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Ocean Freight</Link>
                <Link to="/our-services/ocean-freight/fcl-services" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 pl-8">FCL Services</Link>
                <Link to="/our-services/ocean-freight/lcl-shipping" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 pl-8">LCL Shipping</Link>
                <Link to="/our-services/amazon-fba" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Amazon FBA</Link>
                <Link to="/cargo-insurance" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Cargo Insurance</Link>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setHowToShipMenuOpen(true)}
            onMouseLeave={() => setHowToShipMenuOpen(false)}
          >
            <button className={`${location.pathname.startsWith('/how-to-ship') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}>
              How to Ship
            </button>
            {howToShipMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                <Link to="/how-to-ship" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">How to Ship</Link>
                <Link to="/how-to-ship-guide" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">How to Ship Guide</Link>
                <Link to="/how-to-ship-videos" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">How to Ship Videos</Link>
              </div>
            )}
          </div>

          <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-orange-500">Industries</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500">Contact</button>
        </div>

        <button onClick={() => scrollToSection('quote')} className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Get Quote
        </button>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <div className="space-y-1 pl-4">
              <div className="font-semibold py-2">Services</div>
              <Link to="/our-services/trucking" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>Trucking</Link>
              <Link to="/our-services/trucking/ltl-freight" className="block py-1 pl-8" onClick={() => setMobileMenuOpen(false)}>LTL Freight</Link>
              <Link to="/our-services/trucking/ftl-trucking" className="block py-1 pl-8" onClick={() => setMobileMenuOpen(false)}>FTL Trucking</Link>
              <Link to="/our-services/air-freight" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>Air Freight</Link>
              <Link to="/international-small-parcel-shipping" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>International Small Parcel</Link>
              <Link to="/our-services/ocean-freight" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>Ocean Freight</Link>
              <Link to="/our-services/ocean-freight/fcl-services" className="block py-1 pl-8" onClick={() => setMobileMenuOpen(false)}>FCL Services</Link>
              <Link to="/our-services/ocean-freight/lcl-shipping" className="block py-1 pl-8" onClick={() => setMobileMenuOpen(false)}>LCL Shipping</Link>
              <Link to="/our-services/amazon-fba" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>Amazon FBA</Link>
              <Link to="/cargo-insurance" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>Cargo Insurance</Link>
            </div>
            <div className="space-y-1 pl-4">
              <div className="font-semibold py-2">How to Ship</div>
              <Link to="/how-to-ship" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>How to Ship</Link>
              <Link to="/how-to-ship-guide" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>How to Ship Guide</Link>
              <Link to="/how-to-ship-videos" className="block py-1 pl-4" onClick={() => setMobileMenuOpen(false)}>How to Ship Videos</Link>
            </div>
            <button onClick={() => scrollToSection('industries')} className="block w-full text-left py-2">Industries</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">Contact</button>
            <button onClick={() => scrollToSection('quote')} className="bg-orange-500 text-white px-6 py-2 rounded-lg w-full">Get Quote</button>
          </div>
        </div>
      )}
    </header>
  );
}
