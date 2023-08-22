import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import HeaderSingBlog from "@/components/blog/HeaderSingBlog";
import Footer from "@/components/Footer/Footer";
import { baseUrl, fetchApi } from "../../utils/featchApi";
import OverviewPrivacyPolicy from "@/components/PrivacyPolicy/OverviewPrivacyPolicy";

function PrivacyPolicy({ menus, logo, footer, socials, privacy_page }) {
  const { image, title, meta, body } = privacy_page;
  console.log(privacy_page);
  return (
    <div>
      {" "}
      <Head>
        <title>{meta?.meta_title}</title>
        <meta name="description" content={meta?.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <HeaderSingBlog imgsrc={image?.image_url} title={title} />
      <OverviewPrivacyPolicy title={title} body={body} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default PrivacyPolicy;
export async function getStaticProps() {
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const privacy_page = await fetchApi(
    `${baseUrl}/pages/privacy-policy?tenant_id=9&language_id=5`
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
      menus: menus.rows,
      logo: logo.row,
      privacy_page: privacy_page.row,
      footer: footer.rows,
      socials: socials.rows,
    },
    revalidate: 10,
  };
}
