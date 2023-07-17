import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useState } from "react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const showSidebar = router.pathname !== "/";

  const [websiteFilter, setWebsiteFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);

  const handleWebsiteFilterChange = (value : string) => {
    setWebsiteFilter(value);
  };

  const handleConditionFilterChange = (value : string) => {
    setConditionFilter(value);
  };

  const handleMinPriceFilterChange = (value : number) => {
    setMinPriceFilter(value);
  };

  const handleMaxPriceFilterChange = (value: number) => {
    setMaxPriceFilter(value);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/cph-logo.png" />
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AppShell
          header={<WebsiteNavbar />}
          navbar={
            showSidebar ? 
              <Sidebar websiteFilter={websiteFilter}
                       conditionFilter={conditionFilter}
                       minPriceFilter={minPriceFilter}
                       maxPriceFilter={maxPriceFilter}
                       onWebsiteFilterChange={handleWebsiteFilterChange}
                       onConditionFilterChange={handleConditionFilterChange}
                       onMinPriceFilterChange={handleMinPriceFilterChange}
                       onMaxPriceFilterChange={handleMaxPriceFilterChange}/> 
              : <></>}
        >
          <Component {...pageProps} 
            websiteFilter={websiteFilter}
            conditionFilter={conditionFilter}
            minPriceFilter={minPriceFilter}
            maxPriceFilter={maxPriceFilter}
          />
        </AppShell>
      </MantineProvider>
    </>
  );
}
