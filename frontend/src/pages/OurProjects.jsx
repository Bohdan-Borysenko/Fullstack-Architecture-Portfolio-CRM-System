import React from 'react';

const OurProjects = () => {
  const projects = [
    { id: 1, title: 'Sample Project 1', image: '/images/OurProjects1.jpg' },
    { id: 2, title: 'Sample Project 2', image: '/images/OurProjects2.jpg' },
    { id: 3, title: 'Sample Project 3', image: '/images/OurProjects3.jpg' },
  ];

  return (
    <div className="container mx-auto px-10 py-20 min-h-screen">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-16">
        Our <br /> 
        <span className="text-[#333333] font-bold">Projects</span>
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div key={project.id} className="bg-[#FBFBFB] flex flex-col md:flex-row items-center gap-10 p-8 group">
            <div className="w-full md:w-2/3 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/3 space-y-6">
              <h3 className="text-4xl font-light text-[#BDBDBD] uppercase leading-tight">
                {project.title}
              </h3>
              <p className="text-[#333333] font-light leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <button className="bg-white border border-[#F2F2F2] px-8 py-4 text-[12px] tracking-[4px] uppercase hover:bg-black hover:text-white transition-all">
                View More →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-6 mt-20">
        <div className="text-gray-300 text-4xl">
          01 / <span className="text-gray-200 text-sm ml-2">05</span>
        </div>
        <div className="flex space-x-2">
          <button className="p-4 border border-[#F2F2F2] hover:bg-[#F9F9F9] text-gray-400">←</button>
          <button className="p-4 border border-[#F2F2F2] hover:bg-[#F9F9F9] text-gray-400">→</button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;