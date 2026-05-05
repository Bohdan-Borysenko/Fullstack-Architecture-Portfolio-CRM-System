import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto px-10 py-20 min-h-[600px]">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-12">
        Photo <br /> 
        <span className="text-[#333333] font-bold">Gallery</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
            <img 
              src={`/images/Gallery-${(index % 10) + 1}.jpg`} 
              alt={`Gallery item ${index}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;