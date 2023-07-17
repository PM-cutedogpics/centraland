import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductItem, { ProductProps } from "../components/ProductItem/ProductItem";
import { Box, SimpleGrid, TextInput } from "@mantine/core";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PCPage(props : any) {
  const [items, setItems] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const searchParam = router.query.search  ? router.query.search : "";
  const [page, setPage] = useState(1);

  // Extract sidebar filters, state found in _app.tsx
  const { websiteFilter, conditionFilter, minPriceFilter, maxPriceFilter } = props;
  
  // Used for infinite scrolling
  const fetchData = () => {
    const nextPage = page + 1;
    fetch(`/api/products/pc_products?page=${nextPage}&source=${websiteFilter}&condition=${conditionFilter}&minPrice=${minPriceFilter}&maxPrice=${maxPriceFilter}`)
    .then((res) => res.json())
    .then((data) => {
      setItems((prevItems) => [...prevItems, ...data]);
      setPage(nextPage);
    });
  }

  // Filter changes, reset data
  useEffect(() => {
    setLoading(true);
    setItems([]);
    setPage(1);
    fetch(`/api/products/pc_products?source=${websiteFilter}&condition=${conditionFilter}&minPrice=${minPriceFilter}&maxPrice=${maxPriceFilter}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [websiteFilter, conditionFilter, minPriceFilter, maxPriceFilter]);

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
        <title>PC Parts</title>
      </Head>

      <div className="pb-8">
        <p className="font-semibold text-2xl">PC</p>
        <p className="text-sm">
          Find new and used PC parts for sale in the Philippines.
        </p>
      </div>
      <InfiniteScroll
          dataLength={filteredProducts.length}
          hasMore={true}
          next={fetchData}
          loader={<h4>Loading</h4>}
        >
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
              <ProductItem key={index} {...item}/>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}
