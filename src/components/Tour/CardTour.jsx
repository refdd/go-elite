import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function CardTour({
  imgSrc,
  title,
  price,
  slug,
  description,
  stars,
  duration,
}) {
  const [value, setValue] = useState(stars);
  return (
    <div className="rounded-[6px] border border-[#00000020]   my-5  ">
      <div className="flex flex-col gap-2 ">
        <div className="relative w-full h-[213px]">
          <Image
            alt="tourImage"
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={imgSrc}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-3">
          {/* titel */}
          <div className=" flex items-center justify-between">
            <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
              {title}
            </p>
            <div className="">
              <Rating name="read-only" value={value} readOnly />
            </div>
          </div>
          {/* desc */}
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html: description?.substring(0, 90),
              }}
              className="text-[16px] font-sans text-[#4E5255] font-normal capitalize"
            ></div>
          </div>
          {/* duration */}
          <div className="">
            <p className="text-base font-bold capitalize">{duration}</p>
          </div>
          {/* price */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col  ">
              <span className="text-[16px] font-sans text-[#4E5255] font-normal capitalize">
                From
              </span>
              <span className="text-xl  font-sans text-[#3d3d3d] font-extrabold capitalize">
                US$ {price}
              </span>
            </div>
            <div className="flex justify-end">
              <div className="py-3 px-9 rounded-md border-[1px] border-[#3d3d3d] cursor-pointer">
                <Link href={`/Tours/${slug}`}>
                  <button className="text-[#3d3d3d] text-[16px] font-sans font-medium capitalize">
                    View Tour
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTour;
