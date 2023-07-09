import Head from "next/head"
import ProductItem from "../components/ProductItem/ProductItem";
import { TextInput } from '@mantine/core';
import { useState } from "react";
import SearchIcon from "../components/Icons/SearchIcon";
import HomeChip from "../components/Chips/HomeChip";

export default function IndexPage() {
    const [searchVal, setSearchVal] = useState("");

    return ( 
    <>
        <Head>
            <title>Centraland</title>
        </Head>
      
        <section className="py-10">
            <div className="flex justify-center">
                <TextInput 
                    placeholder="Search" 
                    radius={10} 
                    value={searchVal}
                    className="w-1/2"
                    onChange = {(event) => {setSearchVal(event.currentTarget.value)}}
                    icon={<SearchIcon size={14} />}
                />
            </div>
        </section>

        {/* What's Hot Section */}
        <section className="">
            <div className="flex flex-col gap-5 px-20">
                <div className="flex justify-between items-center">
                    <h2 className="section-header">What&apos;s Hot?</h2>
                    <p className="text-app-mint-green underline">See more</p>
                </div>
                
                {/* Chips */}
                <div className="flex flex-wrap gap-3">
                    <HomeChip label="Graphic Cards" isActive={true}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                </div>
                
                <div className="grid grid-cols-4 flex-wrap gap-4">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    {/* <ProductItem /> */}
                </div>
            </div>            
        </section>

        {/* Newly Listed */}
        <section className="">
            <div className="flex flex-col gap-5 px-20">
                <div className="flex justify-between items-center">
                    <h2 className="section-header">Newly Listed</h2>
                    <p className="text-app-mint-green underline">See more</p>
                </div>
                
                {/* Chips */}
                <div className="flex flex-wrap gap-3">
                    <HomeChip label="Graphic Cards" isActive={true}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                    <HomeChip label="Graphic Cards" isActive={false}/>
                </div>
                
                <div className="grid grid-cols-4 flex-wrap gap-4">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    {/* <ProductItem /> */}
                </div>
            </div>            
        </section>
        
        {/* For You */}
        
        
    </> 
    );
}
 
