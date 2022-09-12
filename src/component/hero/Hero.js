import React from "react";
import "./Hero.css";
import { Parallax } from "react-parallax";
import bg1 from "../images/bg1.jpg";
import ber from "../images/ber.png";
const Hero = () => {
  return (
    <div className="hero">
      <Parallax  bgImage={bg1} bgImageAlt="the cat" strength={400}>
        <img className="img" src={ber} alt="" />
        <div style={{ height: "500px" }} />
      </Parallax>
    </div>
  );
};

export default Hero;
