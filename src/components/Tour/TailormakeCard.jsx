import Image from "next/image";
import React from "react";
import logoImage from "../../../public/assets/image/tailor-new.webp";
function TailormakeCard() {
  return (
    <div className="rounded-[6px] border border-[#00000020]   my-5 mr-5 ">
      <div className="flex flex-col gap-2 ">
        <div className="relative w-full h-[165px]">
          <Image
            alt="tourImage"
            src={logoImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            // blurDataURL={imgSrc}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 px-3 py-2">
          <p className="text-lg text-[#3d3d3d] font-bold capitalize">
            Tailor make
          </p>
          <p className="text-base text-[#3d3d3d]">
            {" "}
            Find your best destination
          </p>
        </div>
        <div className=" flex justify-end pb-4 px-3 mt-8">
          <div className="py-2 px-6 w-[151px] h-[50px] cursor-pointer bg-[#01a8c3] transition-all rounded-[5px] flex justify-center items-center gap-2 ">
            <button className="text-[16px] text-white font-sans capitalize font-medium ">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailormakeCard;
