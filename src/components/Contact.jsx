import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id', // Replace with your Email.js service ID
      'your_template_id', // Replace with your Email.js template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'your_user_id' // Replace with your Email.js user ID
    )
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className='w-full lg:mt-32 lg:mb-32'>
      <div className='max-w-screen-xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-10 
      hover:bg-violet-500 rounded-2xl transition-all duration-[300ms] ease-in-out'>
        {/* Left div */}
        <div className='lg:basis-1/2'>
          <h1 className='text-[12vw] text-center lg:text-start lg:text-[5vw] font-medium mb-6 lg:mb-10'>
            Contact <span className='text-orange-500'>Us</span>
          </h1>
          <p className='text-[4vw] lg:text-[2vw] mb-6 lg:mb-10'>
            We're here to help you with your needs. Feel free to reach out with any questions or inquiries.
          </p>
        </div>

        {/* Right div */}
        <div className='lg:basis-1/2 flex flex-col gap-6 lg:gap-10 items-center bg-zinc-700 p-4 lg:p-5 rounded-2xl hover:bg-zinc-600 transition-all duration-[300ms] ease-in-out'>
          <form className='w-full' onSubmit={sendEmail}>
            <label htmlFor='name' className='text-lg lg:text-2xl text-orange-400'>Name</label>
            <input
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='border-2 p-2 mb-5 rounded-xl w-full focus:outline-none text-black bg-white placeholder-gray-500 text-md lg:text-lg'
              type='text'
              placeholder='Your Name'
              required
            />

            <label htmlFor='email' className='text-lg lg:text-2xl text-orange-400'>Email</label>
            <input
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='border-2 p-2 mb-5 rounded-xl w-full focus:outline-none text-black bg-white placeholder-gray-500 text-md lg:text-lg'
              type='email'
              placeholder='Your Email'
              required
            />

            <label htmlFor='message' className='text-lg lg:text-2xl text-orange-400'>Message</label>
            <textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='p-2 border-2 rounded-xl w-full focus:outline-none text-black bg-white placeholder-gray-500 text-md lg:text-lg'
              placeholder='Your Message'
              rows={5}
              required
            />

            <button type='submit' className='w-full lg:w-1/2 mt-5 bg-zinc-800 text-white rounded-2xl py-3 hover:bg-zinc-900 transition-all duration-[300ms] ease-in-out'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
