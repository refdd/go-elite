import Link from "next/link";
import React from "react";
import SupLinkmenu from "./SupLinkmenu";

function LinksNav({ menus }) {
  return (
    <ul className="flex items-center gap-10">
      <li className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
        <Link href={"/"}>
          <span>Home</span>
        </Link>
      </li>
      {menus?.map((menu) => (
        <li key={menu?.id} className="relative group py-5">
          <div className="text-[#4E5255] capitalize text-[16px] font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
            <Link href={`${menu?.slug}`}>
              <span>{menu?.title}</span>
            </Link>
          </div>
          {menu?.subMenu && (
            <div className="absolute -bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-0 w-48 h-20 hidden group-hover:block hover:block bg-white rounded-md ">
              <div className="flex flex-col gap-1 relative z-30 border-t-2 border-[#c2a36e] mx-4 py-3">
                {menu?.subMenu &&
                  menu?.subMenu.map((link) => (
                    <SupLinkmenu key={link?.id} link={link} />
                  ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default LinksNav;
