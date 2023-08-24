import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { LiaCalendarAltSolid } from "react-icons/lia";

function SingelGallery({ imgsrc, title, Duration, reating }) {
  const modifiedImageUrl = imgsrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,e_improve,h_530/"
  );
  return (
    <div
      style={{ backgroundImage: `url(${modifiedImageUrl})` }}
      className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-center  h-[400px] md:h-[500px] -z-1 "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] "></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-1/2 w-full">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-col gap-7">
            <p className="text-2xl md:text-[52px] font-bold text-white ">
              {title}
            </p>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
              <div className="flex items-center gap-5 flex-wrap">
                <div className=" flex items-center gap-2">
                  <div className=" p-1 bg-white rounded-full flex justify-center items-center">
                    <LiaCalendarAltSolid className="text-lg " />
                  </div>
                  <p className="text-lg text-white font-bold">
                    Duration: {Duration}
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className=" p-1 bg-white rounded-full flex justify-center items-center">
                    <FaLocationArrow className="text-sm " />
                  </div>
                  <p className="text-lg text-white font-bold">
                    Type: Private tour
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <AiFillStar className="text-lg  text-[#FFE234]" />

                  <p className="text-lg text-white font-bold">{reating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingelGallery;
