import React from "react";
import homeImg from "./Images/home-img.png";

const Home = () => {
  return (
    <div className="container-fluid" id="header">
      <div className="row">
        <div className="col-10 mx-auto ">
          <div className="row d-flex flex-row align-items-center mt-5">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className="mainHeading">
                Grow your business with <strong>Mighty Developers</strong>
              </h1>
              <h2 className="my-3 bio">We're the team of experienced developers</h2>
              <div className="my-3">
                <button class="button-get-started" role="button">
                    Get Started
                </button>
              </div>
            </div>
            <div className="col-md-6 order-2 order-lg-1">
              <img src={homeImg} className="img-fluid " alt="Home-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
