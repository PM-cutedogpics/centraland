import Head from "next/head"
import ProductItem, { ProductProps } from "../components/ProductItem/ProductItem";
import { TextInput } from '@mantine/core';
import { useState, useEffect } from "react";
import SearchIcon from "../components/Icons/SearchIcon";
import HomeChip from "../components/Chips/HomeChip";
import Link from 'next/link';

export default function IndexPage() {
    const [searchVal, setSearchVal] = useState("");
    const [hotItems, setHotItems] = useState([]);
    const [isLoading, setLoading] = useState(false)

    // Update hotItems whenever data changes
    useEffect(() => {
        setLoading(true);
        fetch('/api/products/whats_hot')
            .then((res) => res.json())
            .then((data) => {
                setHotItems(data);
                setLoading(false);
                console.log(hotItems)
            })
        
    }, []);

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
                    <Link href="/all">
                        <p className="text-app-mint-green underline">See more</p>
                    </Link>
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
                    {
                        hotItems.map((item : ProductProps, index) => (
                            <ProductItem key={index} {...item} />
                        ))
                    }
                </div>
            </div>            
        </section>

        {/* For You */}
        
        
    </> 
    );
}
