'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookPagination from '@/components/screens/bookshop/BookPagination';

interface Book {
    title: string;
    author: string;
    highlights: string[];
    imageSrc: string;
}

const books: Book[] = [
    {
        title: 'The Good Hawk',
        author: 'Joseph Elliott',
        highlights: [
            'Featured on major platforms like Amazon and Barnes & Noble.',
            'Over 10,000 copies sold in its first year.',
        ],
        imageSrc: '/images/books/the-good-hawk.png',
    },
    {
        title: 'Peter and the Wolf',
        author: 'Joseph Elliott',
        highlights: [
            'Featured on major platforms like Amazon and Barnes & Noble.',
            'Over 10,000 copies sold in its first year.',
        ],
        imageSrc: '/images/books/Frame 2608774-1.png',
    },
    {
        title: 'The Silver Crow',
        author: 'Joseph Elliott',
        highlights: [
            'Featured on major platforms like Amazon and Barnes & Noble.',
            'Over 10,000 copies sold in its first year.',
        ],
        imageSrc: '/images/books/Frame 2608774-2.png',
    },
    {
        title: 'Lost In Space',
        author: 'Joseph Elliott',
        highlights: [
            'Featured on major platforms like Amazon and Barnes & Noble.',
            'Over 10,000 copies sold in its first year.',
        ],
        imageSrc: '/images/books/image 5.png',
    },
];

function BookCard({ book }: { book: Book }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-[4px] border border-[#EAEAEA] bg-white lg:flex-row">
            {/* Image Container - Reusing Bookstore styles */}
            <div className="relative h-[372px] w-full flex-shrink-0 overflow-hidden border-[#EAEAEA] lg:w-[242px]">
                <Image
                    src={book.imageSrc}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Info side */}
            <div className="flex flex-1 flex-col justify-center bg-[#FAFAFA] p-6 lg:p-8">
                <h3 className="text-2xl font-semibold leading-tight text-[#14120F]">
                    {book.title}
                </h3>

                <div className="mt-4 flex items-center gap-2">
                    <span className="text-sm text-[#14120F]">by</span>
                    <span className="rounded-[4px] border border-[#EAEAEA] bg-white px-2 py-1 text-sm font-medium text-[#14120F]">
                        {book.author}
                    </span>
                </div>

                <ul className="mt-6 space-y-2">
                    {book.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#14120F]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#14120F]" />
                            <span className="leading-[1.5]">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function TrackRecordSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    return (
        <section className="bg-white px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center">
                    <h2 className="max-w-[800px] text-center text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-2%] text-[#14120F] lg:text-[36px]">
                        Explore our proven track record of <br />
                        excellence.{' '}
                        <span className="font-normal text-[#14120F]">
                            Here are just a few highlights:
                        </span>
                    </h2>
                </div>

                {/* Books grid - 2x2 */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>

                {/* Pagination - Reusing Bookstore's BookPagination component */}
                <div className="mt-12">
                    <BookPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    );
}
