import Link from "next/link";
import React from "react";

function ButtonSeeAll({ title, path }) {
  return (
    <Link href={`/${path}`} className="">
      <div
        className={`bg-[#01a8c3] w-44 h-12 rounded-md  flex   justify-center items-center`}
      >
        <button className="text-white text-base font-medium capitalize">
          {title}
        </button>
      </div>
    </Link>
  );
}

export default ButtonSeeAll;
