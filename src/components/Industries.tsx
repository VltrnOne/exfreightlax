const industries = [
  { title: 'Manufacturing', description: 'Just-in-time delivery for production materials and finished goods', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675116614_894e5654.webp' },
  { title: 'Retail & E-commerce', description: 'Fast fulfillment and distribution for online and brick-and-mortar stores', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675118082_d89ace8b.webp' },
  { title: 'Pharmaceuticals', description: 'Temperature-controlled shipping with regulatory compliance', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675119174_95e0f55c.webp' },
  { title: 'Automotive', description: 'Specialized handling for vehicles and automotive parts', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675116614_894e5654.webp' },
  { title: 'Technology', description: 'Secure transport for electronics and high-value equipment', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675121965_21f2fbac.webp' },
  { title: 'Food & Beverage', description: 'Cold chain logistics for perishable products', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675118082_d89ace8b.webp' }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Tailored logistics solutions for diverse sectors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img src={industry.image} alt={industry.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                <p className="text-blue-100">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
