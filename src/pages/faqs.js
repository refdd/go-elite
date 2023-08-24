import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import HeaderSingBlog from "@/components/blog/HeaderSingBlog";
import Footer from "@/components/Footer/Footer";
import { baseUrl, fetchApi } from "../../utils/featchApi";
import FAQs from "@/components/FAQs/FAQs";
function FAndQ({ menus, logo, footer, socials, faq_page, faqs }) {
  const { image, title, meta } = faq_page;
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
      <div className="mt-10">
        <FAQs faqs={faqs} faq_page={true} />
      </div>
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}

export default FAndQ;
export async function getStaticProps() {
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const faq_page = await fetchApi(
    `${baseUrl}/pages/faq_page?tenant_id=9&language_id=5`
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
    `${baseUrl}/faqs?tenant_id=9&language_id=5&viewInHome=1&status=active&paginate=10`
  );
  return {
    props: {
      menus: menus.rows,
      logo: logo.row,
      faq_page: faq_page.row,
      footer: footer.rows,
      socials: socials.rows,
      faqs: faqs.rows,
    },
    revalidate: 10,
  };
}
