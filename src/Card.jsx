import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card w-3">
          <img src={props.imgSrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.imgTitle}</h5>
            <p class="card-text">
              {props.imgDescription}
            </p>
            <a href="#" class="btn btn-primary">
              Check Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;