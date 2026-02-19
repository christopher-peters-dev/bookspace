import express from "express";
import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to API Home");
});
app.use("/api", routes);
app.use(errorHandler);
export default app;
