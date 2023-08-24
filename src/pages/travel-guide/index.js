import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import NavBar from "@/components/nav/NavBar";
import MainCardblog from "@/components/blog/MainCardblog";
import ListBlogContainer from "../../components/blog/ListBlogContainer";
import Footer from "@/components/Footer/Footer";
import ListGuideContainer from "@/components/guides/ListGuideContainer";

function ListTravelGuide({ pagesData, logo, menus, footer, socials, wikis }) {
  //   console.log(wikis);
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
      <ListGuideContainer wikis={wikis} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default ListTravelGuide;
export async function getStaticProps() {
  const pagesData = await fetchApi(
    `${baseUrl}/pages/blog_page?tenant_id=9&language_id=5`
  );
  const wikis = await fetchApi(
    `${baseUrl}/wikis?tenant_id=9&language_id=5&status=active&paginate=1000`
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
      wikis: wikis.rows,
      menus: menus.rows,
      logo: logo.row,
      footer: footer.rows,
      socials: socials.rows,
    },
    revalidate: 10,
  };
}
