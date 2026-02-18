import express from "express";
import validate from "../middleware/validate.middleware";
import {
  getBooks,
  createBooks,
  getBookById,
} from "../controllers/books.controller";
const router = express.Router();
router.get("/", getBooks);
router.post("/create", validate, createBooks);
router.get("/:bookId", getBookById);

export default router;
