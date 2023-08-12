import Image from "next/image";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Link from "next/link";
function CardListTour({ imgSrc }) {
  const [value, setValue] = useState(5);

  return (
    <div className="rounded-[32px] bg-white border-[0.5px] border-[#B4B8BB] my-5 md:hover:shadow-md md:hover:scale-[1.01] transition-all">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="md:col-span-1">
          <Link href={"/Tours/CAIRO_PYRAMIDS"}>
            <div className="relative w-full h-[213px] md:h-full">
              <Image
                alt="tourImage"
                priority={true}
                fill
                quality={75}
                placeholder="blur"
                src={imgSrc}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl object-cover md:rounded-l-2xl md:rounded-r-none"
              />
            </div>
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  md:gap-3 py-2 px-3 md:px-2 ">
            {/* titel */}
            <div className="md:col-span-2">
              <Link href={"/Tours/CAIRO_PYRAMIDS"}>
                <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                  Highlights of Morocco and Chefchaouen Tour
                </p>
              </Link>
            </div>
            {/* desc */}
            <div className="md:col-span-2">
              <p className="text-[16px] font-sans text-[#4E5255] font-normal capitalize">
                Explore theo by visiting the... Highlights of Morocc Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            {/* duration */}
            <div className="">
              <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                8 Days | Private Tour
              </p>
            </div>
            {/* stars */}
            <div className="flex md:justify-end">
              <Rating name="read-only" value={value} readOnly />
            </div>
            {/* price */}
            <div className="">
              <div className="flex items-center gap-2 ">
                <span className="text-[16px] font-sans text-[#4E5255] font-normal capitalize">
                  From
                </span>
                <span className="text-xl  font-sans text-[#00229E] font-extrabold capitalize">
                  US$1634
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="py-3 px-9 rounded-3xl border-[3px] border-[#667ac533] cursor-pointer">
                <button className="text-[#00186F] text-[16px] font-sans font-medium capitalize">
                  View Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardListTour;
