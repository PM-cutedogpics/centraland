import Head from "next/head";
import React, { useState } from "react";
import TempProductItem from "../components/ProductItem/TempProductItem";
import { SimpleGrid, TextInput } from "@mantine/core";
import SearchIcon from "../components/Icons/SearchIcon";

export default function Games() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>

      {/* <section className='py-10'>
				<form action='/games'>
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

      <section className="container mx-auto absolute left-60 ">
        <div className="pb-8">
          <p className="font-semibold text-2xl">Games</p>
          <p className="text-sm">
            Find new and used games for sale in the Philippines.
          </p>
        </div>

        <SimpleGrid
          cols={5}
          spacing="lg"
          verticalSpacing="xl"
          sx={{
            placeItems: "center",
            alignItems: "start",
          }}
        >
          {Array.apply(null, Array(30)).map((_item, index) => (
            <TempProductItem key={index} />
          ))}
        </SimpleGrid>
      </section>
    </>
  );
}
