import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-14 mt-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-start">
            <div className="flex flex-col leading-none font-black text-4xl mb-2">
              <span className="border-t-2 border-white pt-1">D</span>
              <span>P</span>
            </div>
            <span className="text-[10px] tracking-[0.4em] uppercase font-light">
              Digital <br/> Project
            </span>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Information</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li className="hover:text-gray-400 cursor-pointer transition-colors">Main</li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">Gallery</li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">Projects</li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">Certifications</li>
              <li className="hover:text-gray-400 cursor-pointer transition-colors">Contacts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contacts</h4>
            <ul className="flex flex-col gap-6 text-sm font-light">
              <li className="flex items-start gap-3">
                <span className="text-gray-400">📍</span>
                <span>1234 Sample Street <br/> Austin TX 78704</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400">📞</span>
                <span>512.333.2222</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gray-400">✉️</span>
                <span>sampleemail@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Social Media</h4>
            <div className="flex gap-8 text-xl">
              <a href="#" className="hover:text-gray-400 transition-colors">f</a>
              <a href="#" className="hover:text-gray-400 transition-colors">t</a>
              <a href="#" className="hover:text-gray-400 transition-colors">in</a>
              <a href="#" className="hover:text-gray-400 transition-colors">p</a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-xs text-gray-500 font-light tracking-widest">
          © 2026 by Bohdan Borysenko
        </div>
      </div>
    </footer>
  );
};

export default Footer;