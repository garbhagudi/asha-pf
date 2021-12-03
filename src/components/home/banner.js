import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <header className="bg-black ">
        <div className="container flex flex-col px-6 pt-10 pb-16 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-300 md:text-4xl">
                A fertility expert with a higer Purpose...
              </h1>
              <p className="mt-4 text-gray-400 font-rw">
                A renowned Gynaecologist, Senior Fertility Expert, Founder and
                Medical Director of GarbhaGudi, a chain of Infertility Treatment
                Center across bangalore. Dean and Scientific Director of GGIRHR,
                a Premier Institute specializing in Training in Infertility.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/about"
                  className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
                >
                  Read More!
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 md:w-1/2 rounded-xl">
            <img
              className="object-contain w-full h-full max-w-2xl rounded-xl"
              src="https://res.cloudinary.com/garbhagudi/image/upload/ar_16:9,c_crop,x_0,y_107/v1638445328/Dr%20ASV/images/gallery-b5_ezjcjg_vlng8p.jpg"
              alt="dr-asha"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
