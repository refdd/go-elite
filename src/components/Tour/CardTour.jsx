import Image from "next/image";
import React from "react";

function CardTour({ imgSrc }) {
  return (
    <div className="rounded-[32px] bg-white border-[0.5px] border-[#B4B8BB] my-5 md:hover:shadow-md md:hover:scale-[1.01] transition-all">
      <div className="flex flex-col gap-4 p-4">
        <div className="relative w-full h-[213px]">
          <Image
            alt="logo"
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>
        {/* titel */}
        <div className="">
          <p className="text-lg font-sans text-[#4E5255] font-bold capitalize">
            Highlights of Morocco and Chefchaouen Tour
          </p>
        </div>
        {/* desc */}
        <div className="">
          <p className="text-[16px] font-sans text-[#4E5255] font-normal capitalize">
            Explore the Highlights of Morocco by visiting the...
          </p>
        </div>
        {/* price */}
        <div className="flex items-center gap-2 ">
          <span className="text-[16px] font-sans text-[#4E5255] font-normal capitalize">
            From
          </span>
          <span className="text-xl  font-sans text-[#00229E] font-extrabold capitalize">
            US$1634
          </span>
        </div>
        <hr />
        <div className="flex justify-end">
          <div className="py-3 px-9 rounded-3xl border-[3px] border-[#667ac533] cursor-pointer">
            <button className="text-[#00186F] text-[16px] font-sans font-medium capitalize">
              View Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTour;
