import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import CardTour from "./CardTour";
import imageTour1 from "../../../public/assets/image/tourimage (1).webp";
import imageTour2 from "../../../public/assets/image/tourimage (2).webp";
import imageTour3 from "../../../public/assets/image/tourimage (1).webp";
import imageTour4 from "../../../public/assets/image/tourimage (4).webp";
import dynamic from "next/dynamic";
const PreloadableComponent = dynamic(() => import("./CardTour"), {
  loading: () => <div className="w-full h-[600px]">Loading...</div>,
  ssr: false,
});
function TourContainer() {
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
          <PreloadableComponent imgSrc={imageTour1} />
        </SwiperSlide>
        <SwiperSlide>
          <PreloadableComponent imgSrc={imageTour2} />
        </SwiperSlide>
        <SwiperSlide>
          <PreloadableComponent imgSrc={imageTour3} />
        </SwiperSlide>
        <SwiperSlide>
          <PreloadableComponent imgSrc={imageTour4} />
        </SwiperSlide>
        <SwiperSlide>
          <PreloadableComponent imgSrc={imageTour3} />
        </SwiperSlide>
        <SwiperSlide>
          <PreloadableComponent imgSrc={imageTour2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TourContainer;
