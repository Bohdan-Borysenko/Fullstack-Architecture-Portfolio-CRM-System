import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-10 py-20 mt-10">
      <div className="bg-[#FBFBFB] p-8 md:p-14 flex flex-col md:flex-row gap-12">
        
        <div className="w-full md:w-1/2 flex gap-4">
          <div className="flex flex-col gap-4 mt-8">
            <img 
              src="/images/About1.svg" 
              alt="Architecture view 1" 
              className="w-full h-[260px] object-cover shadow-sm"
            />
            <img 
              src="/images/About2.svg" 
              alt="Architecture view 3" 
              className="w-full h-[140px] object-cover shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <img 
              src="/images/About3.svg" 
              alt="Architecture view 2" 
              className="w-full h-[340px] object-cover shadow-sm mt-16"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-6">
            About
          </h2>
          <p className="text-[#333333] leading-relaxed font-light mb-12 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>
          
          <button className="w-fit bg-white px-10 py-6 text-[12px] tracking-[4px] uppercase border border-gray-100 hover:bg-gray-50 transition-all flex items-center shadow-sm">
            Read More <span className="ml-4">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;