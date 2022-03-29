import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./ytlite.css";

const Data = [
  {
    id: 1,
    title:
      "FertiliTEA -1: All you want to know about PCOS and it's impact on fertility.",
    videoId: "tc4NcHjdxqg",
  },
  {
    id: 2,
    title: "FertiliTEA -2: Male Infertility An Overview Of Causes",
    videoId: "FYo4I4dxym0",
  },
  {
    id: 3,
    title: "FertiliTEA -3: Painful periods(Dysmenorrhoea) and Infertility.",
    videoId: "TLoFZqBVw_E",
  },
  {
    id: 4,
    title: "FertiliTEA -4: Causes and Solutions for Multiple IUI Failure",
    videoId: "2ik83PqCL6I",
  },
  {
    id: 5,
    title: "FertiliTEA -5: Causes and Solutions for Multiple IVF Failure",
    videoId: "hZvphnF-tBk",
  },
  {
    id: 6,
    title: "FertiliTEA -6: Male Infertility and its Treatments",
    videoId: "VxWns8mqKzc",
  },
];

const Videos = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-8 px-4 sm:px-2">
        <div className="flex flex-wrap -mx-4">
          {Data.map((item) => (
            <div
              className="md:w-1/2 px-0 sm:p-3 mb-8 md:mb-0 text-center"
              key={item.id}
            >
              <div className="rounded-2xl overflow-hidden">
                <LiteYouTubeEmbed id={item.videoId} poster="maxresdefault" />
              </div>
              <span className="text-xl font-qs">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Videos;
