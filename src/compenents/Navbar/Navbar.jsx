import React from "react";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-white font-bold text-2xl">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span>TCJ-SPACE</span>
        </div>
        <div className="text-white">
          <ul className="flex space-x-4">
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#technology">Technologie</a>
            </li>
            <li>
              <a href="#galaxy">Galaxie</a>
            </li>
            <li>
              <a href="#satelite">Satelite</a>
            </li>
          </ul>
        </div>
        <div className="text-white border-2 border-white rounded-full p-2 hover:bg-blue-700">
          <button>Connexion</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
