import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card w-3">
          <img src={props.imgSrc} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.imgTitle}</h5>
            <p className="card-text text-justify">
              {props.imgDescription}
            </p>
            <a href="#" className="btn btn-primary">
              Visit Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;