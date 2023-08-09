import Image from "next/image";
import React from "react";
import { PiSunHorizonDuotone } from "react-icons/pi";
import { GiMeal } from "react-icons/gi";
function CardDestination({ imgSrc, country }) {
  return (
    <div className=" group my-5 mx-4 md:mx-0 h-[350px]">
      <div
        className="relative rounded-[32px] bg-white pt-24 "
        style={{ boxShadow: " 0px 4px 20px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="relative w-full h-full transition-all group-hover:h-[101px]">
            <Image
              alt="tourImage"
              src={imgSrc}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              className="rounded-2xl object-cover"
            />
            <div className="absolute top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 group-hover:hidden">
              <span className="text-2xl font-bold font-sans capitalize text-white">
                {country}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 p-5">
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1 rounded-2xl bg-[#667ac533] py-3 px-7  ">
                <PiSunHorizonDuotone className="text-[#00229E] text-lg" />
                <span className="text-[16px] text-[#00229E] font-sans font-normal capitalize">
                  36°C°F
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-[#667ac533] py-3 px-7 ">
                <GiMeal className="text-[#00229E] text-lg" />
                <span className="text-[16px] text-[#00229E] font-sans font-normal capitalize">
                  36°C°F
                </span>
              </div>
            </div>
            <p className=" text-[16px] text-[#4E5255] font-normal text-justify font-sans capitalize ">
              Egypt, a country linking northeast Africa with the Middle East,
              dates to the time of the pharaohs.{" "}
            </p>
            <div className="z-10">
              <div className="py-2 px-6 cursor-pointer bg-transparent border-[3px] border-[#fff]  transition-all group-hover:bg-[#00229E] group-hover:border-none rounded-3xl w-fit ">
                <button className="text-[16px] text-white font-sans capitalize font-bold ">
                  see more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDestination;
