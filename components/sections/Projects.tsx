import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image src="/project1.jpg" alt="Project 1" width={"500"} height={"300"} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image src="/project2.jpg" alt="Project 2" width={"500"} height={"300"} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-400">Sed et est vitae metus feugiat pharetra.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image src="/project3.jpg" alt="Project 3" width={"500"} height={"300"} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-400">Phasellus ultrices, turpis nec commodo egestas.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
