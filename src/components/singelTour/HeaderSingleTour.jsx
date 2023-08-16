import React from "react";
import bg from "../../../public/assets/image/singleHeader.webp";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
function HeaderSingleTour() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-center  h-[400px] md:h-[752px] "
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-1/2 w-full">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col gap-7">
              <p className="text-2xl md:text-4xl font-bold text-white ">
                CAIRO NILE CRUISE & HURGHADA HOLIDAY TOUR
              </p>
              <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-5 flex-wrap">
                  <div className=" flex items-center gap-2">
                    <div className=" p-1 bg-white rounded-full flex justify-center items-center">
                      <LiaCalendarAltSolid className="text-lg " />
                    </div>
                    <p className="text-lg text-white font-bold">
                      Duration: 5 Days
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

                    <p className="text-lg text-white font-bold">4.8/5</p>
                  </div>
                </div>
                <div className=" flex justify-end">
                  <div className="py-3 px-8 bg-[#3D3D3D] rounded-md w-fit flex justify-center items-center gap-3 cursor-pointer ">
                    <TfiGallery className="text-lg " color="#fff" />
                    <p className="text-base font-bold text-white">
                      PHOTOGALLERY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSingleTour;
