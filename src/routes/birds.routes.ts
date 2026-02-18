import express from "express";
import { loggerMiddleware } from "../middleware/logger.middleware";
import { getBirds, getBirdsAbout } from "../controllers/bird.controller";
const router = express.Router();
router.use(loggerMiddleware);
router.get("/", getBirds);
router.get("/about", getBirdsAbout);
export default router;
