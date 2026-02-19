import { connectToDB } from "../config/db";

interface CreateBookDTO {
  title: string;
  authorName: string;
  isbn: string;
  publishedYear: number;
}
export const insertBook = async (bookRecord: CreateBookDTO) => {
  const db = await connectToDB();
  const collection = db.collection("books");
  const result = await collection.insertOne({
    ...bookRecord,
    createdAt: new Date(),
  });
  return result.insertedId;
};
export const getAllBooks = async () => {
  const db = await connectToDB();
  const collection = db.collection("books");
  const result = collection.find({}).toArray();
  return result || [];
};
