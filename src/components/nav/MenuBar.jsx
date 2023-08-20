import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
function MenuBar({ handelMenubar }) {
  return (
    <div className=" lg:hidden block ">
      <div className=" flex items-center gap-2 justify-end">
        <CgMenuLeftAlt
          onClick={() => {
            handelMenubar();
          }}
          size={30}
          className={` cursor-pointer transition-all `}
        />
      </div>
    </div>
  );
}

export default MenuBar;
