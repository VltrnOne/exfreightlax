const features = [
  { title: 'Global Network', description: 'Operations in 150+ countries with local expertise', icon: '🌍' },
  { title: '24/7 Support', description: 'Round-the-clock customer service and tracking', icon: '⏰' },
  { title: 'Competitive Rates', description: 'Best pricing without compromising quality', icon: '💰' },
  { title: 'Real-Time Tracking', description: 'Monitor your shipments every step of the way', icon: '📍' },
  { title: 'Secure Handling', description: 'Advanced security protocols for cargo safety', icon: '🔒' },
  { title: 'Fast Delivery', description: 'Optimized routes for timely deliveries', icon: '⚡' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose ExFreight</h2>
          <p className="text-xl text-blue-200">Industry-leading logistics solutions backed by decades of experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-800 rounded-lg p-6 hover:bg-blue-700 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">25K+</div>
            <div className="text-blue-200">Shipments Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">150+</div>
            <div className="text-blue-200">Countries Served</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-blue-200">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">5K+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
