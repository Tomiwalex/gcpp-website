import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/data/books';

interface BookCardProps {
    book: Book;
    viewMode?: 'grid' | 'list';
}

export default function BookCard({ book, viewMode = 'grid' }: BookCardProps) {
    // List view - simplified version
    if (viewMode === 'list') {
        return (
            <Link href={`/bookshop/${encodeURIComponent(book.title)}`} className="group flex w-full flex-col gap-[32px] rounded-[4px] border border-[#D7D7D7] bg-white p-[16px] transition-all hover:shadow-md md:flex-row md:gap-[32px]">
                {/* Image Container - Fixed 168x240 on all screens, default left aligned in flex-col */}
                <div className="relative h-[240px] w-[168px] flex-none overflow-hidden rounded-[4px] border border-[#EAEAEA]">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex flex-col">
                        <h3 className="font-[Manrope] text-[18px] font-semibold text-[#14120F] group-hover:text-[#DFA328] transition-colors">{book.title}</h3>
                        <p className="font-[Manrope] text-[15px] font-normal text-[#6C604E] transition-colors group-hover:text-[#DFA328]">By {book.author}</p>
                    </div>
                    {book.description && (
                        <p className="font-[Manrope] text-[14px] font-normal leading-[150%] text-[#14120F] line-clamp-3 md:line-clamp-none">
                            {book.description}
                        </p>
                    )}
                </div>
            </Link>
        );
    }

    // Grid view - exact Figma specs with flexible width
    return (
        <Link href={`/bookshop/${encodeURIComponent(book.title)}`} className="group flex w-full flex-col transition-all hover:-translate-y-1">
            {/* Image Container - aspect ratio preserved, flexible width */}
            <div className="relative aspect-[224/320] w-full overflow-hidden rounded-t-[4px] border-x border-t border-[#EAEAEA] bg-white">
                <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Text Container - 72px height, flexible width */}
            <div className="flex h-[72px] w-full items-center justify-center rounded-b-[4px] border border-[#EAEAEA] bg-white group-hover:border-[#DFA328] transition-colors">
                {/* Text Frame - centered */}
                <div className="flex max-w-[142px] flex-col items-center text-center">
                    <h3 className="w-full font-[Manrope] text-[16px] font-semibold leading-[22px] text-[#14120F] line-clamp-1 group-hover:text-[#DFA328] transition-colors">{book.title}</h3>
                    <p className="w-full font-[Manrope] text-[13px] font-normal leading-[18px] text-[#14120F]">By {book.author}</p>
                </div>
            </div>
        </Link>
    );
}
