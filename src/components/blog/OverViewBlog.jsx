import React from "react";
import CardOverView from "./CardOverView";

function OverViewBlog({ items }) {
  return (
    <div className="container  mx-auto px-4 mt-10 md:px-10">
      <div className="grid grid-cols-1 gap-4">
        {items?.map((item, id) => (
          <CardOverView
            key={id}
            imgSrc={item?.image?.image_url}
            description={item?.body}
          />
        ))}
      </div>
    </div>
  );
}

export default OverViewBlog;
