import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/slider.css"

const Slider = ({ items }) => {
  const slides = items.map(({ id, src, name }) => (
    <SwiperSlide key={id}>
      <div className="slide">
        <img className="slide-image" src={src} alt="음식 이미지"></img>
        <span>{name}</span>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider"
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Slider;
