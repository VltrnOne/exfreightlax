import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our logistics experts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />
              <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />
              <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border rounded-lg" required />
              <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="w-full px-4 py-3 border rounded-lg" required></textarea>
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold">Send Message</button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Headquarters</h4>
                <p className="text-gray-700">123 Logistics Avenue<br/>New York, NY 10001<br/>United States</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Phone</h4>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Email</h4>
                <p className="text-gray-700">info@exfreight.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Business Hours</h4>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
