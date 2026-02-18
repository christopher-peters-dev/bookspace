import { connectToDB } from "./config/db";
import app from "./app";
const PORT = process.env.PORT || 3000;
const startServer = async () => {
  await connectToDB();
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
startServer();
