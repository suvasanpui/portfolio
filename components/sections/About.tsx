"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      className="bg-blue-50 text-gray-800 py-16 px-4 md:px-16"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/suva.png"
              alt="About Me"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-gray-700">
            I am a passionate Full Stack Developer specializing in building
            modern, scalable, and user-focused web applications. With a strong
            foundation in JavaScript, React.js, Next.js, Node.js, and MongoDB, I
            enjoy transforming ideas into responsive, intuitive, and
            high-performance digital experiences. I have experience working on
            real-world projects with cross-functional teams, contributing to
            feature development, code optimization, debugging, and performance
            improvements. My work spans across EdTech, eCommerce, and system
            applications, where I’ve implemented role-based authentication,
            real-time data features, and secure backend integrations.<br></br>
            I’m continuously exploring new technologies, solving challenging
            problems, and improving my skills through competitive programming
            and real project execution
          </p>

          <p className="text-gray-700">
            I believe in writing clean code, continuous learning, and building
            products that make an impact.
          </p>
          <a href="/resume.pdf" download="Suva-Sanpui-CV.pdf">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-max hover:bg-orange-600 transition">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
