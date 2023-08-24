import React from "react";

function HeaderSingBlog({ imgsrc, title }) {
  const modifiedImageUrl = imgsrc.replace(
    "https://s3.eu-central-1.amazonaws.com/other.projects.storage/",
    "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,h_530/"
  );
  // console.log(modifiedImageUrl);
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${modifiedImageUrl})` }}
        className=" relative overflow-hidden   w-full bg-no-repeat  bg-cover bg-center  h-[400px] md:h-[550px]  mt-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div>
        <div className="absolute bottom-32 left-0  - w-full px-10 ">
          <p className="text-4xl  md:text-[30px] font-sans font-bold  capitalize text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSingBlog;
