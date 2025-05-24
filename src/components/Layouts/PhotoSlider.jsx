import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./PhotoSliders.css";
import { sliderPhotoSettings } from "../../utils/common";
import PhotoCard from "./PhotoCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const PhotoSliders = () => {
  const { isLoading } = useProperties();

  const sampleData = [
    {
      image: "./northwoods_assets/gallery1-desktop.png",
      description:
        "60-arce Central Park - Where nature, community, and pets come together",
    },
    {
      image: "./northwoods_assets/gallery2-desktop.png",
      description: "SplashMania Waterpark - An adventure waiting to unfold",
    },
    {
      image: "./northwoods_assets/gallery3-desktop.png",
      description: "Goosebumps Rose Course - Discover your inner adventure",
    },
    {
      image: "./northwoods_assets/gallery4-desktop.png",
      description: "Unobstructed forest views from your balcony",
    },
    {
      image: "./northwoods_assets/gallery6-desktop.png",
      description: "Panoramic views of the Kuala Langat Forest Reserve",
    },
    {
      image: "./northwoods_assets/gallery7-desktop.png",
      description: "50-meter infinity pool with a forest view",
    },
  ];

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div id="PhotoSliders">
      <div className="white-gradient-bottom-right" />
      <div className="paddings">
        <div className="flexColCenter r-head">
          <span
            className="primaryText"
            style={{ fontWeight: "300", fontSize: "40px", marginBottom: "1%" }}
          >
            DISCOVER OUR LIFESTYLE
          </span>
          <span className="secondaryText">
            That's both dynamic and in tune with the beauty of the natural world
          </span>
        </div>

        <Swiper {...sliderPhotoSettings}>
          <SlideNextButton />
          {sampleData.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PhotoCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoSliders;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
