import React from "react";
import homeImg from "./Images/home-img.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        value="Home"
        imgSrc= {homeImg}
        buttonClick="/about"
        button1Name="About Us"
        button2Name="Services"
      />
    </>
  );
};

export default Home;
