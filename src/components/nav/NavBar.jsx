import Image from "next/image";
import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Link from "next/link";
import ListMenu from "./ListMenu";
import LinksNav from "./LinksNav";
function NavBar({ menus, logo }) {
  const [menuBar, setMenuBar] = useState(false);

  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-5  items-center  ">
        {/* logo  */}
        <div className="md:col-span-1">
          <div className=" relative w-[100%] h-[80px]">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={logo?.image?.image_url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={60}
                placeholder="blur"
                blurDataURL={logo?.image?.image_url}
                className=" "
              />
            </Link>
          </div>
        </div>
        <MenuBar handelMenubar={handelMenubar} />
        {/* list nav */}
        <div className="md:col-span-4  hidden md:block">
          <div className=" flex items-center gap-10 md:items-center justify-end">
            <LinksNav menus={menus} />

            <div className="py-2 px-6 w-[151px]  cursor-pointer bg-[#01a8c3] transition-all rounded-sm flex justify-center items-center gap-2 ">
              <button className="text-[16px] text-white font-sans capitalize font-normal ">
                Inquire
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
