import { connectToDB } from "../config/db";

interface CreateBookDTO {
  title: string;
  authorId: string;
  authorName: string;
  isbn: string;
  publishedYear: number;
}
export const insertBook = async (bookRecord: CreateBookDTO) => {
  const db = await connectToDB();
  const collection = db.collection("books");
  const authorCollection = db.collection("authors");
  const { authorName, title, isbn, publishedYear } = bookRecord;
  const normalizedName = authorName.trim().toLowerCase();
  const author = await authorCollection.findOne({ name: normalizedName });
  let authorId;

  if (!author) {
    const authorDocument = await authorCollection.insertOne({
      name: authorName,
      createdAt: new Date(),
    });
    authorId = authorDocument.insertedId;
  } else {
    authorId = author.insertedId;
  }
  const result = await collection.insertOne({
    title,
    authorId: authorId,
    isbn,
    publishedYear,
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
