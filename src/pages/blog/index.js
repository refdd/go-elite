import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import NavBar from "@/components/nav/NavBar";
import MainCardblog from "@/components/blog/MainCardblog";
import ListBlogContainer from "../../components/blog/ListBlogContainer";
import Footer from "@/components/Footer/Footer";

function ListBlog({
  pagesData,
  logo,
  menus,
  articles,
  mainblog,
  footer,
  socials,
}) {
  return (
    <div>
      {" "}
      <Head>
        <title>{"list Bolg"}</title>
        <meta name="description" content={"meta?.meta_description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <MainCardblog
        imgSrc={mainblog[0]?.image?.image_url}
        title={mainblog[0]?.title}
        description={mainblog[0]?.short_body}
        slug={mainblog[0]?.slug}
      />
      <ListBlogContainer articles={articles} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default ListBlog;
export async function getStaticProps() {
  const pagesData = await fetchApi(
    `${baseUrl}/pages/blog_page?tenant_id=9&language_id=5`
  );
  const mainblog = await fetchApi(
    `${baseUrl}/articles?tenant_id=9&language_id=5&status=active&paginate=1`
  );
  const articles = await fetchApi(
    `${baseUrl}/articles?tenant_id=9&language_id=5&status=active&paginate=1000`
  );
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const logo = await fetchApi(
    `${baseUrl}/settings/logo?tenant_id=9&language_id=5`
  );
  const footer = await fetchApi(
    `${baseUrl}/footer?tenant_id=9&language_id=5&status=active`
  );
  const socials = await fetchApi(
    `${baseUrl}/socials?tenant_id=9&language_id=5&status=active`
  );
  return {
    props: {
      pagesData: pagesData.row,
      articles: articles.rows,
      mainblog: mainblog.rows,
      menus: menus.rows,
      logo: logo.row,
      footer: footer.rows,
      socials: socials.rows,
    },
    revalidate: 10,
  };
}
