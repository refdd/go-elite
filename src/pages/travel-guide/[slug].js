import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import HeaderSingBlog from "@/components/blog/HeaderSingBlog";
import OverViewBlog from "@/components/blog/OverViewBlog";
import Footer from "@/components/Footer/Footer";
import OverviewGuide from "@/components/guides/OverviewGuide";
import RalatedTour from "@/components/helper/RalatedTour";
import FAQs from "@/components/FAQs/FAQs";

function SingleGuide({ menus, logo, Singelwikis, footer, socials, faqs }) {
  const { image, title, meta, items, packages } = Singelwikis;
  //   console.log(Singelwikis);
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
      <div className="container  mx-auto px-4 mt-10 ">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-6">
          <OverviewGuide items={items} />
          <RalatedTour packages={packages} />
        </div>
      </div>
      <FAQs faqs={faqs} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default SingleGuide;
export async function getServerSideProps({ params }) {
  const slug = params?.slug || "";
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const Singelwikis = await fetchApi(
    `${baseUrl}/wikis/${slug}?tenant_id=9&language_id=5&status=active`
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
  const faqs = await fetchApi(
    `${baseUrl}/faqs?tenant_id=9&language_id=5&viewInHome=1&status=active&paginate=5`
  );
  return {
    props: {
      Singelwikis: Singelwikis.row,
      menus: menus.rows,
      logo: logo.row,
      footer: footer.rows,
      socials: socials.rows,
      faqs: faqs.rows,
    },
  };
}
