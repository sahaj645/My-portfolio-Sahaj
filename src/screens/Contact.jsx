import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactBackground from '../components/Contact/ContactBackground';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      // EmailJS credentials
      const serviceId = 'service_isk0cp5';
      const templateId = 'template_avjb0f3';
      const publicKey = 'GBWrrIPskQ4J3Mux-';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sahaj Gaur', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success state
      setSubmitStatus('success');
      
      // Reset form after success animation
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://www.linkedin.com/in/Sahaj-gaur-13406123a/' },
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/SahajGaur19' },
    { name: 'WhatsApp', icon: 'logos:whatsapp-icon', url: 'https://wa.me/9829146140' },
    { name: 'Twitter', icon: 'logos:twitter', url: 'https://twitter.com/Sahaj_gaur' },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <ContactBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <ContactForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
          <ContactInfo socialLinks={socialLinks} />
        </div>
      </div>
    </section>
  );
};

export default Contact;