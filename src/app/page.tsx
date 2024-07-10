import Link from "next/link";
import { getAllBooks } from "./lib/components/actions";
import { IBook } from "./lib/components/types";
import styles from "./page.module.css";

export default async function Home() {
  const books: IBook[] = await getAllBooks();

  return (
    <main className={styles.container}>
      <ul className={styles.list}>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/book/${book.id}`}>
              {book.title} by {book.author} - {book.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
