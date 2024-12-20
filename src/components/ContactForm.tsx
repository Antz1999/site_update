import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '26f9c8c0-5c4a-4f6b-9c1d-5c9c9c9c9c9c',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'ant@qflow.io'
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="font-title text-sm font-[100] tracking-wider text-gray-300 mb-8">contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-title text-sm font-[100] tracking-wider text-gray-300 mb-2">name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[#6BB5F5] focus:outline-none font-title text-sm font-[100] tracking-wider text-gray-300"
            />
          </div>
          <div>
            <label className="block font-title text-sm font-[100] tracking-wider text-gray-300 mb-2">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[#6BB5F5] focus:outline-none font-title text-sm font-[100] tracking-wider text-gray-300"
            />
          </div>
          <div>
            <label className="block font-title text-sm font-[100] tracking-wider text-gray-300 mb-2">message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-[#6BB5F5] focus:outline-none font-title text-sm font-[100] tracking-wider text-gray-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4B9FE1]/90 text-white py-3 rounded-lg font-title text-sm font-[100] tracking-wider hover:bg-[#4B9FE1] transition-colors"
          >
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;