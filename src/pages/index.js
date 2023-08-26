import NavBar from "@/components/nav/NavBar";
import RowTour from "@/components/Tour/RowTour ";
import RowDestination from "@/components/destination/RowDestination";
import Head from "next/head";
import { baseUrl, fetchApi } from "../../utils/featchApi";
import Reviews from "@/components/Reviews/Reviews";
import FixdButton from "@/components/buttons/FixdButton";
import dynamic from "next/dynamic";
import HeaderVideo from "@/components/header/HeaderVideo";
const FAQs = dynamic(() => import("../components/FAQs/FAQs"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const RowGuides = dynamic(() => import("../components/guides/RowGuides"));
export default function Home({
  packages,
  destinations,
  wikis,
  faqs,
  allReviews,
  menus,
  sliders,
  logo,
  pages,
  footer,
  socials,
}) {
  return (
    <div>
      <Head>
        <title>{pages[2]?.meta?.meta_title}</title>
        <meta name="description" content={pages[2]?.meta?.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <HeaderVideo />
      <RowTour packages={packages} />
      <RowDestination destinations={destinations} />
      <RowGuides wikis={wikis} />
      <Reviews allReviews={allReviews} />
      <FAQs faqs={faqs} />
      <FixdButton />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}
export async function getStaticProps() {
  const packages = await fetchApi(
    `${baseUrl}/packages/?tenant_id=9&language_id=5&&viewInHome=1&status=active`
  );
  const destinations = await fetchApi(
    `${baseUrl}/destinations?tenant_id=9&language_id=5&status=active`
  );
  const wikis = await fetchApi(
    `${baseUrl}/wikis?tenant_id=9&language_id=5&status=active&paginate=5`
  );
  const faqs = await fetchApi(
    `${baseUrl}/faqs?tenant_id=9&language_id=5&viewInHome=1&status=active&paginate=5`
  );
  const allReviews = await fetchApi(
    `${baseUrl}/reviews?tenant_id=9&language_id=5`
  );
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const sliders = await fetchApi(
    `${baseUrl}/sliders?tenant_id=9&language_id=5&status=active`
  );
  const logo = await fetchApi(
    `${baseUrl}/settings/logo?tenant_id=9&language_id=5`
  );
  const pages = await fetchApi(`${baseUrl}/pages?tenant_id=9&language_id=5`);
  const footer = await fetchApi(
    `${baseUrl}/footer?tenant_id=9&language_id=5&status=active`
  );
  const socials = await fetchApi(
    `${baseUrl}/socials?tenant_id=9&language_id=5&status=active`
  );
  return {
    props: {
      packages: packages.rows,
      destinations: destinations.rows,
      wikis: wikis.rows,
      faqs: faqs.rows,
      allReviews: allReviews.rows,
      menus: menus.rows,
      sliders: sliders.rows,
      logo: logo.row,
      pages: pages.rows,
      footer: footer.rows,
      socials: socials.rows,
    },
    revalidate: 10,
  };
}
