import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import "../../../App.scss";
import "./Carousel.scss";
import photoOne from "./CarouselImages/Group 10.png";
import photoTwo from "./CarouselImages/Group 8.png";
import photoThree from "./CarouselImages/photo-1454496522488-7a8e488e8606.avif";
import photoFour from "./CarouselImages/photo-1464822759023-fed622ff2c3b.avif";
import photoFive from "./CarouselImages/photo-1483728642387-6c3bdd6c93e5.avif";
import photoSix from "./CarouselImages/photo-1486870591958-9b9d0d1dda99.avif";
import photoSeven from "./CarouselImages/photo-1506905925346-21bda4d32df4.avif";
import photoEight from "./CarouselImages/photo-1519681393784-d120267933ba.avif";
import photoNine from "./CarouselImages/photo-1682685794761-c8e7b2347702.avif";

export const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div id="carousel">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={4}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`➡︎`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`⬅︎`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 4,
            minWidth: 200,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div className="img-container">
          <img src={photoOne} alt="" />
        </div>
        <div className="img-container">
          <img src={photoTwo} alt="" />
        </div>
        <div className="img-container">
          <img src={photoThree} alt="" />
        </div>
        <div className="img-container">
          <img src={photoFour} alt="" />
        </div>
        <div className="img-container">
          <img src={photoFive} alt="" />
        </div>
        <div className="img-container">
          <img src={photoSix} alt="" />
        </div>
        <div className="img-container">
          <img src={photoSeven} alt="" />
        </div>
        <div className="img-container">
          <img src={photoEight} alt="" />
        </div>
        <div className="img-container">
          <img src={photoNine} alt="" />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};
