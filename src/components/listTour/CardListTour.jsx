import Image from "next/image";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Link from "next/link";
function CardListTour({
  imgSrc,
  title,
  description,
  stars,
  duration,
  slug,
  price,
}) {
  const [value, setValue] = useState(stars);

  return (
    <div className="rounded-[32px] bg-white border-[0.5px] border-[#B4B8BB] my-5 md:hover:shadow-md md:hover:scale-[1.01] transition-all">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="md:col-span-1">
          <Link href={`/Tours/${slug}`}>
            <div className="relative w-full h-[213px] md:h-full">
              <Image
                alt="tourImage"
                src={imgSrc}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL={imgSrc}
                className="rounded-2xl object-cover md:rounded-l-2xl md:rounded-r-none"
              />
            </div>
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  md:gap-3 py-2 px-3 md:px-2 ">
            {/* titel */}
            <div className="md:col-span-2">
              <Link href={`/Tours/${slug}`}>
                <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                  {title}
                </p>
              </Link>
            </div>
            {/* desc */}
            <div className="md:col-span-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: description?.substring(0, 120),
                }}
                className="text-[16px] font-sans text-[#4E5255] font-normal capitalize"
              ></div>
            </div>
            {/* duration */}
            <div className="">
              <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                {duration} | Private Tour
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
                  US${price}
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="py-3 px-9 rounded-3xl border-[3px] border-[#667ac533] cursor-pointer">
                <Link href={`/Tours/${slug}`}>
                  <button className="text-[#00186F] text-[16px] font-sans font-medium capitalize">
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

export default CardListTour;
