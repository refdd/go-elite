import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
function CardTour({
  imgSrc,
  title,
  price,
  slug,
  description,
  stars,
  duration,
  tourType,
  subSlug,
}) {
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  const starsE = Array.from({ length: stars }, (_, i) => (
    <AiFillStar key={i} color="#ffd500" />
  ));
  return (
    <div className="rounded-[6px] border border-[#00000020]  ">
      <div className="flex flex-col gap-2 ">
        <div className="relative w-full h-[165px]">
          <Image
            alt="tourImage"
            loader={() => {
              return `${modifiedImageUrl}`;
            }}
            unoptimized={true}
            src={modifiedImageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={modifiedImageUrl}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-3">
          {/* titel */}
          <div className=" flex items-center justify-between">
            <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
              {title}
            </p>
            <div className="flex items-center gap-1">{starsE}</div>
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
            <p className="text-base font-bold capitalize">
              {duration} | {tourType}
            </p>
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
                <Link href={`/${subSlug}/${slug}`}>
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
