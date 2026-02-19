import { creatBookSchema } from "../schemas/book.schema";
import { Request, Response, NextFunction } from "express";
const validate = (req: Request, res: Response, next: NextFunction) => {
  const result = creatBookSchema.safeParse(req.body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || "Validation error";
    return res.status(400).json({ success: false, message: message });
  }
  req.body = result.data;
  next();
};

export default validate;
