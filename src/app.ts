import express from "express";
import routes from "./routes";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to API Home");
});
app.use("/api", routes);
export default app;
