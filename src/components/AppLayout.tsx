import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Industries from './Industries';
import Testimonials from './Testimonials';
import Team from './Team';
import QuoteSection from './QuoteSection';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Team />
      <QuoteSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
