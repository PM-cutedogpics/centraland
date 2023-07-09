import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
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
        <AppShell header={<WebsiteNavbar />} navbar={<Sidebar />}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
