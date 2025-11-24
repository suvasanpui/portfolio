"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = fd.get('name') as string;
    const email = fd.get('email') as string;
    const message = fd.get('message') as string;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thanks — your message was sent!');
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-sm -z-10"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information Card */}
            <div className="relative group">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-5"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    I'm available for freelance work and open to interesting projects. Feel free to reach out using the form or via the details below.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800 font-semibold">suvasanpui74@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800 font-semibold">+91 7479108631</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-800 font-semibold">Kolkata, WB, India, 743375</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { name: 'Twitter', icon: 'M22 5.92c-.63.28-1.3.47-2 .55a3.48 3.48 0 001.53-1.92 6.86 6.86 0 01-2.2.84 3.43 3.43 0 00-5.86 3.12A9.72 9.72 0 013 4.87a3.43 3.43 0 001.06 4.58 3.39 3.39 0 01-1.55-.43v.04a3.43 3.43 0 002.75 3.36 3.48 3.48 0 01-1.54.06 3.43 3.43 0 003.2 2.38A6.87 6.87 0 012 19.54 9.7 9.7 0 008.29 21c5.55 0 8.58-4.6 8.58-8.58 0-.13 0-.25-.01-.38A6.14 6.14 0 0022 5.92z', color: 'bg-blue-400' , path: '#' },
                      { name: 'GitHub', icon: 'M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.5.12-3.12 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z', color: 'bg-gray-800', path: 'https://github.com/suvasanpui' },
                      { name: 'LinkedIn', icon: 'M4.98 3.5a2.88 2.88 0 11-.01 5.76 2.88 2.88 0 01.01-5.76zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z', color: 'bg-blue-600' , path:'https://linkedin.com/in/suva-sanpui'}
                    ].map((social, index) => (
                      <a
                        key={social.name}
                        href={social.path}
                        aria-label={social.name}
                        className={`w-12 h-12 ${social.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 hover:shadow-lg`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-300 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-300 rounded-bl-2xl"></div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="relative group">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-5"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Send a Message</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-purple-300 rounded-tl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-pink-300 rounded-br-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;