import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardOffer({ imgSrc, title, price, slug }) {
  return (
    <div>
      <div className="relative w-full h-[335px]  cursor-pointer">
        <Image
          alt="tourImage"
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          placeholder="blur"
          blurDataURL={imgSrc}
          className="rounded-[32px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-[32px]  bg-gradient-to-r  from-black/25 to-black/25"></div>
        <div className="absolute top-[30%] left-1/2  -translate-x-1/2 w-[80%]">
          <div className="flex flex-col gap-3">
            <p className="text-lg text-white font-bold caption-top font-sans">
              {title}
            </p>
            <div className="flex flex-col ">
              <p className="text-[16px] text-[#82888E] font-sans ">
                From{" "}
                <span className="text-lg font-extrabold line-through">
                  US${price}
                </span>
              </p>
              <p className="text-[24px] text-[#fff] font-sans font-extrabold ">
                US$ {price - 50}
              </p>
            </div>
            <div className="py-2 px-6 cursor-pointer bg-transparent border-[3px] border-[#fff]  transition-all  rounded-3xl w-fit ">
              <Link href={`/Tours/${slug}`}>
                <button className="text-[16px] text-white font-sans capitalize font-bold ">
                  see more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOffer;
