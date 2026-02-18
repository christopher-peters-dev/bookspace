import { creatBookSchema } from "../schemas/book.schema";
import { Request, Response, NextFunction } from "express";
const validate = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = creatBookSchema.safeParse(req.body);
    next();
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, message: error.issues[0].message });
  }
};

export default validate;
