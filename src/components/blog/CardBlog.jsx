import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardBlog({ imgSrc, title, slug }) {
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  return (
    <Link href={`/blog/${slug}`}>
      <div className="relative w-full h-[402px] rounded-3xl cursor-pointer">
        <Image
          alt="tourImage"
          src={modifiedImageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          placeholder="blur"
          blurDataURL={modifiedImageUrl}
          className="rounded-[30px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,.5)] via-transparent to-transparent via-opacity-0 transform rotate-30 rounded-[30px] "></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <span className=" text-xl text-white font-bold ">{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default CardBlog;
