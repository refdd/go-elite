import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardOffer from "./CardOffer";
import image1 from "../../../public/assets/image/tourimage (1).webp";
function OffersContainer({ packages }) {
  console.log(packages);
  return (
    <div className="mt-5 md:pb-3 md:mx-44">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="offers-container "
      >
        {packages?.map((tour) => (
          <SwiperSlide key={tour?.id}>
            <CardOffer
              imgSrc={tour?.image?.image_url}
              title={tour?.title}
              price={tour?.start_price}
              slug={tour?.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OffersContainer;
