import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold">John Doe</h1>
        <p className="text-2xl mt-4">Software Developer & Creative Technologist</p>
        <a href="#contact" className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
