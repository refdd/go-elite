import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import MainHead from "@/components/header/MainHead ";
import ListTourContainer from "@/components/listTour/ListTourContainer";
import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import From from "@/components/From/From";

function ListDestination({
  packages,
  menus,
  logo,
  footer,
  socials,
  faqs,
  destinations,
}) {
  const { image, meta, title } = destinations;
  return (
    <div>
      <Head>
        <title>{meta?.meta_title}</title>
        <meta name="description" content={meta?.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <MainHead imgsrc={image?.image_url} title={title} />

      <div className="container mx-auto px-4 md:px-10    mt-10 grid grid-cols-1 gap-10 md:grid-cols-8">
        <div className="md:col-span-5">
          <ListTourContainer packages={packages} />
        </div>
        <div className="md:col-span-3">
          <From />
        </div>
      </div>
      <FAQs faqs={faqs} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}
export default ListDestination;
export async function getServerSideProps({ params }) {
  const packages = await fetchApi(
    `${baseUrl}/packages?tenant_id=9&language_id=5&destination_slug=${params.desSlug}&viewInDestomatopmHome=1&destinations_ids=&duration_id=&min_price=&max_price=&price_sort=asc&keyword=&type=&paginate=50`
  );
  const destinations = await fetchApi(
    `${baseUrl}/destinations/${params.desSlug}?tenant_id=9&language_id=5`
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
  const faqs = await fetchApi(
    `${baseUrl}/faqs?tenant_id=9&language_id=5&viewInHome=1&status=active&paginate=5`
  );
  return {
    props: {
      packages: packages.rows,
      menus: menus.rows,
      logo: logo.row,
      destinations: destinations.row,
      footer: footer.rows,
      socials: socials.rows,
      faqs: faqs.rows,
    },
  };
}
