import FilterContainer from "@/components/Filter/FilterContainer";
import MainHead from "@/components/header/MainHead ";
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
    </div>
  );
}

export default index;
