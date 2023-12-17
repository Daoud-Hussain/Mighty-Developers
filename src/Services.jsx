import React from "react";
import Card from "./Card";
import web from './Images/web.jpg'
import android from './Images/android.jpg'
import programming from './Images/programming.jpg'
import game from './Images/game.jpg'
import content from './Images/content.jpg'
import graphics from './Images/graphics.jpg'

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="row mx-5 gy-4 gx-4 mb-5">

        <Card imgSrc={web} imgDescription="This is a Card" imgTitle="Web Development" />
        <Card imgSrc={android} imgDescription="This is a Card" imgTitle="Android Development" />
        <Card imgSrc={programming} imgDescription="This is a Card" imgTitle="Programming" />
        <Card imgSrc={game} imgDescription="This is a Card" imgTitle="Game Development" />
        <Card imgSrc={content} imgDescription="This is a Card" imgTitle="Content Writing" />
        <Card imgSrc={graphics} imgDescription="This is a Card" imgTitle="Graphics Designing" />
          
      </div>
    </>
  );
};

export default Services;
