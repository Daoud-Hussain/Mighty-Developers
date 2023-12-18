import React from "react";
import homeImg from "./Images/home-img.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div className="container-fluid" id="header">
      <div className="row">
        <div className="col-10 mx-auto ">
          <div className="row d-flex flex-row align-items-center mt-5">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <p className="pageTitle">{props.value}</p>
              <h1 className="mainHeading">
                Grow your business with <strong className= "special">Mighty Developers.</strong>
              </h1>
              <h2 className="my-3 bio">We're the team of experienced developers.</h2>
              <div className="my-3">
                <NavLink className="button-get-started" to={props.buttonClick}>
                    {props.buttonName}
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 order-2 order-lg-1">
              <img src={props.imgSrc} className="img-fluid animated" alt="Home-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
