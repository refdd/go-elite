import FAQs from "@/components/FAQs/FAQs";
import Footer from "@/components/Footer/Footer";
import From from "@/components/From/From";
import NavBar from "@/components/nav/NavBar";
import HeaderSingleTour from "@/components/singelTour/HeaderSingleTour";
import Itinerary from "@/components/singelTour/Itinerary";
import LeaveReview from "@/components/singelTour/LeaveReview";
import Overview from "@/components/singelTour/Overview";
import PricesAccommodation from "@/components/singelTour/PricesAccommodation";
import SingleTaps from "@/components/singelTour/SingleTaps";
import Trip_Information from "@/components/singelTour/Trip_Information";
import Head from "next/head";
import React from "react";
import { baseUrl, fetchApi } from "../../../utils/featchApi";

function Singeltour({ singletour, faqs }) {
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
  } = singletour;
  console.log(accommodations);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeaderSingleTour
        image={image}
        title={title}
        Duration={duration}
        tour_type={tour_type}
        reating={stars}
        galleries={galleries}
      />
      <SingleTaps value={tapsValue} handleChange={handleChangeTaps} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
            {tapsValue == 0 && (
              <Overview
                desc={body}
                inclusion={inclusion}
                exclusion={exclusion}
              />
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
      <Footer />
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
  return {
    props: {
      singletour: singletour.row,
      faqs: faqs.rows,
    }, // will be passed to the page component as props
  };
}
