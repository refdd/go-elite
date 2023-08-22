import React from "react";

function OverviewGuide({ items }) {
  return (
    <div className="md:col-span-4">
      <div className="grid grid-cols-1 gap-9">
        {items?.map((item, id) => (
          <div key={id} className=" flex flex-col gap-3">
            <p className="text-lg md:text-2xl text-[#3D3D3D] font-bold font-sans capitalize">
              {item?.title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: item?.body,
              }}
              className="text-[#000] text-base "
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewGuide;
