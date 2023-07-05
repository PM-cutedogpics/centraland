import Head from "next/head"
import ProductItem from "../components/ProductItem/ProductItem";

export default function IndexPage() {
    return ( 
    <>
        <Head>
            <title>Centraland</title>
        </Head>
      
        {/* What's Hot Section */}
        <section className="container mx-auto">
            <div className="flex flex-col gap-3 bg-gray-200 px-20">
                <h2 className="section-header">What&apos;s Hot?</h2>
                
                <div className="flex gap-3">

                </div>
                
                <div className="flex gap-4">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    {/* <ProductItem /> */}
                </div>
            </div>            
        </section>

        {/* Newly Listed */}
        
        {/* For You */}
        
    </> 
    );
}
 
