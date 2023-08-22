import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import HeaderSingBlog from "@/components/blog/HeaderSingBlog";
import OverViewBlog from "@/components/blog/OverViewBlog";
import Footer from "@/components/Footer/Footer";

function SingelBlog({ menus, logo, SingelBlogData, footer, socials }) {
  const { image, title, items } = SingelBlogData;
  console.log(SingelBlogData);
  return (
    <div>
      {" "}
      <Head>
        {/* <title>{meta?.meta_title}</title> */}
        {/* <meta name="description" content={meta?.meta_description} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <HeaderSingBlog imgsrc={image?.image_url} title={title} />
      <OverViewBlog items={items} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default SingelBlog;
export async function getServerSideProps({ params }) {
  const slug = params?.slug || "";
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const SingelBlogData = await fetchApi(
    `${baseUrl}/articles/${slug}?tenant_id=9&language_id=5`
  );
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
      SingelBlogData: SingelBlogData.row,
      menus: menus.rows,
      logo: logo.row,
      footer: footer.rows,
      socials: socials.rows,
    },
  };
}
