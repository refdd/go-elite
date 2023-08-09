import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardDestination from "./CardDestination";
import image1 from "../../../public/assets/image/tourimage (1).webp";
import image2 from "../../../public/assets/image/tourimage (2).webp";
import image3 from "../../../public/assets/image/tourimage (1).webp";
import image4 from "../../../public/assets/image/tourimage (4).webp";
function DestinationContainer() {
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
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
          <CardDestination imgSrc={image2} country={"Egypt"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDestination imgSrc={image4} country={"Cairo Nile Cruises"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDestination imgSrc={image2} country={"Morocco"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardDestination imgSrc={image1} country={"Jordan"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DestinationContainer;
