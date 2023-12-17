// services.jsx
import React from "react";
import Card from "./Card";
import servicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="row mx-5 gy-4 gx-4 mb-5">
        {servicesData.map((val, ind) => (
          <Card
            key={ind}
            imgSrc={val.imgSrc}
            imgTitle={val.imgTitle}
            imgDescription={val.imgDescription}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
