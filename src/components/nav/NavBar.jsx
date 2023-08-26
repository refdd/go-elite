import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Link from "next/link";
import ListMenu from "./ListMenu";
import LinksNav from "./LinksNav";
function NavBar({ menus, logo }) {
  const [menuBar, setMenuBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const checkMobileView = () => {
    const mobileViewWidth = 768; // You can adjust this threshold according to your design
    setIsMobileView(window.innerWidth < mobileViewWidth);
  };
  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  const modifiedImageUrl = isMobileView
    ? logo?.image?.image_url.replace(
        "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
        "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,w_90,h_60,e_improve/"
      )
    : logo?.image?.image_url.replace(
        "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
        "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp/"
      );
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-8  items-center  ">
        {/* logo  */}
        <div className="md:col-span-1">
          <Link href={"/"}>
            <div className=" relative w-[100%] h-[80px] md:h-[70px]">
              <Image
                loader={() => {
                  return `${modifiedImageUrl}`;
                }}
                unoptimized={true}
                alt="logo"
                src={modifiedImageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={60}
                placeholder="blur"
                blurDataURL={modifiedImageUrl}
                className=" "
              />
            </div>
          </Link>
        </div>
        <MenuBar handelMenubar={handelMenubar} />
        {/* list nav */}
        <div className="md:col-span-7  hidden md:block">
          <div className=" flex items-center gap-5 md:items-center justify-end">
            <LinksNav menus={menus} />

            <div className="py-2 h-[60px] w-[151px]  cursor-pointer bg-[#01a8c3] transition-all rounded-2xl flex justify-center items-center gap-2 ">
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
