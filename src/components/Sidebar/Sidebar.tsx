	// components/layout/Layout.tsx
	import React, { PropsWithChildren } from 'react';
	import {
		Aside,
		Checkbox,
		TextInput,
	} from '@mantine/core';
	import './sidebar.scss';

	export enum Websites {
		Facebook,
		Shopee,
		Carousell,
		Lazada,
		TipidPC,
		Gilmore
	}

	const Sidebar = (props: any) => {
		return (
			<form action=''>
				<Aside fixed={false} position={{ top: 0, left: 0 }} width={{ base: 200 }}>
					{/* First section with normal height (depends on section content) */}
					<Aside.Section className='pt-5 pb-1 ml-5 text-xl font-bold'>
						Website
					</Aside.Section>

					<div className='ml-5'>
						<div className='flex pb-6'>
							<div className='flex-col flex gap-2'>
								<Checkbox 
									label='Facebook' 
									radius='xs' 
									size='sm' 
									checked={props.websiteFilter === "Facebook"}
									onChange={() => props.onWebsiteFilterChange("Facebook")}	
								/>

								<Checkbox 
									label='Shopee'
									radius='xs' 
									size='sm' 
									checked={props.websiteFilter === "Shopee"}
									onChange={() => props.onWebsiteFilterChange("Shopee")}
								/>

								<Checkbox 
									label='Carousell' 
									radius='xs' 
									size='sm' 
									checked={props.websiteFilter === "Carousell"} 
									onChange={() => props.onWebsiteFilterChange("Carousell")}
								/>

								<Checkbox 
									label='Datablitz' 
									radius='xs' 
									size='sm' 
									checked={props.websiteFilter === "Datablitz"} 
									onChange={() => props.onWebsiteFilterChange("Datablitz")}
								/>
							</div>
						</div>

						<Aside.Section className='pb-1 text-xl font-bold'>
							Condition
						</Aside.Section>

						<div className='flex pb-6'>
							<div className='flex-col flex gap-1'>
								<Checkbox label='Brand New' radius='xs' size='sm' />

								<Checkbox label='Like New' radius='xs' size='sm' />

								<Checkbox label='Slightly Used' radius='xs' size='sm' />

								<Checkbox label='Well Used' radius='xs' size='sm' />
							</div>
						</div>
						<Aside.Section className='pb-1 text-xl font-bold'>
							Price
						</Aside.Section>

						<div className='pb-6 flex items-center gap-1'>
							<TextInput variant='default' placeholder='Min' />
							<p className='px-1'>to</p>
							<TextInput variant='default' placeholder='Max' />
						</div>
					</div>
					{/* {Websites.map(({ website, isChecked }, i) => (
				<div key={i}>
						<Checkbox
						size="xs"
						//id={`custom-checkbox-${i}`}
						// onChange={() => handleChange(isChecked, i)}
					/>
						<span>{website}</span>
				</div>
				))} */}
					<button className='button !ml-3'>Apply</button>
				</Aside>
			</form>
		);
	};

	export default Sidebar;
