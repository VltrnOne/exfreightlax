export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">exfreightwest</h3>
            <p className="text-blue-200">Your trusted global logistics partner since 1995.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Air Freight</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Ocean Freight</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Ground Transport</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Warehousing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => scrollToSection('industries')} className="hover:text-white">Industries</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
              <li><button className="hover:text-white">Careers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button className="hover:text-white">Privacy Policy</button></li>
              <li><button className="hover:text-white">Terms of Service</button></li>
              <li><button className="hover:text-white">Cookie Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="text-center text-blue-200 mb-4">
            <p className="font-semibold text-white mb-2">Independent Contractor Station</p>
            <p className="text-sm">This is an independent contractor station and is not affiliated with, endorsed by, or a part of ExFreight corporate. We operate as an independent contractor station providing logistics services.</p>
          </div>
          <div className="text-center text-blue-200 text-sm">
            <p>&copy; 2025 ExFreight. All rights reserved.</p>
            <p className="mt-2">ExFreight is a registered trademark. Used with permission as an authorized independent contractor station.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
