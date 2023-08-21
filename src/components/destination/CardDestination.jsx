import Image from "next/image";
import React from "react";
function CardDestination({ imgSrc, country }) {
  return (
    <div className="  my-5 mx-4 md:mx-0">
      <div className=" relative cursor-pointer w-full h-[300px] transition-all group-hover:h-[101px] group overflow-hidden rounded-2xl">
        <Image
          alt="destinationImage"
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          placeholder="blur"
          blurDataURL={imgSrc}
          className="rounded-2xl object-cover group-hover:scale-105 transition-all"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033] rounded-2xl object-cover "></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <span className="text-2xl font-bold font-sans capitalize text-white ">
            {country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardDestination;
