import Head from "next/head";
import { AppShell, MantineProvider, Aside } from "@mantine/core";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductItem from "../components/ProductItem/ProductItem";
export default function All() {
  return (
    <>
      <Head>
        <title>CentralandPH</title>
      </Head>

      <section className="container mx-auto absolute left-60 top-[60px]">
        <div className="flex gap-3"></div>

        <div className="flex gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          {/* <ProductItem /> */}
        </div>
      </section>
    </>
  );
}
