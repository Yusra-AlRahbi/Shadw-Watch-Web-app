import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
    return (
      <header className="bg-gray-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">SHADOW WATCH</h1>
        <nav>
          <ul className="hidden sm:flex gap-4">
            <li><a href="#" className="hover:text-yellow-400">Map</a></li>
            <li><a href="#" className="hover:text-yellow-400">Reports</a></li>
          </ul>
          <div className="sm:hidden">
          <button className="text-white"
          onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="sm:hidden absolute top-16 right-6 bg-gray-700 text-white rounded-md shadow-md p-4">
            <li><a href="#" className="block py-2 px-4 hover:bg-yellow-400">Map</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-yellow-400">Reports</a></li>
          </ul>
        )}
        </nav>
      </header>
    );
  };
  
  export default Header;