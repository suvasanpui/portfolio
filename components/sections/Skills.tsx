import React from 'react';

const Skills = () => {
  const skills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 text-white py-2 px-4 rounded-full m-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
