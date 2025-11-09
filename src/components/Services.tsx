const services = [
  { title: 'Air Freight', description: 'Fast international shipping with priority handling and real-time tracking.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675098344_20fb7ddd.webp' },
  { title: 'Ocean Freight', description: 'Cost-effective sea shipping for large cargo volumes worldwide.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675099114_fa619b23.webp' },
  { title: 'Ground Transport', description: 'Reliable trucking services for domestic and cross-border deliveries.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675099884_220ac2dc.webp' },
  { title: 'Warehousing', description: 'Secure storage facilities with inventory management systems.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675100693_f81f8243.webp' },
  { title: 'Customs Brokerage', description: 'Expert customs clearance and documentation services.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675101470_7cb741bf.webp' },
  { title: 'Distribution', description: 'Last-mile delivery and distribution center management.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675102217_dc88be40.webp' },
  { title: 'Rail Freight', description: 'Efficient rail transport for heavy cargo and bulk shipments.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675120119_cfaa6975.webp' },
  { title: 'Supply Chain', description: 'End-to-end supply chain consulting and optimization.', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675121965_21f2fbac.webp' }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive logistics solutions for every shipping need</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
