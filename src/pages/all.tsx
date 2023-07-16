import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  AppShell,
  MantineProvider,
  Aside,
  TextInput,
  SimpleGrid,
  Box,
} from "@mantine/core";
import SearchIcon from "../components/Icons/SearchIcon";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductItem, {
  ProductProps,
} from "../components/ProductItem/ProductItem";
import TempProductItem from "../components/ProductItem/TempProductItem";
import { useRouter } from "next/router";

export default function All() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const searchParam = router.query.search  ? router.query.search : "";

  useEffect(() => {
    setLoading(true);
    fetch("/api/products/all_products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  console.log(items)
  const filteredProducts = React.useMemo(() => {
    const filtered =
      items.filter((product: ProductProps) =>
        product.product_name
          .toLowerCase()
          .includes((searchParam as string).toLowerCase())
      ) ?? [];
    return filtered;
  }, [items, searchParam]);

  return (
    <Box
      w="75%"
      sx={{
        left: "220px",
        position: "absolute",
      }}
    >
      <Head>
        <title>CentralandPH</title>
      </Head>

      <div className="pb-8">
        <p className="font-semibold text-2xl">All</p>
        <p className="text-sm">
          Find various pre-loved games and PC parts for sale in the Philippines.
        </p>
      </div>
      <SimpleGrid
        cols={5}
        spacing="lg"
        verticalSpacing="xl"
        sx={{
          placeItems: "start",
          alignItems: "start",
        }}
        breakpoints={[
          { maxWidth: "120rem", cols: 4, spacing: "xs" },
          { maxWidth: "100rem", cols: 3, spacing: "xs" },
          { maxWidth: "90rem", cols: 2, spacing: "xs" },
          { maxWidth: "70rem", cols: 1, spacing: "xs" },
        ]}
      >
        {filteredProducts.map((item: ProductProps, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
