import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Contacts = () => {
  return (
    <div className="container mx-auto px-10 py-20 min-h-screen">
      <h2 className="text-6xl font-light text-[#BDBDBD] uppercase mb-16">
        Contact <br /> 
        <span className="text-[#333333] font-bold">Information</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-20">
        
        <div className="w-full md:w-1/3 space-y-12">
          <div>
            <h4 className="text-xl font-bold text-[#333333] mb-4">Main Office</h4>
            <p className="text-gray-500 font-light leading-relaxed">
              1234 Sample Street <br />
              Austin Texas 78704
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#333333] mb-2">Phone</h4>
            <p className="text-gray-500 font-light">512.333.2222</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#333333] mb-2">Email</h4>
            <p className="text-gray-500 font-light">sampleemail@gmail.com</p>
          </div>

          <HashLink 
          smooth 
          to="/#contact-form" 
          className="bg-[#333333] text-white px-10 py-6 text-[12px] tracking-[4px] uppercase hover:bg-black transition-all inline-block"
        >
          Contact Us
        </HashLink>
        </div>

        <div className="w-full md:w-2/3 h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.329821815561!2d-97.7554!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAxLjkiTiA5N8KwNDUnMTkuNCJX!5e0!3m2!1sen!2sus!4v1625654321000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
            ></iframe>
</div>

      </div>
    </div>
  );
};

export default Contacts;