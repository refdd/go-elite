import React from "react";
import CardBlog from "./CardBlog";

function ListBlogContainer({ articles }) {
  return (
    <div className="container  mx-auto px-4 mt-5 ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {articles?.map((article) => (
          <CardBlog
            key={article.id}
            article={article?.id}
            imgSrc={article?.image?.image_url}
            title={article?.title}
            slug={article?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ListBlogContainer;
