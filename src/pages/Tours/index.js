import FilterContainer from "@/components/Filter/FilterContainer";
import From from "@/components/From/From";
import MainHead from "@/components/header/MainHead ";
import ListTourContainer from "@/components/listTour/ListTourContainer";
import NavBar from "@/components/nav/NavBar";
import Head from "next/head";
import React from "react";

function index() {
  return (
    <div>
      <Head>
        <title>list tour </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MainHead />
      <FilterContainer />
      <div className="container mx-auto px-4    mt-10 grid grid-cols-1 gap-10 md:grid-cols-7">
        <div className="md:col-span-4">
          <ListTourContainer />
        </div>

        <div className="md:col-span-3">
          <From />
        </div>
      </div>
    </div>
  );
}

export default index;