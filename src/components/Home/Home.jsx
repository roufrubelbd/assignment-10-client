import React from "react";
import Slider from "../Slider/Slider";
import LatestAndOthers from "../LatestAndOthers/LatestAndOthers";
import About from "../About";
import Privacy from "../Privacy";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Slider />
      <LatestAndOthers />
      <About />
      <Privacy />
    </div>
  );
};

export default Home;
