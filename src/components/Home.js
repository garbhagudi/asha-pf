import React from "react";
import Banner from "./home/banner";
import Testimonials from "./home/testimonials";
import Breakthrough from "./home/breakthrough";
import Video from "./home/video";
const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Video />
      <Breakthrough />
    </div>
  );
};

export default Home;
