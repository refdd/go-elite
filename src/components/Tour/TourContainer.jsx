import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardTour from "./CardTour";
function TourContainer({ packages }) {
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
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {packages?.map((tour) => (
          <SwiperSlide key={tour.id}>
            <CardTour
              id={tour.id}
              imgSrc={tour?.image?.image_url}
              title={tour?.destination?.title}
              price={tour?.start_price}
              slug={tour?.slug}
              description={tour?.title?.substring(0, 50)}
              stars={tour?.stars}
              duration={tour?.duration}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TourContainer;
