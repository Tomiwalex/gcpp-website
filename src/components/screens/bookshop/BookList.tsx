import { Book } from '@/data/books';
import BookCard from './BookCard';

interface BookListProps {
    books: Book[];
    viewMode?: 'grid' | 'list';
}

export default function BookList({ books, viewMode = 'grid' }: BookListProps) {
    if (books.length === 0) {
        return (
            <div className="flex h-64 w-full items-center justify-center text-muted-foreground">
                No books found matching your criteria.
            </div>
        );
    }

    return (
        <div className={viewMode === 'list'
            ? "flex flex-col gap-4"
            : "grid grid-cols-2 gap-[24px] md:grid-cols-3 lg:grid-cols-4"
        }>
            {books.map((book) => (
                <BookCard key={book.id} book={book} viewMode={viewMode} />
            ))}
        </div>
    );
}
