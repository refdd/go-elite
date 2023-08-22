import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

function MainCardblog({ imgSrc, title, description, slug }) {
  return (
    <div className="container  mx-auto px-4 mt-10 md:px-10">
      <p className="text-xl font-bold text-[#3d3d3d] capitalize mb-2">Blogs</p>
      <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0">
        <div className="md:col-span-1">
          <div className="relative w-full h-[276px] md:h-full roundedl-[30px]">
            <Image
              alt="tourImage"
              src={imgSrc}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              quality={60}
              placeholder="blur"
              blurDataURL={imgSrc}
              className="rounded-l-[30px] object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div
            className="flex flex-col gap-4 px-3 py-4 shadow-2xl 
          rounded-b-[30px] md:rounded-b-none md:rounded-r-[30px] md:py-8"
          >
            <p className="text-xl font-bold capitalize text-[#3d3d3d]">
              {title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className=" text-[#3d3d3d] text-base font-medium capitalize"
            ></div>
            <div
              className="border border-[d8d8d8] py-3 px-5
             bg-white rounded-lg w-fit flex justify-center items-center gap-2"
            >
              <Link href={`/blog/${slug}`}>
                <button className="text-base text-[#036] capitalize">
                  See More
                </button>
              </Link>
              <IoIosArrowDropright className=" text-[#036] text-x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCardblog;
