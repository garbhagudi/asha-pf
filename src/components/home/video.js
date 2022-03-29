import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "../gallery/ytlite.css";

const Video = () => {
  return (
    <div className="bg-black pb-10 px-4 sm:px-0">
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
        <LiteYouTubeEmbed id="7oVMKMON9Ks" poster="maxresdefault" />
      </div>
    </div>
  );
};

export default Video;
