import Image from 'next/image'
import ProductTag from "../ProductTag/ProductTag"
import "./ProductItem.scss"
import Link from 'next/link';

// Dummy Data
export default function TempProductItem() {
    return (
        <Link href={"https://www.carousell.ph/p/gtx-1050ti-4gb-graphics-card-1185857854/"}>
            <div className="product-item--container flex flex-col items-start pb-4 cursor-pointer relative">
                <div className="item-overlay absolute bg-gray-400 z-10 transition w-full h-full opacity-0 hover:opacity-30"></div>
                <div className="aspect-square w-full relative">
                    <Image
                        src={"/test-product2.jpg"}
                        fill={true}
                        style={{
                            objectFit: "cover"
                        }}
                        alt="Product Image"
                        className="rounded-md"
                    />
                </div>

                <div className="flex flex-col items-start px-4 mt-2 ">
                    <div className="product-name--container">
                        <h5>
                            GTX 1050ti 4GB Graphics Card
                        </h5>
                    </div>
                    
                    <p className="font-bold">PHP 500</p>

                    {/* Tags and Source Logo */}
                    <div className="flex justify-between self-end mt-3 w-full">
                        <div className="flex flex-wrap gap-2">
                            <ProductTag color="green" label="Like New"/>
                            <ProductTag color="red" label="Second Hand"/>
                            {/* <ProductTag color="red" label="Second Hand"/> */}
                        </div>

                        <div>
                            <Image
                                src={"/brand-logos/carousell.png"}
                                width={30}
                                height={30}
                                alt="Brand Logo"
                                className="rounded-md"
                            />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}