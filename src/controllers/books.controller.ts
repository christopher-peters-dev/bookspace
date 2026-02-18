import { Request, Response, NextFunction } from "express";
export const getBooks = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Get all books" });
};
export const createBooks = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, authorName, isbn, publishedYear } = req.body;
  res.json({ message: "Create a new book" });
};
export const getBookById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: `Get book with ID ${req.params.bookId}` });
};
