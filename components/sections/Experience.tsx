import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-gray-400">ABC Company | 2020 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
              <li>Implemented responsive designs to ensure a seamless user experience across devices.</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold">Junior Developer</h3>
            <p className="text-gray-400">XYZ Inc. | 2018 - 2020</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Assisted in the development of new features for the company&apos;s flagship product.</li>
              <li>Learned and applied best practices in software development.</li>
              <li>Provided support to senior developers and participated in code reviews.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
