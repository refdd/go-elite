import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Excluded() {
  return (
    <div className="mt-5">
      <p className="text-xl text-[#3D3D3D] font-bold">Included:</p>
      <ul className=" mt-3 flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Skip the airport line with our Fast Track service upon arrival at
            Cairo International Airport.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Meet and greet service by our representatives upon your airport
            arrival.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            All transfers in a private air-conditioned vehicle.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Assistance with guest relations during your stay.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Domestic flights (Cairo / Luxor / Cairo).
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Accommodation in Cairo for 3 nights, including daily breakfast.
          </p>
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineClose className="text-[#FF5449] text-2xl" />
          <p className="text-base font-bold text-[#3D3D3D]">
            Accommodation in Luxor for 1 night, including daily breakfast.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Excluded;