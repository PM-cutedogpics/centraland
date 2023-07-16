import Image from "next/image";
import ProductTag from "../ProductTag/ProductTag";
import "./ProductItem.scss";
import Link from "next/link";

// Component for product items
export interface ProductProps {
  product_name: string;
  product_price: string;
  product_link: string;
  product_image?: string;
  product_condition?: string;
}

export default function ProductItem(props: ProductProps) {
  return (
    <Link href={props.product_link} target="_blank">
      <div className="product-item--container flex flex-col items-start pb-4 cursor-pointer relative">
        <div className="item-overlay absolute bg-gray-400 z-10 transition w-full h-full opacity-0 hover:opacity-30"></div>
        <div className="aspect-square w-full relative">
          <Image
            src={
              props.product_image
                ? props.product_image
                : "/product-placeholder.jpg"
            }
            fill={true}
            sizes="200px"
            style={{
              objectFit: "cover",
            }}
            alt="Product Image"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col items-start px-4 mt-2 ">
          <div className="product-name--container">
            <h5>{props.product_name}</h5>
          </div>

          <p className="font-bold">{props.product_price}</p>

          {/* Tags and Source Logo */}
          <div className="flex justify-between self-end mt-3 w-full">
            <div className="flex flex-wrap gap-2">
              <ProductTag color="green" label="Like New" />
              <ProductTag color="red" label="Second Hand" />
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
  );
}
