import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
function CardListTour({
  imgSrc,
  title,
  description,
  stars,
  duration,
  slug,
  price,
  tour_type,
  supSlug,
}) {
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  const starsE = Array.from({ length: stars }, (_, i) => (
    <AiFillStar key={i} color="#ffd500" />
  ));
  return (
    <div className="rounded-md bg-white shadow-md  ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="md:col-span-1">
          <Link href={`/${supSlug}/${slug}`}>
            <div className="relative w-full h-[213px] md:h-full">
              <Image
                alt="tourImage"
                src={modifiedImageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={60}
                placeholder="blur"
                blurDataURL={modifiedImageUrl}
                className="rounded-md object-cover md:rounded-l-md md:rounded-r-none"
              />
            </div>
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  md:gap-3 py-2 px-3 md:px-3 md:py-5 ">
            {/* titel */}
            <div className="md:col-span-2">
              <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <Link href={`/${supSlug}/${slug}`}>
                  <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                    {title}
                  </p>
                </Link>
                {/* stars */}
                <div className="flex md:justify-end">
                  <div className="flex items-center gap-1">{starsE}</div>
                </div>
              </div>
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
            <div className=" md:col-span-2">
              <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
                {duration} | {tour_type}
              </p>
            </div>

            {/* price */}
            <div className="">
              <div className="flex flex-col ">
                <span className="text-[16px]  text-[#3d3d3d] font-bold capitalize">
                  From
                </span>
                <span className="text-[28px]  font-sans text-[#3d3d3d] font-bold capitalize">
                  ${price}
                </span>
              </div>
            </div>
            <div className=" flex md:justify-end md:items-end">
              <div className="py-2 px-7 rounded-md cursor-pointer flex justify-center items-center bg-[#01a8c3] md:w-fit h-fit">
                <Link href={`/${supSlug}/${slug}`}>
                  <button className="text-[#fff] text-lg font-sans font-medium capitalize">
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
