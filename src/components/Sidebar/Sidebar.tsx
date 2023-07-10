// components/layout/Layout.tsx
import React, { PropsWithChildren } from 'react';
import {
	AppShell,
	MantineProvider,
	Aside,
	Checkbox,
	Center,
	Flex,
	TextInput,
} from '@mantine/core';
import { useState } from 'react';
import './sidebar.scss';

const Websites = [
	{
		website: 'Facebook',
		isChecked: false,
	},
	{
		website: 'Shopee',
		isChecked: false,
	},
	{
		website: 'Carousell',
		isChecked: false,
	},
	{
		website: 'Datablitz',
		isChecked: false,
	},
];

const Condition = [
	{
		condition: 'Brand New',
		isChecked: false,
	},
	{
		condition: 'Like New',
		isChecked: false,
	},
	{
		condition: 'Slightly Used',
		isChecked: false,
	},
	{
		condition: 'Well used',
		isChecked: false,
	},
];

//TODO: Do onchange
const Sidebar = (props: PropsWithChildren) => {
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
							<Checkbox label='Facebook' radius='xs' size='sm' />

							<Checkbox label='Shopee' radius='xs' size='sm' />

							<Checkbox label='Carousell' radius='xs' size='sm' />

							<Checkbox label='Datablitz' radius='xs' size='sm' />
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
