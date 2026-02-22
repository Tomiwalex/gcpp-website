'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BookPagination from '../bookshop/BookPagination';

const otherTestimonials = [
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

// Special props type to accommodate Leon Moss card
type BaseCardProps = {
    isActive: boolean;
};

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

function MeetLeonCard({ isActive }: BaseCardProps) {
    return (
        <div
            className={cn(
                "flex w-[340px] md:w-[600px] xl:w-[820px] h-[460px] flex-shrink-0 origin-center overflow-hidden rounded-[8px] transition-all duration-500",
                "bg-[#FAFAFA] border border-[#EAEAEA]",
                isActive
                    ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)] scale-100 opacity-100 mx-0"
                    : "scale-[0.85] opacity-100 mx-[-25.5px] md:mx-[-45px] xl:mx-[-61.5px]"
            )}
        >
            {/* Text Content */}
            <div className="flex w-full md:w-[50%] xl:w-[48%] flex-col justify-center px-6 md:px-10 xl:pl-[48px] xl:pr-[24px]">
                <h3 className="text-[24px] md:text-[28px] xl:text-[32px] font-semibold leading-tight text-[#14120F]">
                    MEET DR LEON MOSS
                </h3>

                <div className="mt-4 flex flex-col gap-2">
                    <p className="text-[13px] font-normal text-[#14120F]">
                        Author of
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                        <span className="rounded-[4px] border border-[#EAEAEA] bg-white px-3 py-1.5 text-[14px] font-medium text-[#14120F]">
                            The Silent Witness
                        </span>
                        <span className="rounded-[4px] border border-[#EAEAEA] bg-white px-3 py-1.5 text-[14px] font-medium text-[#14120F]">
                            Beyond the Horizon
                        </span>
                    </div>
                </div>

                <div className="mt-5 flex flex-col gap-[12px]">
                    <p className="text-[14px] font-normal leading-[1.6] text-[#14120F]">
                        He is one of our Biggest Authors.<br />
                        A True Spiritual Guide, Healer & Teacher of The Omniverse.<br />
                        He has dedicated his life to helping others, especially Children?
                    </p>
                    <p className="text-[14px] font-medium leading-[1.6] text-[#14120F]">
                        Check out Dr Leon Moss’s latest interview
                    </p>
                </div>

                <div className="mt-6">
                    <button className="flex h-[42px] w-full max-w-[200px] items-center justify-center rounded-[4px] border border-[#14120F] bg-transparent text-[14px] font-medium text-[#14120F] hover:bg-[#14120F] hover:text-white transition-colors duration-300">
                        Watch Interview
                    </button>
                </div>
            </div>

            {/* Image (Right side) */}
            <div className="relative hidden w-[50%] xl:w-[52%] bg-white md:block">
                <Image
                    src="/images/leon-moses.png"
                    alt="Dr Leon Moss"
                    fill
                    className="object-cover object-top"
                />
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial, isActive }: BaseCardProps & { testimonial: typeof otherTestimonials[0] }) {
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
                <h3 className="text-[28px] md:text-[32px] font-semibold tracking-[-2%] text-[#8A8884]">
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

export default function CommunityTestimonials() {
    const [currentPage, setCurrentPage] = useState(1);
    const timelineItems = ['meet-leon', ...otherTestimonials];
    const totalPages = timelineItems.length;

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
                    <h2 className="text-[32px] md:text-[40px] font-semibold leading-[40px] md:leading-[48px] tracking-[-2%] text-[#14120F]">
                        Real Stories From GCPP Members
                    </h2>
                    <p className="mx-auto mt-4 max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Our authors reveal how our collaborative publishing process transformed their manuscripts into masterpieces, thanks to our dedicated support and expertise.
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
                        {[...timelineItems, ...timelineItems, ...timelineItems].map((item, index) => {
                            const isActive = index === currentPage - 1 + totalPages;

                            if (item === 'meet-leon') {
                                return <MeetLeonCard key={index} isActive={isActive} />;
                            }

                            return (
                                <TestimonialCard
                                    key={index}
                                    testimonial={item as typeof otherTestimonials[0]}
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
