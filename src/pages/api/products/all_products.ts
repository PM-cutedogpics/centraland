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

  const computer_parts = await fs.readFile(
    `${jsonDirectory}/carousell_computer_parts_small.json`,
    "utf-8"
  );

  const keyboards = await fs.readFile(
    `${jsonDirectory}/carousell_keyboards_small.json`,
    "utf-8"
  );

  const monitors = await fs.readFile(
    `${jsonDirectory}/carousell_monitors_small.json`,
    "utf-8"
  );

  const mouse = await fs.readFile(
    `${jsonDirectory}/carousell_mouse_small.json`,
    "utf-8"
  );

  const video_games = await fs.readFile(
    `${jsonDirectory}/carousell_video_games_small.json`,
    "utf-8"
  );

  const allProducts = [
    ...JSON.parse(computer_parts),
    ...JSON.parse(keyboards),
    ...JSON.parse(monitors),
    ...JSON.parse(mouse),
    ...JSON.parse(video_games),
  ];

  res.status(200).json(allProducts);
}
