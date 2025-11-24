import React from 'react';

interface EducationItem {
  id: string;
  degree: string;
  school: string;
  dateRange?: string;
  description?: string;
  location?: string;
  gpa?: string;
  honors?: string[];
}

interface EducationProps {
  items?: EducationItem[];
}

const educationItems: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Information Technology",
    school: "Budge Budge Institute of Technology",
    dateRange: "2022 – 2025",
    location: "Kolkata, West Bengal, India",
    description:
      "Focused on core computer science fundamentals, software development, and real-world application building. Participated in technical projects involving full-stack development and problem-solving.",
    gpa: "7.6 CGPA"
  },
  {
    id: "edu-2",
    degree: "Diploma in Computer Science & Technology",
    school: "Murarai Government Polytechnic",
    dateRange: "2019 – 2022",
    location: "Birbhum, West Bengal, India",
    description:
      "Completed diploma training in programming, database management, system design, and computer fundamentals. Engaged in hands-on project work and practical technology exploration.",
    gpa: "8.4 CGPA"
  }
];
const defaultItems = educationItems;

const Education: React.FC<EducationProps> = ({ items = defaultItems }) => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-sm -z-10"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My academic journey and continuous pursuit of knowledge in the ever-evolving field of technology
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-5 group-hover:opacity-10"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group-hover:border-blue-200 h-full">
                  
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {item.degree}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mt-1">{item.school}</p>
                      </div>
                    </div>
                    
                    {/* Date Badge */}
                    {item.dateRange && (
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                        {item.dateRange}
                      </div>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {item.location && (
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-full px-4 py-2 text-sm">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </div>
                    )}
                    {item.gpa && (
                      <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-full px-4 py-2 text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        GPA: {item.gpa}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg border-l-4 border-blue-200 pl-4">
                      {item.description}
                    </p>
                  )}

                  {/* Honors & Achievements */}
                  {item.honors && item.honors.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        Honors & Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.honors.map((honor, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 text-amber-700 rounded-xl text-sm font-medium border border-amber-200 hover:shadow-md transition-shadow duration-300"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-300 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;