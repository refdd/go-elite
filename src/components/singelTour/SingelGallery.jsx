import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image1 from "../../../public/assets/image/tourimage (1).webp";
import Image from "next/image";
function SingelGallery({ galleries }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {galleries?.map((img, i) => (
          <SwiperSlide key={i}>
            <div className=" relative w-full h-[350px] md:h-[500px]">
              <Image
                alt="tourImage"
                src={img?.image_url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL={img?.image_url}
                className="rounded-md object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SingelGallery;
