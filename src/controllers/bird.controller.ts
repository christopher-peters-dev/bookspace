import { Request, Response } from "express";

export const getBirds = (req: Request, res: Response) => {
  res.write("<h1>Get all birds</h1>");
  res.json({ message: "Get all birds" });
};
export const getBirdsAbout = (req: Request, res: Response) => {
  res.json({ message: "About all birds" });
};
