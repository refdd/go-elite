import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function CardReviews({ imgSrc, title, name, palce, stars }) {
  const starsE = Array.from({ length: stars }, (_, i) => (
    <AiFillStar key={i} color="#ffd500" className="text-2xl" />
  ));
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_56,h_56,f_webp/"
  );
  return (
    <div className="relative pt-8">
      <div className="absolute top-0 left-4 w-16 h-16 bg-white rounded-full flex justify-center items-center">
        <div className="relative w-14 h-14  ">
          <Image
            alt="tourImage"
            src={modifiedImageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={modifiedImageUrl}
            className="rounded-full object-cover "
          />
        </div>
      </div>
      <div className="pt-10 px-3 pb-3 bg-white rounded-xl border">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col  ">
              <p className="text-[#3d3d3d] text-base md:text-lg font-bold ">
                {name}
              </p>
              <p className="text-sm text-[#3d3d3d] ">{palce}</p>
            </div>
            <div className="flex items-center gap-1">{starsE}</div>
          </div>
          <p className="text-lg text-[#3d3d3d]">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CardReviews;
