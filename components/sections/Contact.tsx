import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="bg-gray-800 rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-gray-700 text-white rounded-lg py-2 px-4"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-gray-700 text-white rounded-lg py-2 px-4"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-gray-700 text-white rounded-lg py-2 px-4"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
