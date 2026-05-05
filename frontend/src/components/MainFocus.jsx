import React from 'react';

const MainFocus = () => {
  return (
    <section className="container mx-auto px-10 py-20">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-16">
        Main Focus / <br /> Mission Statement
      </h2>
      
      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex items-start gap-8 w-full md:w-1/2">
          <span className="text-[140px] font-black text-[#F2F2F2] leading-none select-none">
            1
          </span>
          <p className="text-[#333333] text-lg leading-relaxed pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex items-start gap-8 w-full md:w-1/2">
          <span className="text-[140px] font-black text-[#F2F2F2] leading-none select-none">
            2
          </span>
          <p className="text-[#333333] text-lg leading-relaxed pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MainFocus;