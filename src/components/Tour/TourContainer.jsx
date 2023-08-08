import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardTour from "./CardTour";
import imageTour1 from "../../../public/assets/image/tourimage (1).webp";
import imageTour2 from "../../../public/assets/image/tourimage (2).webp";
import imageTour3 from "../../../public/assets/image/tourimage (3).webp";
import imageTour4 from "../../../public/assets/image/tourimage (4).webp";
function TourContainer() {
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        <SwiperSlide>
          <CardTour imgSrc={imageTour1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour imgSrc={imageTour2} />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour imgSrc={imageTour3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour imgSrc={imageTour4} />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour imgSrc={imageTour3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardTour imgSrc={imageTour2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TourContainer;
