import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

function SortBy() {
  return (
    <div>
      <div className="p-4 bg-[#f5f5f5] border-[#dedede] rounded-lg">
        <div className="flex items-center  justify-between cursor-pointer border py-1 px-3 rounded-lg bg-white">
          <p className="font-medium text-[16px] text-[#3d3d3d] capitalize">
            SortBy
          </p>
          <MdArrowDropDownCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SortBy;
