import { notFound } from "next/navigation";
import { getBookById } from "../../lib/components/actions";
import { IBook } from "../../lib/components/types";
import styles from "../../page.module.css";

interface IProps {
  params: { id: number };
}

export default async function Page(props: IProps) {
  const book: IBook | null = await getBookById(props.params.id);

  if (!book) {
    notFound();
    return;
  }

  return (
    <>
      <div className="book-detail">
        <img src={book.photo} alt={book.title} className={styles.bookImg} />
      </div>
    </>
  );
}
