import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function App(props: AppProps) {
  const { Component, pageProps, router } = props;

  const showSidebar = () : boolean => {
    // List of pages where sidebar is disabled
    const noSidebarPages = ["/"];
    return noSidebarPages.includes(router.pathname) ? false : true;
  }

  // Create React Element for Sidebar if Sidebar should exist for current page, passes to appshell
  const SidebarRE = showSidebar() ? <Sidebar /> : <></>

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
        <AppShell header={<WebsiteNavbar />} aside={SidebarRE}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
