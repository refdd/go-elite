import Image from "next/image";
import React from "react";
import Link from "next/link";
function Footer({ logo, footer, socials }) {
  return (
    <div className="  " id="footer">
      <div className="flex justify-end">
        <div className="border border-[#7a7a7a] w-[70%] my-10"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-7 py-6 ">
          {/* lgo */}
          <div className="">
            <div className="">
              <Image
                alt="tourImage"
                loading="lazy"
                decoding="async"
                width={200}
                height={90}
                src={logo?.image?.image_url}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=""
              />
            </div>
          </div>
          <div className="">
            <p className="text-[16px] text-[#3d3d3d] font-sans capitalize font-bold pb-3">
              {footer && footer[1]?.title}
            </p>
            <ul className="flex flex-col gap-3">
              {footer[1]?.links?.map((link) => (
                <li
                  key={link?.link_id}
                  className="text-[16px] text-[#3d3d3d] font-semibold font-sans capitalize "
                >
                  <Link href={`/${link?.link_slug}`}>
                    <span>{link?.link_title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="text-[16px] text-[#3d3d3d] font-sans capitalize font-bold pb-3">
              {" "}
              {footer && footer[2].title}
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#3d3d3d] font-sans capitalize ">
                <span>{footer[2].body1}</span>
              </li>
              {socials?.map((social) => (
                <li key={social?.id} className="flex items-center gap-2">
                  <Link href={`${social?.provider_url}`}>
                    <p className="text-[16px] text-[#3d3d3d] font-semibold font-sans capitalize ">
                      {social?.provider}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
