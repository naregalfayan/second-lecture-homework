import { promises as fs } from "fs";
import path from "path";
import { IBook } from "./types";

const booksFilePath = path.join(process.cwd(), "books.json");

export async function getAllBooks(): Promise<IBook[]> {
  const data = await fs.readFile(booksFilePath, "utf-8");
  const books = JSON.parse(data).books as IBook[];
  return books;
}

export async function getBookById(id: number): Promise<IBook | null> {
  const books = await getAllBooks();
  const book = books.find((book) => book.id === id.toString());
  return book || null;
}
