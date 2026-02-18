import { MongoClient } from "mongodb";
import env from "./env";
const client = new MongoClient(env.parsed?.DB_URI as string);
export const connectToDB = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  return client.db();
};
