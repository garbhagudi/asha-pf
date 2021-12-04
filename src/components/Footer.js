/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-black w-full py-8">
        <div class="max-w-screen-xl mx-auto px-4">
          <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between font-qs">
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                href="https://ggirhr.com"
                target="_blank"
                rel="noreferrer"
              >
                GGIRHR
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                href="https://garbhagudi.com"
                target="_blank"
                rel="noreferrer"
              >
                GarbhaGudi
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                href="https://twitter.com/varsparbhar"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                href="https://www.linkedin.com/in/asha-s-vijay-a51870175/?originalSubdomain=in"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
