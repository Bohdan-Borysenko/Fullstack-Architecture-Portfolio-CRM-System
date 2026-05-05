import React, { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import MainFocus from './components/MainFocus';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './pages/Gallery'; 
import OurProjects from './pages/OurProjects'; 
import Contacts from './pages/Contacts';

const sliderData = [
  {
    id: 1,
    title1: "Project",
    title2: "Lorum",
    image: "/images/mainBar.svg"
  },
  {
    id: 2,
    title1: "Modern",
    title2: "Architecture",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    title1: "Industrial",
    title2: "Design",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={
          <>
            <main className="container mx-auto px-10 pt-10">
              <section className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/3">
                  <h1 className="text-6xl font-light text-[#BDBDBD] uppercase leading-tight">
                    {sliderData[current].title1} <br />
                    <span className="font-bold text-[#333333]">{sliderData[current].title2}</span>
                  </h1>
                  
                  <div className="flex items-center space-x-4 mt-16">
                    <button onClick={prevSlide} className="p-4 border border-[#F2F2F2] hover:bg-[#F9F9F9] text-gray-400">←</button>
                    <button onClick={nextSlide} className="p-4 border border-[#F2F2F2] hover:bg-[#F9F9F9] text-gray-400">→</button>
                  </div>

                  <div className="mt-10 text-gray-300 text-5xl">
                    0{current + 1} / <span className="text-gray-200 text-sm ml-2">0{length}</span>
                  </div>
                </div>

                <div className="relative w-full md:w-2/3 mt-10 md:mt-0 flex justify-end">
                  <img 
                    src={sliderData[current].image} 
                    alt="Architecture" 
                    className="w-[90%] h-[829px] object-cover transition-opacity duration-500"
                  />
                  <button className="absolute bottom-0 left-0 bg-white px-10 py-5 text-[12px] tracking-[4px] uppercase hover:bg-gray-100 transition-all flex items-center">
                    View Project <span className="ml-4">→</span>
                  </button>
                </div>
              </section>
            </main>

            <About />
            <MainFocus />
            <Projects />
            <Contact />
          </>
        } />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div> 
  );
}

export default App;