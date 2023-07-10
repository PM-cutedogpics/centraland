import Head from 'next/head';
import React, { useState } from 'react';
import ProductItem from '../components/ProductItem/TempProductItem';
import { TextInput } from '@mantine/core';
import SearchIcon from '../components/Icons/SearchIcon';

export default function Consoles() {
	const [searchVal, setSearchVal] = useState('');
	return (
		<>
			<Head>
				<title>Consoles</title>
			</Head>

			<section className='py-10'>
				<form action='/consoles'>
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
					<p className='font-semibold text-2xl'>Consoles</p>
					<p className='text-sm'>
						Find new and used consoles for sale in the Philippines.
					</p>
				</div>

				<div className='flex gap-3'></div>

				<div className='flex gap-4 pb-6'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					{/* <ProductItem /> */}
				</div>

				<div className='flex gap-4 pb-6'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					{/* <ProductItem /> */}
				</div>

				<div className='flex gap-4 pb-6'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					{/* <ProductItem /> */}
				</div>
			</section>
		</>
	);
}
