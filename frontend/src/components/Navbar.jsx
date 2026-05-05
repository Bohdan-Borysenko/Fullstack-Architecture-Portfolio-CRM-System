import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
  const getLinkStyle = ({ isActive }) => 
    isActive 
      ? "cursor-pointer border-t border-b border-black py-1 transition-all uppercase" 
      : "cursor-pointer hover:border-b hover:border-black py-1 transition-all uppercase"; 

  return (
    <nav className="container mx-auto px-10 py-8 flex justify-between items-center bg-white">
      <NavLink to="/" className="flex items-center">
        <div className="flex flex-col leading-none font-black text-2xl">
          <span className="border-t-2 border-black pt-1">D</span>
          <span>P</span>
        </div>
        <span className="ml-3 text-sm font-light tracking-[0.3em] uppercase">Digital <br/> Project</span>
      </NavLink>

      <ul className="hidden md:flex space-x-14 text-[12px] tracking-[0.2em] font-light">
        <li className="py-1">
          <NavLink to="/" className={getLinkStyle}>Main</NavLink>
        </li>

        <li className="py-1">
          <NavLink to="/gallery" className={getLinkStyle}>Gallery</NavLink>
        </li>

        <li className="py-1">
          <NavLink to="/projects" className={getLinkStyle}>Projects</NavLink>
        </li>

        <li className="cursor-pointer hover:border-b hover:border-black py-1 transition-all">
            CERTIFICATIONS
        </li>
        
        <li className="py-1">
          <NavLink to="/contacts" className={getLinkStyle}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;