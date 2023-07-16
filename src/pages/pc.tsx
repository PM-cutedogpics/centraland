import Head from "next/head";
import React, { useState } from "react";
import ProductItem from "../components/ProductItem/TempProductItem";
import { Box, SimpleGrid, TextInput } from "@mantine/core";
import SearchIcon from "../components/Icons/SearchIcon";

export default function PCPage() {
  const [searchVal, setSearchVal] = useState("");
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
      {/* <section className='py-10'>
				<form action='/pc'>
					<div className='flex justify-center'>
						<TextInput
							placeholder='Search'
							radius={10}
							value={searchVal}
							className='w-1/2'
							onChange={(event) => {
								setSearchVal(event.currentTarget.value);
							}}
							icon={<SearchIcon size={14} />}
						/>
					</div>
				</form>
			</section> */}

      <div className="pb-8">
        <p className="font-semibold text-2xl">PC</p>
        <p className="text-sm">
          Find new and used PC parts for sale in the Philippines.
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
        {Array.apply(null, Array(30)).map((_item, index) => (
          <ProductItem key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
