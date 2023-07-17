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
  page?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "/json");

  const data = await fs.readFile(`${jsonDirectory}/all.json`, "utf-8");
  const allProducts = JSON.parse(data);

  var games = allProducts.filter(
    (product: any) => product.product_type === "peripherals"
  );

  res.status(200).json(games);
}
