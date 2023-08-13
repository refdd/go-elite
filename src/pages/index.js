import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav/NavBar";
import HeaderVideo from "@/components/header/HeaderVideo";
import RowTour from "@/components/Tour/RowTour ";
import RowDestination from "@/components/destination/RowDestination";
import RowOffers from "@/components/offers/RowOffers";
import Head from "next/head";
import RowGuides from "@/components/guides/RowGuides";
import RequestQuote from "@/components/RequestQuote/RequestQuote";
import Trustus from "@/components/Trustus/Trustus";
import image1 from "../../public/assets/image/tourimage (1).webp";
import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import { baseUrl, fetchApi } from "../../utils/featchApi";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ packages }) {
  return (
    <div>
      <Head>
        <title>go elite </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeaderVideo />
      <RowTour packages={packages} />
      <RowDestination />
      <RowOffers />
      <RowGuides />
      <RequestQuote />
      <Trustus />
      <FAQs />
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const packages = await fetchApi(
    `${baseUrl}/packages/?tenant_id=9&language_id=5&&viewInHome=1&status=active`
  );
  return {
    props: {
      packages: packages.rows,
    },
  };
}
