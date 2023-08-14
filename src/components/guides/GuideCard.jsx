import Image from "next/image";
import React from "react";

function GuideCard({ imgSrc, description }) {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-3 shadow-md rounded-t-[32px] ">
        <div className="relative w-full h-[251px] ">
          <Image
            alt="tourImage"
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={imgSrc}
            className="rounded-t-[32px] object-cover"
          />
          <div className="absolute top-0 left-0 rounded-t-[32px] w-full h-full bg-gradient-to-tr from-[#0000004d] to-transparent "></div>
        </div>
        <div className="flex flex-col gap-16 px-5 py-3">
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>
          <div className=" flex justify-end ">
            <div className="py-2 px-6 cursor-pointer bg-transparent border-[3px] border-[#667ac533]  transition-all  rounded-3xl w-fit ">
              <button className="text-[16px] text-[#00186F] font-sans capitalize font-bold ">
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
