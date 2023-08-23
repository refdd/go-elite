import Image from "next/image";
import Link from "next/link";
import React from "react";
function CardDestination({ imgSrc, country, slug }) {
  const modifiedImageUrl = imgSrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/c_fill,w_500,h_500,f_webp/"
  );
  console.log(imgSrc);
  return (
    <div className="  my-5 mx-4 md:mx-0">
      <Link href={`/${slug}`}>
        <div className=" relative cursor-pointer w-full h-[300px] transition-all group-hover:h-[101px] group overflow-hidden rounded-2xl">
          <Image
            alt="destinationImage"
            src={modifiedImageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            placeholder="blur"
            blurDataURL={modifiedImageUrl}
            className="rounded-2xl object-cover group-hover:scale-105 transition-all"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000033] rounded-2xl object-cover "></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <span className="text-2xl font-bold font-sans capitalize text-white ">
              {country}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardDestination;
