const team = [
  { name: 'James Anderson', role: 'CEO & Founder', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675102938_cc069a84.webp' },
  { name: 'Maria Garcia', role: 'Operations Director', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675104679_a7a3e765.webp' },
  { name: 'Robert Wilson', role: 'Logistics Manager', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675106380_d119f79f.webp' },
  { name: 'Linda Brown', role: 'Customer Relations', image: 'https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675108743_520088eb.webp' }
];

export default function Team() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">About ExFreight</h3>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 1995, ExFreight has grown to become a global leader in logistics and freight forwarding. With over 25 years of experience, we've built a reputation for reliability, efficiency, and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700">
            Our extensive network spans 150+ countries, ensuring your cargo reaches any destination worldwide. We combine cutting-edge technology with personalized service to deliver solutions that meet your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
