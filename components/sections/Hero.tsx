import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 bg-gradient-to-br from-blue-50 to-white">
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl font-bold leading-snug text-gray-800">
          Hi, I'm <span className="text-blue-600">Suva</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-lg">
          A Full Stack Web Developer specializing in creating dynamic, responsive, and
          high-performance applications with modern technologies.
        </p>

        <div className="flex space-x-4 pt-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="rounded-full shadow-xl p-2 bg-white">
          <Image
            src="/suva.png"
            alt="Profile Image"
            width={380}
            height={380}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
