import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardDestination from "./CardDestination";
import image1 from "../../../public/assets/image/tourimage (1).webp";
import image2 from "../../../public/assets/image/tourimage (2).webp";
import image3 from "../../../public/assets/image/tourimage (1).webp";
import image4 from "../../../public/assets/image/tourimage (4).webp";
function DestinationContainer({ destinations }) {
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
        {destinations?.map((destination) => (
          <SwiperSlide key={destination?.id}>
            <CardDestination
              imgSrc={destination.image?.image_url}
              country={destination?.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DestinationContainer;
