import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/image/logo.svg";
import MenuBar from "./MenuBar";
import Link from "next/link";
import ListMenu from "./ListMenu";
import { AiOutlinePlus } from "react-icons/ai";
function NavBar() {
  const [menuBar, setMenuBar] = useState(false);

  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  return (
    <div className="container mx-auto  px-4 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-7 items-center  ">
        {/* logo  */}
        <div className="md:col-span-1">
          <div className=" relative w-[100%] h-[80px]">
            <Image
              alt="logo"
              src={logo}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          </div>
        </div>
        <MenuBar handelMenubar={handelMenubar} />
        {/* list nav */}
        <div className="md:col-span-5  hidden md:block">
          <div className=" flex items-center gap-10">
            <ul className="flex items-center gap-7">
              <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
                <span>Home</span>
              </li>
              <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
                <Link href={"/Tours"}>
                  <span>Luxury egypt tours </span>
                </Link>
              </li>
              <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
                <span>Destinations</span>
              </li>
              <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
                <span>About us</span>
              </li>
              <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
                <span>Blogs</span>
              </li>
            </ul>
            <div className="py-2 px-6 cursor-pointer bg-[#00229E] transition-all hover:bg-[#00145F] rounded-3xl flex justify-center items-center gap-2 ">
              <AiOutlinePlus className="text-[#FFF]" />
              <button className="text-[16px] text-white font-sans capitalize font-normal ">
                custom Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListMenu menuBar={menuBar} />
    </div>
  );
}

export default NavBar;
