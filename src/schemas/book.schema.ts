import z from "zod";
export const creatBookSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long").max(100),
  authorName: z
    .string()
    .min(2, "Author name must be at least 2 characters long")
    .max(100),
  isbn: z.string().length(13, "ISBN must be exactly 13 characters long"),
  publishedYear: z
    .number()
    .min(1000, "Published year must be at least 1000")
    .optional(),
});
