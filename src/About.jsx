import React from "react";
import homeImg from "./Images/home-img.png";
import Common from "./Common";
import aboutImg from "./Images/about-img.jpg";

const About = () => {
  return (
    <Common
      value="About"
      imgSrc={aboutImg}
      button1Click="/services"
      button2Click="/contact"
      button1Name="Services"
      button2Name="Contact Us"
    />
  );
};

export default About;
