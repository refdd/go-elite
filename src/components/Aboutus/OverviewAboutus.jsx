import React from "react";

function OverviewAboutus({ title, body }) {
  return (
    <div className="container  mx-auto px-4 mt-10 ">
      <p className="text-lg md:text-3xl text-[#3D3D3D] font-bold text-center font-sans capitalize ">
        {title}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className=""
      ></div>
    </div>
  );
}

export default OverviewAboutus;
