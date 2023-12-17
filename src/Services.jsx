import React from "react";
import homeImg from './Images/home-img.png'

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="row mx-5">
      <div className="col-md-4 col-10 mx-auto">
          <div className="card w-4">
            <img src={homeImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          
        </div>

        <div className="col-md-4 col-10 mx-auto">
          <div className="card w-4">
            <img src={homeImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          
        </div>

        <div className="col-md-4 col-10 mx-auto">
          <div className="card w-4">
            <img src={homeImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          
        </div>

        
      </div>
    </>
  );
};

export default Services;
