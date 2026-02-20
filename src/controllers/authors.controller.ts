import { Request, Response, NextFunction } from "express";
export const getAuthors = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      success: true,
      data: [],
    });
  } catch (error) {
    next(error);
  }
};
