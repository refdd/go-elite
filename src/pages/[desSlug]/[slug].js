import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import From from "@/components/From/From";
import NavBar from "@/components/nav/NavBar";
import HeaderSingleTour from "@/components/singelTour/HeaderSingleTour";
import Itinerary from "@/components/singelTour/Itinerary";
import Overview from "@/components/singelTour/Overview";
import PricesAccommodation from "@/components/singelTour/PricesAccommodation";
import Trip_Information from "@/components/singelTour/Trip_Information";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";
import dynamic from "next/dynamic";
const SingleTaps = dynamic(() =>
  import("../../components/singelTour/SingleTaps")
);
const LeaveReview = dynamic(() =>
  import("../../components/singelTour/LeaveReview")
);
function Singeltour({ singletour, faqs, menus, logo, footer, socials }) {
  const [tapsValue, setTapsValue] = React.useState(0);

  const handleChangeTaps = (event, newValue) => {
    setTapsValue(newValue);
  };
  const {
    image,
    title,
    duration,
    tour_type,
    stars,
    galleries,
    body,
    inclusion,
    exclusion,
    itineraries,
    accommodations,
    TripInformation,
    meta,
  } = singletour;
  console.log(singletour);
  return (
    <div>
      <Head>
        <title>{meta?.meta_title}</title>
        <meta name="description" content={meta?.meta_keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menus={menus} logo={logo} />
      <HeaderSingleTour
        image={image}
        title={title}
        Duration={duration}
        tour_type={tour_type}
        reating={stars}
        galleries={galleries}
      />
      <SingleTaps value={tapsValue} handleChange={handleChangeTaps} />
      <div className="container mx-auto px-4 mt-10 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
            {tapsValue == 0 && (
              <>
                <Overview
                  desc={body}
                  inclusion={inclusion}
                  exclusion={exclusion}
                />
                <Itinerary itineraries={itineraries} />
                <PricesAccommodation accommodations={accommodations} />
                <Trip_Information allTripInformation={TripInformation} />
              </>
            )}
            {tapsValue == 1 && <Itinerary itineraries={itineraries} />}
            {tapsValue == 2 && (
              <PricesAccommodation accommodations={accommodations} />
            )}
            {tapsValue == 3 && (
              <Trip_Information allTripInformation={TripInformation} />
            )}
            <LeaveReview />
          </div>
          <div className="md:col-span-1">
            <From />
          </div>
        </div>
      </div>
      <FAQs faqs={faqs} />
      <Footer logo={logo} footer={footer} socials={socials} />
    </div>
  );
}
export default Singeltour;
export async function getServerSideProps({ params }) {
  const slug = params?.slug || "";

  const singletour = await fetchApi(
    `${baseUrl}/packages/${slug}?tenant_id=9&language_id=5`
  );
  const faqs = await fetchApi(
    `${baseUrl}/faqs?tenant_id=9&language_id=5&viewInHome=1&status=active&paginate=5`
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
      singletour: singletour.row,
      faqs: faqs.rows,
      menus: menus.rows,
      footer: footer.rows,
      socials: socials.rows,
      logo: logo.row,
    },
  };
}
