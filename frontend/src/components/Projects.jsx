import React from 'react';

const Projects = () => {
  return (
    <section className="container mx-auto px-10 py-20">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-12">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div className="md:col-span-2 relative group cursor-pointer overflow-hidden">
          <img src="/images/project-1.svg" alt="Project 1" className="w-full h-[255px] object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-10">
             <h3 className="text-4xl font-bold uppercase mb-4 text-center">Sample <br/> Project</h3>
             <span className="text-[12px] tracking-[4px]">VIEW MORE →</span>
          </div>
        </div>

        <div className="relative group cursor-pointer overflow-hidden">
          <img src="/images/project-2.svg" alt="Project 2" className="w-full h-[255px] object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
             <span className="text-[12px] tracking-[4px]">VIEW MORE →</span>
          </div>
        </div>

        <div className="relative group cursor-pointer overflow-hidden">
          <img src="/images/project-3.svg" alt="Project 3" className="w-full h-[255px] object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
             <span className="text-[12px] tracking-[4px]">VIEW MORE →</span>
          </div>
        </div>

        <div className="relative group cursor-pointer overflow-hidden">
          <img src="/images/project-4.svg" alt="Project 4" className="w-full h-[255px] object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
             <span className="text-[12px] tracking-[4px]">VIEW MORE →</span>
          </div>
        </div>

        <div className="md:col-span-3 relative group cursor-pointer overflow-hidden">
          <img src="/images/project-5.svg" alt="Project 5" className="w-full h-[255px] object-cover" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
             <span className="text-[12px] tracking-[4px]">VIEW MORE →</span>
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-[#333333] text-white px-10 py-6 text-[12px] tracking-[4px] uppercase hover:bg-black transition-all">
          All Projects <span className="ml-4">→</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;