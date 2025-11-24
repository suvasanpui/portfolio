import Image from 'next/image';

const Projects = () => {
  const projects = [
  {
    id: 1,
    title: "AcharyaG Edutech Platform",
    description:
      "A full-stack EdTech platform supporting Students, Teachers, and Career Counselors with real-time communication, role-based dashboards, and mentor discovery.",
    image: "/acharyag.png",
    tags: ["React.js", "Firebase", "Firestore", "Cloud Functions", "Tailwind CSS", "Authentication"],
    liveUrl: "https://acharyag.in/",
    githubUrl: "#",
    featured: true
  },
  
  {
  id: 2,
  title: "E-Commerce (NIRVANA E-BOOK)",
  description:
    "A feature-rich e-commerce platform designed for selling digital books with secure user authentication, Includes product browsing, cart & wishlist management, order handling.",
  image: "/nirvana.png",
  tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase Auth", "Phonepe Integration"],
  liveUrl: "https://nirvanaebook.in/",
  githubUrl: "#",
  featured: true
},
 
  {
    id: 3,
    title: "Voting System",
    description:
      "Secure online voting system with role-based authentication for voters and administrators, real-time result updates, and optimized MongoDB queries for performance.",
    image: "/vs.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "REST API"],
    liveUrl: "https://vote-now-71kj-ui.vercel.app/dashboard",
    githubUrl: "https://github.com/suvasanpui",
    featured: false
  }
];


  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-sm -z-10"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated selection of my work showcasing innovative solutions, clean code, and exceptional user experiences across various technologies and domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-5 group-hover:opacity-10"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    
                     <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-4">
                      <div className="flex gap-2">
                        <a 
                          href={project.liveUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          aria-label="View live project"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          aria-label="View source code"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.5.12-3.12 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 border border-gray-200"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-300 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-300 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Projects;