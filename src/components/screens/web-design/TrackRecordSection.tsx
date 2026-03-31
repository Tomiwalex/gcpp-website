'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookPagination from '@/components/screens/bookshop/BookPagination';

interface Design {
    title: string;
    description: string;
    highlights: string[];
    imageSrc: string;
}

const designs: Design[] = [
    {
        title: 'Author Hub',
        description: 'Joseph Elliott',
        highlights: [
            'Clean, modern layout optimized for book sales.',
            'Responsive design for all device types.',
        ],
        imageSrc: '/images/books/the-good-hawk.png', // Placeholder
    },
    {
        title: 'Portfolio Site',
        description: 'Joseph Elliott',
        highlights: [
            'Integrated blog and newsletter signup.',
            'Custom theme tailored to the author\'s genre.',
        ],
        imageSrc: '/images/books/Frame 2608774-1.png', // Placeholder
    },
];

function DesignCard({ design }: { design: Design }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-[4px] border border-[#EAEAEA] bg-white lg:flex-row">
            <div className="relative h-[372px] w-full flex-shrink-0 overflow-hidden border-[#EAEAEA] lg:w-[242px]">
                <Image
                    src={design.imageSrc}
                    alt={design.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col justify-center bg-[#FAFAFA] p-6 lg:p-8">
                <h3 className="text-2xl font-semibold leading-tight text-[#14120F]">
                    {design.title}
                </h3>

                <div className="mt-4 flex items-center gap-2">
                    <span className="text-sm text-[#14120F]">by</span>
                    <span className="rounded-[4px] border border-[#EAEAEA] bg-white px-2 py-1 text-sm font-medium text-[#14120F]">
                        {design.description}
                    </span>
                </div>

                <ul className="mt-6 space-y-2">
                    {design.highlights.map((highlight, i) => (
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

export default function WebDesignTrackRecordSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    return (
        <section className="bg-white px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center">
                    <h2 className="mx-auto max-w-[706px] text-center text-[28px] md:text-[36px] font-medium leading-[48px] tracking-[-2%] text-[#14120F]">
                        Explore our portfolio of expertly designed websites
                    </h2>
                </div>

                {/* designs grid - 2x2 */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {designs.map((design, index) => (
                        <DesignCard key={index} design={design} />
                    ))}
                </div>

                {/* Pagination */}
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
