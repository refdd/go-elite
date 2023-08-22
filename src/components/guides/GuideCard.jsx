import Image from "next/image";
import Link from "next/link";
import React from "react";

function GuideCard({ imgSrc, description, title, slug }) {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-3 shadow-md rounded-[32px] ">
        <div className="relative w-full h-[251px] ">
          <Image
            alt="tourImage"
            src={imgSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={imgSrc}
            className="rounded-t-[32px] object-cover"
          />
          <div className="absolute top-0 left-0 rounded-t-[32px] w-full h-full bg-gradient-to-tr from-[#0000004d] to-transparent "></div>
        </div>
        <div className="flex flex-col gap-3 px-5 py-3">
          <p className="text-base font-bold capitalize text-[#3d3d3d] ">
            {title}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>
          <div className=" flex justify-end ">
            <div className="py-2 px-6 cursor-pointer bg-transparent border-[1px] border-[#3d3d3d]  transition-all  rounded-md w-fit ">
              <Link href={`/blog/${slug}`}>
                <button className="text-[16px] text-[#3d3d3d] font-sans capitalize font-bold ">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
