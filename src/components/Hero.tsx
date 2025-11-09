import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! Our team will contact you within 24 hours.');
    setFormData({ origin: '', destination: '', cargoType: '', weight: '', timeline: '' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/6910496753340ffa2a48b4f7_1762675097566_e1f3b061.webp" 
          alt="Freight logistics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Freight Solutions</h1>
            <p className="text-xl mb-8">Reliable shipping services connecting your business to the world. Air, ocean, and ground freight with real-time tracking.</p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-semibold">
                Get Started
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold">
                Our Services
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Origin" value={formData.origin} onChange={(e) => setFormData({...formData, origin: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="Destination" value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
              <select value={formData.cargoType} onChange={(e) => setFormData({...formData, cargoType: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required>
                <option value="">Cargo Type</option>
                <option value="general">General Cargo</option>
                <option value="perishable">Perishable Goods</option>
                <option value="hazardous">Hazardous Materials</option>
              </select>
              <input type="text" placeholder="Weight (kg)" value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="Timeline" value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
