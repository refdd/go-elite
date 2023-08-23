import React from "react";

function OverviewPrivacyPolicy({ title, body }) {
  return (
    <div className="container  mx-auto px-4 mt-10 ">
      <div className="flex flex-col">
        <div className="bg-[#1d2532] py-3 px-4 w-fit rounded-t-3xl">
          <span className="textlg text-white font-bold">General</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: body,
          }}
          className=" border border-[#1d2532] p-5"
        ></div>
      </div>
    </div>
  );
}

export default OverviewPrivacyPolicy;
