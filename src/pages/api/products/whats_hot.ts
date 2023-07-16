import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Obtain ALL COMPUTER PARTS from carousell
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "/json");

  var product_data = await fs.readFile(
    `${jsonDirectory}/carousell_computer_parts_small.json`,
    "utf-8"
  );
  product_data = JSON.parse(product_data);
  product_data = product_data.slice(0, 4);
  res.status(200).json(product_data);
}
