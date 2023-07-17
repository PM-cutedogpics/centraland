import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { PRODUCT_DATA_LENGTH } from "./helpers/constants";

/**
 * Retrieve PC products
 * @param req
 * @param res
 */

interface RequestQuery {
  source?: string;
  condition?: string;
  minPrice?: string;
  maxPrice?: string;
  page? : number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "/json");

  const data = await fs.readFile(`${jsonDirectory}/all.json`, "utf-8");
  const allProducts = JSON.parse(data);

  // Obtain query params, if any
  const {source, condition, minPrice, maxPrice, page} : RequestQuery = req.query;
  const pageNumber = page ?? 0;
  // Filter by PC Parts
  var pcProducts = allProducts.filter((product: any) => 
    product.product_type === "pc"  
  );

  // Other filters, in request (if any)
  pcProducts = pcProducts.filter((product: any) => {
    if (source && source !== "" && source !== product.source) 
      return false;

    if (condition && condition !== "" && condition !== product.condition)
      return false;

    // If max price == 0, then no price range given
    if (maxPrice && parseInt(maxPrice) !== 0) {
      // Exclude if not in range
      if (minPrice && product.price < parseInt(minPrice))
        return false;

      if (maxPrice > product.price)
        return false;
    }
    return true;
  })
 
  // Page
  pcProducts = pcProducts.slice(pageNumber * PRODUCT_DATA_LENGTH, (PRODUCT_DATA_LENGTH * pageNumber) + PRODUCT_DATA_LENGTH)

  res.status(200).json(pcProducts);
}
