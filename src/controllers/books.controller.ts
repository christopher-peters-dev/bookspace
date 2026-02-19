import { Request, Response, NextFunction } from "express";
import { insertBook, getAllBooks } from "../services/books.service";
import { logger } from "../utils/logger";
export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const booklist = await getAllBooks();
    res.status(201).json({
      data: {
        books: booklist,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
export const createBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    logger.info("Create book request received", {
      body: req.body,
    });
    const insertedId = await insertBook(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: {
        id: insertedId,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
export const getBookById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.json({ message: `Get book with ID ${req.params.bookId}` });
};
