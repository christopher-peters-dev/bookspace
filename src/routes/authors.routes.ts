import express from "express";
import { getAuthors } from "../controllers/authors.controller";
const router = express.Router();
router.get("/", getAuthors);
export default router;
