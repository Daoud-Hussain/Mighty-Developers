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
        buttonName="About Us"
      />
    </>
  );
};

export default Home;
