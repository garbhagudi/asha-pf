import React from "react";
import Photos from "./gallery/photos";
import Videos from "./gallery/videos";

const Gallery = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap bg-black">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row font-qs"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-blue-500 text-md"
                    : "text-white bg-black text-md")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Videos
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-blue-500 text-md"
                    : "text-white bg-black text-md")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Pictures
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded text-gray-400">
            <div className="container px-4 py-5 flex-auto mx-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Videos />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Photos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function GalleryRender() {
  return (
    <>
      <Gallery color="lightBlue" />
    </>
  );
}
