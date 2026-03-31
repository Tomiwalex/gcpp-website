'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BookPagination from '@/components/screens/bookshop/BookPagination';

export type AuthorOf = {
    title: string;
};

export type Testimonial = {
    quote: string;
    author: string;
    authorOf: AuthorOf[];
    rating: number;
    imagePath: string;
    imagePosition: string;
};

interface TestimonialCarouselProps {
    title?: string;
    description?: string;
    testimonials: any[]; // Can be 'meet-leon' string or Testimonial object
    renderItem?: (item: any, index: number, isActive: boolean) => React.ReactNode;
}

function CustomStar({ active }: { active: boolean }) {
    return (
        <div
            className={cn(
                "flex h-[24px] w-[24px] md:h-[20px] md:w-[20px] items-center justify-center rounded-[2px]",
                active ? "bg-[#219653]" : "bg-[#D9D9D9]"
            )}
        >
            <Image
                src="/icons/star.svg"
                alt="star"
                width={14}
                height={14}
                className="object-contain md:w-3 md:h-3"
            />
        </div>
    );
}

export function StandardTestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
    return (
        <div
            className={cn(
                "flex w-[340px] md:w-[580px] xl:w-[820px] h-[800px] md:h-[460px] flex-shrink-0 origin-center overflow-hidden rounded-[8px] bg-white transition-all duration-500 flex-col md:flex-row",
                "border border-[#E0E0E0]",
                isActive
                    ? "scale-100 opacity-100 z-10 relative"
                    : "scale-[0.9] opacity-100 z-0"
            )}
        >
            {/* Image (Top on mobile, Right on md) */}
            <div className="relative h-[462px] w-full md:h-full md:w-1/2 order-first md:order-last">
                <Image
                    src={testimonial.imagePath}
                    alt={testimonial.author}
                    fill
                    className={cn("object-cover", testimonial.imagePosition)}
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-1 flex-col justify-center px-6 py-10 md:p-10 xl:pl-[64px] xl:pr-[48px]">
                <h3 className="text-[36px] md:text-[26px] font-semibold tracking-[-2%] text-[#8A8884] leading-tight">
                    {testimonial.author}
                </h3>

                <p className="mt-4 text-[13px] font-normal text-[#14120F]">
                    Author of
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                    {testimonial.authorOf.map((book, idx) => (
                        <span
                            key={idx}
                            className="rounded-[4px] border border-[#E0E0E0] px-3 py-1.5 text-xs font-medium text-[#14120F]"
                        >
                            {book.title}
                        </span>
                    ))}
                </div>

                <p className="mt-8 md:mt-6 text-[16px] md:text-sm font-normal leading-[1.6] text-[#14120F]">
                    {testimonial.quote}
                </p>

                <div className="mt-10 md:mt-8 flex gap-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <CustomStar key={i} active={i < testimonial.rating} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function TestimonialCarousel({
    title = "Real Voices, Real Experiences",
    description = "Our authors reveal how our collaborative publishing process transformed their manuscripts into masterpieces, thanks to our dedicated support and expertise.",
    testimonials,
    renderItem
}: TestimonialCarouselProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = testimonials.length;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <section className="overflow-hidden bg-white py-24">
            <style dangerouslySetInnerHTML={{
                __html: `
                .carousel-track {
                    --carousel-overlap: 4px;
                    --carousel-step: 336px;
                    --carousel-center: 170px;
                    transform: translateX(calc(-1 * var(--carousel-center) - var(--active-index) * var(--carousel-step)));
                    gap: 0;
                }
                .carousel-track > * {
                    margin-right: calc(-1 * var(--carousel-overlap));
                }
                @media (min-width: 768px) {
                    .carousel-track {
                        --carousel-overlap: -12px;
                        --carousel-step: 592px;
                        --carousel-center: 290px;
                    }
                }
                @media (min-width: 1280px) {
                    .carousel-track {
                        --carousel-overlap: 0px;
                        --carousel-step: 820px;
                        --carousel-center: 410px;
                    }
                }
            `}} />

            <div className="mx-auto w-full">
                {/* Header */}
                <div className="mb-16 px-5 text-center md:px-[100px]">
                    <h2 className="text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[48px] tracking-[-2%] text-[#14120F] whitespace-pre-line md:whitespace-normal">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        {description}
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative mb-[26px] md:mb-[47px] h-[800px] md:h-[460px] w-full items-center justify-center overflow-hidden">
                    <div
                        className="carousel-track absolute left-1/2 flex items-center transition-transform duration-500 ease-in-out"
                        style={{
                            '--active-index': currentPage - 1 + totalPages,
                        } as React.CSSProperties}
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => {
                            const isActive = index === currentPage - 1 + totalPages;

                            if (renderItem) {
                                return renderItem(item, index, isActive);
                            }

                            return (
                                <StandardTestimonialCard
                                    key={index}
                                    testimonial={item as Testimonial}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex w-full justify-center">
                    <BookPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
}
