import React from "react";
import homeImg from "./Images/home-img.png";
import Common from "./Common";
import aboutImg from "./Images/about-img.jpg";

const About = () => {
  return (
    <Common
      value="About"
      imgSrc={aboutImg}
      buttonClick="/services"
      buttonName="Get Started"
    />
  );
};

export default About;
