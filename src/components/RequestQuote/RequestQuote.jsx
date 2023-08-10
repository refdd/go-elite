import React from "react";
import imgtop from "../../../public/assets/image/Rectangletop.png";
import imgBottom from "../../../public/assets/image/Rectanglebottom.png";
import Image from "next/image";
function RequestQuote() {
  return (
    <div className="mt-10">
      <div className="relative  h-[200px] md:h-[106px] bg-[#001F8E] ">
        <div className="absolute top-0 left-0 w-full h-[67.84px] md:w-[784px]">
          <div className="relative w-full h-full">
            <Image
              alt="tourImage"
              loading="lazy"
              fill
              quality={75}
              placeholder="blur"
              src={imgtop}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" "
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]  z-10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around ">
            <p className="text-center text-lg md:text-[24px] text-white font-bold font-sans capitalize ">
              Our travel expert will plan a memorable tour for you !
            </p>
            <div className="py-3 px-8 bg-white rounded-3xl border-[3px] border-[#667ac533] w-fit">
              <button className="text-lg font-bold font-sans capitalize text-[#00186F]">
                {" "}
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-[26px] md:w-[784px]">
          <div className="relative w-full h-full">
            <Image
              alt="tourImage"
              loading="lazy"
              fill
              quality={75}
              placeholder="blur"
              src={imgBottom}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestQuote;
