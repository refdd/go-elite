import { Divider } from "@mui/material";
import React from "react";
import { MdBedroomParent, MdMeetingRoom } from "react-icons/md";

function PricesAccommodation() {
  return (
    <div>
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-0 rounded-t-2xl overflow-hidden border divide-y">
          {/* header */}
          <div className="col-span-2">
            <div className="py-5 px-3 bg-[#00229E] flex justify-start items-center">
              <span className="text-white font-bold text-lg">Months</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="py-5 px-3 bg-[#F5F5F5] flex justify-center border-x items-center">
              <span className="text-[#3D3D3D] font-bold text-lg">Hotels</span>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <div className="py-5 px-3 bg-[#F5F5F5] flex justify-center items-center">
              <span className="text-[#3D3D3D] font-bold text-lg">Prices</span>
            </div>
          </div>
          {/* content */}
          <div className="col-span-2">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-[#3D3D3D] font-bold text-lg">May - Sep</p>
              <p className="text-[#7A7A7A]  text-xs">Per Person</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="py-5 px-3 border-x">
              <div className="flex flex-col gap-3">
                <p className="text-[#3D3D3D] font-bold text-lg">
                  Four Seasons Hotel First Residence
                </p>
                <div className=" flex items-center gap-1">
                  <MdBedroomParent className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
                <p className="text-[#3D3D3D] font-bold text-lg">
                  Sofitel Old Cataract Aswan
                </p>
                <div className=" flex items-center gap-1">
                  <MdMeetingRoom className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
                <div className=" flex items-center gap-1">
                  <MdMeetingRoom className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-[#3D3D3D] font-bold text-4xl">$749</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-[#3D3D3D] font-bold text-lg">May - Sep</p>
              <p className="text-[#7A7A7A]  text-xs">Per Person</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="py-5 px-3 border-x">
              <div className="flex flex-col gap-3">
                <p className="text-[#3D3D3D] font-bold text-lg">
                  Four Seasons Hotel First Residence
                </p>
                <div className=" flex items-center gap-1">
                  <MdBedroomParent className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
                <p className="text-[#3D3D3D] font-bold text-lg">
                  Sofitel Old Cataract Aswan
                </p>
                <div className=" flex items-center gap-1">
                  <MdMeetingRoom className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
                <div className=" flex items-center gap-1">
                  <MdMeetingRoom className="text-lg text-[#00229E]" />
                  <span>Deluxe Room</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            {" "}
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-[#3D3D3D] font-bold text-4xl">$749</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricesAccommodation;
