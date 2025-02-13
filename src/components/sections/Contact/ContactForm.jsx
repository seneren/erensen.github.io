import { useState, useEffect } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const { fullname, email, message } = formData;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      return (
        fullname.trim().length > 0 &&
        emailRegex.test(email) &&
        message.trim().length > 0
      );
    };

    setIsValid(validateForm());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Clear form after successful submission
      setFormData({
        fullname: '',
        email: '',
        message: ''
      });

      // Show success message (you might want to add a state for this)
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      
      <form className="form" data-form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input 
            type="text" 
            name="fullname" 
            className="form-input" 
            placeholder="Your Name" 
            required 
            value={formData.fullname}
            onChange={handleChange}
            data-form-input
          />
          
          <input 
            type="email" 
            name="email" 
            className="form-input" 
            placeholder="Your Email" 
            required
            value={formData.email}
            onChange={handleChange}
            data-form-input
          />
        </div>

        <textarea 
          name="message" 
          className="form-input" 
          placeholder="Your Message" 
          required
          value={formData.message}
          onChange={handleChange}
          data-form-input
        ></textarea>

        <button 
          className="form-btn" 
          type="submit" 
          disabled={!isValid}
          data-form-btn
        >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
}; 