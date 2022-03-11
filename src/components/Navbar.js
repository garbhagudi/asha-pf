import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Her Journey", href: "/journey" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <header className="bg-blue-500 sticky top-0 z-50 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-3 flex items-center justify-between border-b border-white lg:border-none ">
          <div className="flex items-center">
            <NavLink to="/">
              <span className="sr-only">Dr Asha S Vijay - Logo</span>
              <svg
                className="w-16 h-16"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 821.33 821.33"
                fill="#FFF"
              >
                <path
                  d="M676.42,576.63C741,472.86,805.2,369.63,869.81,265.75l-121.1-.14c-3.91,0-7.05,3.78-7.66,4.74-6.94,11.07-62.15,99.7-64.77,103.78-3.75-6.23-57.16-92.71-65.21-105.47-.71-1.13-1.84-2.76-4-2.76-9.9,0-18.69-.13-29.09-.13,32.91,53,65.48,105.49,98.29,158.34,5.81-9,70.71-114.16,79.66-129.18a5.29,5.29,0,0,1,5.34-2.95c19.13.11,59.35.06,60.77.06L676.35,527.76,513.91,264.89,321.39,576.3H446l67.82-108.48,67.77,108.51h29.77L513.82,418.08c-1.94,3.07-3.47,5.4-4.91,7.78-5.06,8.34-67.24,109.55-72.91,118.91-2.86,4.72-5.75,6.86-12.23,7.17-14.06.66-51-.23-57.17-.23L513.81,315.33Z"
                  transform="translate(-184.61 -10.28)"
                />
                <path
                  d="M595.28,10.28c-226.81,0-410.67,183.86-410.67,410.66S368.47,831.61,595.28,831.61s410.66-183.86,410.66-410.67S822.08,10.28,595.28,10.28Zm0,794.69c-212.1,0-384-171.93-384-384s171.93-384,384-384,384,171.93,384,384S807.37,805,595.28,805Z"
                  transform="translate(-184.61 -10.28)"
                />
              </svg>
            </NavLink>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="font-medium text-white font-qs  hover:border-b hover:border-white transition-all duration-500"
                  activeClassName="tracking-widest border-b-2 border-white"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 text-3xl text-white font-brush">
            Dr. Asha S Vijay
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden ">
          {navigation.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="font-medium text-white font-qs text-xs sm:text-sm md:text-md  transition-all duration-500"
              activeClassName="tracking-widest border-b-2 border-white"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
