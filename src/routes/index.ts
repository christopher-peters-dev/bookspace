import express from "express";
import birdRoutes from "./birds.routes";
import bookRoutes from "./books.routes";
const router = express.Router();
router.use("/birds", birdRoutes);
router.use("/books", bookRoutes);
export default router;
