'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { books } from '@/data/books';
import BookFilter from '@/components/screens/bookshop/BookFilter';
import BookControls from '@/components/screens/bookshop/BookControls';
import BookList from '@/components/screens/bookshop/BookList';
import BookPagination from '@/components/screens/bookshop/BookPagination';
import { Button } from '@/components/ui/button';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookshopPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const ITEMS_PER_PAGE = isMobile ? 8 : 16; // Mobile: 2 cols × 4 rows, Desktop: 4 cols × 4 rows
    const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

    const displayedBooks = books.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#F9F9F9] pb-20 pt-[75px]">
            <div className="mx-auto w-full max-w-[1512px] px-5 md:px-[100px]">
                <div className="mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-[#14120F] sm:text-5xl">Books</h1>
                    <p className="max-w-[706px] font-[Manrope] text-[16px] font-normal leading-auto text-[#14120F]">
                        Discover the unique voices behind each book and support their journeys. Find your next inspiring read and make a purchase to support these incredible storytellers.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-[24px]">
                    {/* Desktop Sidebar */}
                    <div className="hidden w-[296px] flex-none lg:block">
                        <BookFilter />
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        {/* Mobile Filters Toggle */}
                        <div className="lg:hidden">
                            <div
                                className="flex h-[48px] w-full cursor-pointer items-center justify-between border border-[#D7D7D7] bg-[#14120F] px-4"
                                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="relative h-5 w-5">
                                        <Image
                                            src="/icons/filter.svg"
                                            alt="Filter"
                                            fill
                                            className="object-contain brightness-0 invert" // filter.svg is black, invert makes it white
                                        />
                                    </div>
                                    <span className="font-[Manrope] text-[16px] font-medium text-white">
                                        Filters
                                    </span>
                                </div>
                                <div className="relative w-[10px] h-[6px]">
                                    <Image
                                        src="/icons/accordion-mobile-icon.svg"
                                        alt="Expand"
                                        fill
                                        className={cn("object-contain brightness-0 invert transition-transform duration-300", isMobileFiltersOpen ? "rotate-180" : "")}
                                    />
                                </div>
                            </div>

                            <div className={cn("grid transition-all duration-300 ease-in-out", isMobileFiltersOpen ? "grid-rows-[1fr] mt-0 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                                <div className="overflow-hidden">
                                    {/* Placeholder for future accordion content */}
                                    <BookFilter />
                                </div>
                            </div>
                        </div>

                        <BookControls viewMode={viewMode} setViewMode={setViewMode} />

                        <div className="flex flex-col gap-8">
                            <BookList books={displayedBooks} viewMode={viewMode} />

                            {/* Pagination - centered below list */}
                            {totalPages > 1 && (
                                <div className="mt-8 flex justify-center">
                                    <BookPagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
