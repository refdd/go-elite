import Image from "next/image";
import React from "react";

function GuideCard({ imgSrc }) {
  return (
    <div>
      ;
      <div className="flex flex-col gap-3 shadow-md rounded-t-[32px] ">
        <div className="relative w-full h-[251px] ">
          <Image
            alt="tourImage"
            loading="lazy"
            decoding="async"
            fill
            quality={75}
            placeholder="blur"
            src={imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-[32px] object-cover"
          />
          <div className="absolute top-0 left-0 rounded-t-[32px] w-full h-full bg-gradient-to-tr from-[#0000004d] to-transparent "></div>
        </div>
        <div className="flex flex-col gap-16 px-5 py-3">
          <div className="">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              dolorem totam nemo labore nulla velit numquam nesciunt pariatur
              molestias, aut, voluptate architecto adipisci nisi quibusdam optio
              beatae saepe dolore dolores?
            </p>
          </div>
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
