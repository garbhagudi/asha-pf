/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-black">
      <h2 className="text-center text-white tracking-widest uppercase font-semibold bg-black text-lg py-8">
        Testimonials
      </h2>
      <div class="flex flex-col md:flex-row gap-4 md:mb-0 flex-between items-center mx-auto bg-black pb-16">
        <div class="bg-black max-w-md shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>
            In my view Dr Asha madam is very committed and dedicated to her work
            and patients. Madams unique Holistic approach in her treatment & the
            latest technology available with affordable cost has given her rich
            dividends. She has more than 7000 couples happy with their babies. I
            pray that she continues to serve such couples tirelessly AMEN!!
            <span class="font-bold text-blue-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
                alt="dummy"
                class="ml-2 h-4 w-4 rounded-full"
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm">Jayaram R</span>
              <span class="text-gray-400 text-xs flex items-center">
                General Manager
              </span>
            </div>
          </div>
        </div>
        <div class="bg-black max-w-md shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>I personally
            know Dr Asha S Viijay as a founder and medical director of
            GarbhaGudi group companies. She is very fucused on her dream of
            creating awareness to the general public regaring infertility issues
            and its treatments. Thankfull to the doctor and her team.
            <span class="font-bold text-blue-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <img
              src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
              alt="dummy"
              class="ml-2 h-4 w-4 rounded-full"
            />
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm">
                Shiva Shastry
              </span>
              <span class="text-gray-400 text-xs flex items-center">
                Founder and CEO - Elka Pvt Ltd
              </span>
            </div>
          </div>
        </div>
        <div class="bg-black max-w-md shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>
            Madams unique Holistic approach in her treatment & the latest
            technology available with affordable cost has given her rich
            dividends. She is very fucused on her dream of creating awareness to
            the general public regaring infertility issues and its treatments.
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
                alt="dummy"
                class="ml-2 h-4 w-4 rounded-full"
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm ">
                Megha Bajaj
              </span>
              <span class="text-gray-400 text-xs flex items-center">
                Writer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
