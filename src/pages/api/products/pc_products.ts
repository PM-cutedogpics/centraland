import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Retrieve PC products
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "/json");
  const sourceDirectories = await fs.readdir(jsonDirectory);
  var pcProducts: any[] = []
  
  // Iterate through all sources
  await Promise.all(sourceDirectories.map(async (source) => {
    var sourceDataList = await fs.readdir(`${jsonDirectory}/${source}`);
  
    // Obtain only PC parts
    await Promise.all(sourceDataList.map(async (file) => {
      if (file.includes("computer_parts")) {
        var products = await fs.readFile(`${jsonDirectory}/${source}/${file}`, "utf-8");
        pcProducts = [...pcProducts, ...JSON.parse(products)];
      }
    }));
  }));

  res.status(200).json(pcProducts);
}
