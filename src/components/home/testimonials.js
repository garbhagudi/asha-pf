import React from "react";

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-center text-white tracking-widest uppercase font-semibold bg-black text-lg pb-8">
        Testimonials
      </h2>
      <div class="w-full flex flex-col md:flex-row gap-4 md:mb-0 flex-between items-center p-8 bg-black pb-16">
        <div class="bg-black w-96 shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            obcaecati rerum. Corrupti beatae neque aspernatur?
            <span class="font-bold text-blue-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
                alt="dummy"
                class="ml-2 h-4 w-4"
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm">
                Lorem, ipsum.
              </span>
              <span class="text-gray-400 text-xs flex items-center">
                Lorem ipsum dolor sit.
              </span>
            </div>
          </div>
        </div>
        <div class="bg-black w-96 shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dolorem architecto illum quaerat est. Rerum iure voluptatem, quae
            explicabo quidem ea reprehenderit quibusdam non laboriosam.
            <span class="font-bold text-blue-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <img
              src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
              alt="dummy"
              class="ml-2 h-4 w-4"
            />
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm">
                Lorem, ipsum.
              </span>
              <span class="text-gray-400 text-xs flex items-center">
                Lorem ipsum dolor sit.
              </span>
            </div>
          </div>
        </div>
        <div class="bg-black w-96 shadow-lg mx-auto rounded-xl p-4 border">
          <p class="text-gray-400">
            <span class="font-bold text-blue-500 text-lg">“</span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            repellendus eaque officia! Harum, officiis ipsa?
            <span class="font-bold text-indigo-500 text-lg">”</span>
          </p>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                src="https://res.cloudinary.com/riotpixel/image/upload/v1629367935/Asha-pf/dummy-profile-pic_eyvxl0.png"
                alt="dummy"
                class="ml-2 h-4 w-4"
              />
            </a>
            <div class="flex flex-col ml-2 justify-between">
              <span class="font-semibold text-blue-500 text-sm">
                Lorem, ipsum.
              </span>
              <span class="text-gray-400 text-xs flex items-center">
                Lorem ipsum dolor sit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
