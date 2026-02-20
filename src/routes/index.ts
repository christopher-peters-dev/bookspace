import express from "express";
import birdRoutes from "./birds.routes";
import bookRoutes from "./books.routes";
import authorRoutes from "./authors.routes";
const router = express.Router();
router.use("/birds", birdRoutes);
router.use("/books", bookRoutes);
router.use("/authors", authorRoutes);
export default router;
