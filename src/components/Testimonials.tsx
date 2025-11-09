import { useState } from 'react';

const testimonials = [
  { name: 'John Smith', company: 'TechCorp Industries', text: 'ExFreight has been our logistics partner for 5 years. Their reliability and customer service are unmatched.', rating: 5 },
  { name: 'Sarah Johnson', company: 'Global Retail Co', text: 'Fast shipping and excellent tracking. Our customers are always satisfied with delivery times.', rating: 5 },
  { name: 'Michael Chen', company: 'PharmaMed Solutions', text: 'Temperature-controlled shipping handled perfectly. They understand the critical nature of our products.', rating: 5 },
  { name: 'Emily Rodriguez', company: 'AutoParts Direct', text: 'Cost-effective solutions without compromising quality. Highly recommend for automotive logistics.', rating: 5 },
  { name: 'David Thompson', company: 'FreshFood Distributors', text: 'Their cold chain logistics are top-notch. Products arrive fresh every time.', rating: 5 },
  { name: 'Lisa Wang', company: 'Electronics Hub', text: 'Secure handling of high-value electronics. Professional team and great communication.', rating: 5 },
  { name: 'Robert Martinez', company: 'Fashion Forward', text: 'International shipping made easy. They handle all customs paperwork efficiently.', rating: 5 },
  { name: 'Jennifer Lee', company: 'BuildMart Supply', text: 'Heavy cargo shipping experts. Always on time and damage-free deliveries.', rating: 5 }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What our customers say about us</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-orange-500 text-4xl mb-4">★★★★★</div>
            <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentIndex].text}"</p>
            <div className="font-bold text-blue-900">{testimonials[currentIndex].name}</div>
            <div className="text-gray-600">{testimonials[currentIndex].company}</div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
