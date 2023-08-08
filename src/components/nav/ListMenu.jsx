import Link from "next/link";
import React from "react";

function ListMenu({ menuBar }) {
  return (
    <ul
      className={` ${
        menuBar ? "flex" : "hidden"
      }  lg:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
    >
      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link legacyBehavior href={"/"}>
          Home
        </Link>
      </li>
      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/packages"}>Packages</Link>
      </li>
      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/activities"}> Activities</Link>
      </li>
      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/umrah"}> Umrah Plus</Link>
      </li>
      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/LandMarks"}>
          <span>Landmarks</span>
        </Link>
      </li>

      <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
        <Link href={"/Saudi-travel-blog"}>Saudi Travel Blog</Link>
      </li>
    </ul>
  );
}

export default ListMenu;
