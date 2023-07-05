import Image from 'next/image'
import ProductTag from "../ProductTag/ProductTag"
import "./ProductItem.scss"

// Component for product items
// TODO: Setup props
export default function ProductItem(props : Object) {
    return (
        <div className="flex flex-col items-start pb-4 product-item--container">
            <div>
                <Image
                    src="/test-product2.jpg"
                    width={259}
                    height={228}
                    alt="Product Image"
                    className="rounded-md"
                />
            </div>

            <div className="flex flex-col items-start px-4 mt-2 ">
                <h5>GTX 1050ti 4GB Graphics Card</h5>
                <p className="font-bold">PHP 5,500</p>

                {/* Tags and Source Logo */}
                <div className="flex justify-between  mt-3 w-full">
                    <div className="flex flex-wrap gap-2">
                        <ProductTag color="green" label="Like New"/>
                        <ProductTag color="red" label="Second Hand"/>
                        {/* <ProductTag color="red" label="Second Hand"/> */}
                    </div>

                    <div>
                        <Image
                            src="/brand-logos/carousell-logo.png"
                            width={30}
                            height={30}
                            alt="Brand Logo"
                            className="rounded-md"
                        />
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}