import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });

  // Добавляем два новых состояния
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(''); 

    try {
      await axios.post('http://127.0.0.1:8000/api/contact', formData);
      
      setStatusMessage('Your message is being processed. Thank you!');
      
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
    
      setTimeout(() => setStatusMessage(''), 5000);
    } catch (error) {
      console.error("Error while sending:", error);
      setStatusMessage('An error occurred while sending. Please try again later..');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="container mx-auto px-10 py-20">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-12">
        Contact <br /> <span className="text-[#333333] font-bold">Us</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-10">
          
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <input 
              name="name"
              type="text" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#F3F3F3] border-none p-5 text-sm outline-none"
            />
            <input 
              name="phone"
              type="text" 
              placeholder="Phone Number*" 
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#F3F3F3] border-none p-5 text-sm outline-none"
            />
            <input 
              name="email"
              type="email" 
              placeholder="E-mail*" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F3F3F3] border-none p-5 text-sm outline-none"
            />
            <input 
              name="interest"
              type="text" 
              placeholder="Interested In" 
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-[#F3F3F3] border-none p-5 text-sm outline-none"
            />
            <textarea 
              name="message"
              placeholder="Message*" 
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F3F3F3] border-none p-5 text-sm outline-none resize-none"
            ></textarea>
          </div>

          <div className="w-full md:w-2/3">
            <img 
              src="/images/Contact.png" 
              alt="Contact Us" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>

    <div className="mt-10 flex flex-col items-start gap-4">
  
  {statusMessage && (
    <div className={`text-sm tracking-wider uppercase ${statusMessage.includes('Ошибка') ? 'text-red-500' : 'text-green-600'}`}>
      {statusMessage}
    </div>
  )}

  <button 
    type="submit" 
    disabled={loading}
    className={`bg-[#333333] text-white px-12 py-6 text-[12px] tracking-[4px] uppercase hover:bg-black transition-all flex items-center ${loading ? 'opacity-50' : ''}`}
  >
    {loading ? 'Sending...' : 'Send Email'} <span className="ml-4">→</span>
  </button>
</div>
      </form>
    </section>
  );
};

export default Contact;