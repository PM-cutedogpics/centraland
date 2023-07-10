import Head from 'next/head';
import React, { useState } from 'react';
import { AppShell, MantineProvider, Aside, TextInput } from '@mantine/core';
import SearchIcon from '../components/Icons/SearchIcon';
import Sidebar from '@/components/Sidebar/Sidebar';
import ProductItem from '../components/ProductItem/ProductItem';
import TempProductItem from "../components/ProductItem/TempProductItem";

export default function All() {
	const [searchVal, setSearchVal] = useState('');
	return (
		<>
			<Head>
				<title>CentralandPH</title>
			</Head>

			<section className='py-10'>
				<form action='/all'>
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
			</section>
      
			<section className='container mx-auto absolute left-60 top-[160px]'>
				<div className='pb-8'>
					<p className='font-semibold text-2xl'>All</p>
					<p className='text-sm'>
						Find various pre-loved games and PC parts for sale in the
						Philippines.
					</p>
				</div>

				<div className='flex gap-3'></div>

				<div className='flex gap-4 pb-6'>
					<TempProductItem />
          <TempProductItem />
          <TempProductItem />
				</div>

				<div className='flex gap-4 pb-6'>
					<TempProductItem />
          <TempProductItem />
          <TempProductItem />
				</div>

				<div className='flex gap-4 pb-6'>
					<TempProductItem />
          <TempProductItem />
          <TempProductItem />
				</div>
			</section>
		</>
	);
}
