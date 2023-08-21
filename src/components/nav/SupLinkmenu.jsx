import Link from "next/link";
import React from "react";

function SupLinkmenu({ link }) {
  return (
    <div className=" relative z-30 text-[#4E5255] capitalize text-[16px] md:text-lg  font-sans font-medium hover:text-gray-900 transition-all cursor-pointer">
      <Link href={`/${link?.slug}`}>
        <span>{link?.title}</span>
      </Link>
    </div>
  );
}

export default SupLinkmenu;
