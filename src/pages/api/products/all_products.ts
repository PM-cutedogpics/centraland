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
  const sourceDirectories = await fs.readdir(jsonDirectory);
  var allProducts: any[] = []
  
  // Iterate through all sources
  await Promise.all(sourceDirectories.map(async (source) => {
    // Add all data from each source
    var sourceDataList = await fs.readdir(`${jsonDirectory}/${source}`);
    
    await Promise.all(sourceDataList.map(async (file) => {
      var products = await fs.readFile(`${jsonDirectory}/${source}/${file}`, "utf-8");
      
      allProducts = [...allProducts, ...JSON.parse(products)];
    }))
  }))

  res.status(200).json(allProducts);
}