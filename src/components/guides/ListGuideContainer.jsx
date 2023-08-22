import React from "react";
import GuideCard from "./GuideCard";
function ListGuideContainer({ wikis }) {
  return (
    <div className="container mx-auto px-4 mt-10 md:px-10">
      <p className="text-xl font-bold text-[#3d3d3d] capitalize mb-2">
        Travel Guide
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {wikis?.map((wiki) => (
          <GuideCard
            key={wiki?.id}
            imgSrc={wiki?.image?.image_url}
            description={wiki?.short_body}
            title={wiki?.title}
            slug={wiki?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListGuideContainer;
