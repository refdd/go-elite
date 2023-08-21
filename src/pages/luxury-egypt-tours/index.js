import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import MainHead from "@/components/header/MainHead ";
import ListTourContainer from "@/components/listTour/ListTourContainer";
import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const FilterContainer = dynamic(() =>
  import("../../components/Filter/FilterContainer.jsx")
);
const From = dynamic(() => import("../../components/From/From.jsx"));
function index({ packages, menus, logo }) {
  // console.log(packages);
  return (
    <div>
      <Head>
        <title>list tour </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <MainHead />
      <FilterContainer />
      <div className="container mx-auto px-4 md:px-10    mt-10 grid grid-cols-1 gap-10 md:grid-cols-7">
        <div className="md:col-span-4">
          <ListTourContainer packages={packages} />
        </div>
        <div className="md:col-span-3">
          <From />
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  );
}

export default index;
export async function getStaticProps() {
  const packages = await fetchApi(
    `${baseUrl}/packages/?tenant_id=9&language_id=5&&viewInHome=1&status=active`
  );
  const menus = await fetchApi(`${baseUrl}/menus?tenant_id=9&language_id=5`);
  const logo = await fetchApi(
    `${baseUrl}/settings/logo?tenant_id=9&language_id=5`
  );
  return {
    props: {
      packages: packages.rows,
      menus: menus.rows,
      logo: logo.row,
    },
    revalidate: 10,
  };
}
