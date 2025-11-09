import { useState } from 'react';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    timeline: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted successfully! Our team will contact you within 2 hours with a detailed quote.');
    setFormData({
      name: '', email: '', phone: '', origin: '', destination: '',
      cargoType: '', weight: '', dimensions: '', timeline: '', additionalInfo: ''
    });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Get a Detailed Quote</h2>
          <p className="text-gray-600 text-center mb-8">Fill out the form below and receive a customized shipping quote within 2 hours</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-3 border rounded-lg" required />
              <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 border rounded-lg" required />
            </div>

            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Origin City/Port" value={formData.origin} onChange={(e) => setFormData({...formData, origin: e.target.value})} className="px-4 py-3 border rounded-lg" required />
              <input type="text" placeholder="Destination City/Port" value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="px-4 py-3 border rounded-lg" required />
            </div>

            <select value={formData.cargoType} onChange={(e) => setFormData({...formData, cargoType: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required>
              <option value="">Select Cargo Type</option>
              <option value="general">General Cargo</option>
              <option value="perishable">Perishable Goods</option>
              <option value="hazardous">Hazardous Materials</option>
              <option value="oversized">Oversized Cargo</option>
              <option value="electronics">Electronics</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Weight (kg)" value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} className="px-4 py-3 border rounded-lg" required />
              <input type="text" placeholder="Dimensions (L x W x H)" value={formData.dimensions} onChange={(e) => setFormData({...formData, dimensions: e.target.value})} className="px-4 py-3 border rounded-lg" required />
            </div>

            <input type="text" placeholder="Preferred Timeline" value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />

            <textarea placeholder="Additional Information" value={formData.additionalInfo} onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})} rows={4} className="w-full px-4 py-3 border rounded-lg"></textarea>

            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 font-semibold text-lg">Get Your Quote Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
