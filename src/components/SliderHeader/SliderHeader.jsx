import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
function SliderHeader({ sliders }) {
  return (
    <div>
      {" "}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="myHeaderSlider"
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <div className="relative w-full h-[230px]  md:h-[530px] overflow-hidden ">
              <Image
                alt="tourImage"
                src={slider?.image?.image_url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                property
                quality={60}
                placeholder="blur"
                blurDataURL={slider?.image?.image_url}
                className=" object-cover"
              />
              <div className="absolute top-0 left-0 bg-[#00000033] w-full h-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-6 md:gap-10">
                  <p className="text-xl md:text-[2.5rem] font-bold capitalize text-white">
                    {slider?.title}
                  </p>
                  {slider?.button && (
                    <div className="py-2 px-3 flex justify-center items-center bg-[#01a8c3] rounded-[5px]">
                      <button className="text-white text-sm md:text-base">
                        view tour
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHeader;
