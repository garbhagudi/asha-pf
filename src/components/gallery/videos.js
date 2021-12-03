import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./ytlite.css";

const Videos = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="tc4NcHjdxqg" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -1: All you want to know about PCOS and it's impact on
              fertility.
            </span>
          </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="FYo4I4dxym0" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -2: Male Infertility An Overview Of Causes
            </span>
          </div>
        </div>
      </section>
      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="TLoFZqBVw_E" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -3: Painful periods(Dysmenorrhoea) and Infertility.
            </span>
          </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="2ik83PqCL6I" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -4: Causes and Solutions for Multiple IUI Failure
            </span>
          </div>
        </div>
      </section>
      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="hZvphnF-tBk" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -5: Causes and Solutions for Multiple IVF Failure
            </span>
          </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0 text-center">
            <div>
              <LiteYouTubeEmbed id="VxWns8mqKzc" poster="maxresdefault" />
            </div>
            <span className="text-xl font-qs">
              FertiliTEA -6: Male Infertility and its Treatments
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
