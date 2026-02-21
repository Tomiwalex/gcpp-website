'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BookPagination from '../bookshop/BookPagination';

const testimonials = [
    {
        quote:
            '"The process felt effortless, and I felt supported every step of the way. My book is everything I dreamed it would be."',
        author: 'Michael Rivera',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 4,
        imagePath: '/images/real-man.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"Partnering with this team transformed my publishing journey. They believed in my vision and helped me bring it to life."',
        author: 'Lucas Bennett',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 5,
        imagePath: '/images/real-woman.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"The process felt effortless, and I felt supported every step of the way. My book is everything I dreamed it would be."',
        author: 'Michael Rivera',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 4,
        imagePath: '/images/real-man.png',
        imagePosition: 'object-center',
    },
    {
        quote:
            '"Partnering with this team transformed my publishing journey. They believed in my vision and helped me bring it to life."',
        author: 'Lucas Bennett',
        authorOf: [
            { title: 'The Silent Witness' },
            { title: 'Beyond the Horizon' }
        ],
        rating: 5,
        imagePath: '/images/real-woman.png',
        imagePosition: 'object-center',
    }
];

function CustomStar({ active }: { active: boolean }) {
    return (
        <div
            className={cn(
                "flex h-[24px] w-[24px] items-center justify-center rounded-[2px]",
                active ? "bg-[#219653]" : "bg-[#D9D9D9]"
            )}
        >
            <Image
                src="/icons/star.svg"
                alt="star"
                width={14}
                height={14}
                className="object-contain"
            />
        </div>
    );
}

interface TestimonialCardProps {
    testimonial: typeof testimonials[0];
    isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "flex w-[340px] md:w-[600px] xl:w-[820px] h-[460px] flex-shrink-0 origin-center overflow-hidden rounded-[8px] bg-white transition-all duration-500",
                "border border-[#E0E0E0]",
                isActive
                    ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)] scale-100 opacity-100 mx-0"
                    : "scale-[0.85] opacity-100 mx-[-25.5px] md:mx-[-45px] xl:mx-[-61.5px]"
            )}
        >
            {/* Text Content */}
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12 xl:pl-[64px] xl:pr-[48px]">
                <h3 className="text-[32px] font-semibold tracking-[-2%] text-[#8A8884]">
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

                <p className="mt-8 text-base font-normal leading-[1.6] text-[#14120F]">
                    {testimonial.quote}
                </p>

                <div className="mt-10 flex gap-[4px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <CustomStar key={i} active={i < testimonial.rating} />
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="relative hidden w-1/2 md:block">
                <Image
                    src={testimonial.imagePath}
                    alt={testimonial.author}
                    fill
                    className={cn("object-cover", testimonial.imagePosition)}
                />
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
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
                    transform: translateX(calc(-170px - var(--active-index) * 330px));
                }
                .inactive-card-margin {
                    margin: 0 -25.5px;
                }
                @media (min-width: 768px) {
                    .carousel-track {
                        transform: translateX(calc(-300px - var(--active-index) * 551px));
                    }
                    .inactive-card-margin {
                        margin: 0 -45px;
                    }
                }
                @media (min-width: 1280px) {
                    .carousel-track {
                        transform: translateX(calc(-410px - var(--active-index) * 738px));
                    }
                    .inactive-card-margin {
                        margin: 0 -61.5px;
                    }
                }
            `}} />

            <div className="mx-auto w-full">
                {/* Header */}
                <div className="mb-16 px-5 text-center md:px-[100px]">
                    <h2 className="text-[40px] font-semibold leading-[48px] tracking-[-2%] text-[#14120F]">
                        Real Voices, Real Experiences
                    </h2>
                    <p className="mx-auto mt-4 max-w-[734px] text-base font-normal leading-[1.6] text-[#6B6B6B]">
                        Our authors reveal how our collaborative publishing process
                        transformed their manuscripts into masterpieces, thanks to our
                        dedicated support and expertise.
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative mb-[47px] h-[460px] w-full items-center justify-center overflow-hidden">
                    <div
                        className="carousel-track absolute left-1/2 flex items-center gap-[41px] transition-transform duration-500 ease-in-out"
                        style={{
                            '--active-index': currentPage - 1 + totalPages,
                        } as React.CSSProperties}
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
                            const isActive = index === currentPage - 1 + totalPages;
                            return (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial}
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
