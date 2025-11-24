import React from 'react';
import Stats from './Stats';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  description: string[];
  technologies: string[];
  isRemote?: boolean;
  achievements?: string[];
  companyLogo?: string;
}

interface WorkExperienceProps {
  experiences: ExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Work Journey
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tracing my professional path through innovation, challenges, and meaningful contributions across diverse projects and teams.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 h-full">
                
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                        {exp.isRemote && (
                          <span className="ml-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            Remote
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  {exp.duration && (
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      {exp.duration}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <span className="w-3 h-0.5 bg-blue-500 rounded-full"></span>
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <span className="w-3 h-0.5 bg-green-500 rounded-full"></span>
                      Impact & Results
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                        >
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-green-800 font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <span className="w-3 h-0.5 bg-purple-500 rounded-full"></span>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-2xl"></div>
              </div>
            </div>
          ))}
        </div>

       <div className=""> <Stats/></div>
      </div>
    </section>
  );
};

const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Vittam Smart Solutions",
    location: "Bangalore, India",
    period: "Mar 2025 – Oct 2025",
    duration: "8 months",
    isRemote: false,
    description: [
      "Developed and maintained full-stack web application features using JavaScript, React, Node.js, Express.js and MongoDB",
      "Collaborated with the development team through internal ticketing system and agile processes",
      "Contributed to project planning, debugging, optimization, and release cycles",
      "Ensured code quality, security, and compliance with organizational standards"
    ],
    achievements: [
      "Improved feature delivery efficiency through streamlined debugging processes",
      "Enhanced platform stability with optimized backend operations",
      "Supported successful deployment of scalable product modules"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "JavaScript", "Express.js", "TypeScript"]
  },
  {
    id: "2",
    title: "Software Developer",
    company: "AcharyaG",
    location: "Remote",
    period: "Dec 2024 – May 2025",
    duration: "6 months",
    isRemote: true,
    description: [
      "Developed and maintained a scalable React-based EdTech platform integrated with Firebase backend services",
      "Worked with cross-functional teams to design and deploy user-centric features and fix production issues",
      "Implemented role-based authentication and real-time data updates using Firebase services",
      "Improved system performance and security with optimized data handling and processing"
    ],
    achievements: [
      "Enabled platform scalability through optimized Firebase data workflows",
      "Reduced system latency and improved user operations",
      "Successfully supported three role-based dashboards with integrated features"
    ],
    technologies: ["React.js", "Firebase", "Firestore", "Cloud Functions", "Tailwind CSS", "Authentication", "JavaScript"]
  }
];
const sampleExperiences: ExperienceItem[] = experiences;

export default function WorkExperiencePage() {
  return <WorkExperience experiences={sampleExperiences} />;
}