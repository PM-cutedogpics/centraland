import Head from "next/head";
import { AppShell, MantineProvider, Aside } from "@mantine/core";
import Sidebar from "@/components/Sidebar/Sidebar";
import TempProductItem from "../components/ProductItem/TempProductItem";
export default function All() {
  return (
    <>
      <Head>
        <title>CentralandPH</title>
      </Head>

      <section className="container mx-auto absolute left-60 top-[60px]">
        <div className="flex gap-3"></div>

        <div className="flex gap-4">
          <TempProductItem />
          <TempProductItem />
          <TempProductItem />
          {/* <ProductItem /> */}
        </div>
      </section>
    </>
  );
}
