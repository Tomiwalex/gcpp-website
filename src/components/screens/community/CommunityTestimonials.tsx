'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import TestimonialCarousel, { StandardTestimonialCard, Testimonial } from '@/components/shared/TestimonialCarousel';

const otherTestimonials: Testimonial[] = [
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

function MeetLeonCard({ isActive }: { isActive: boolean }) {
    return (
        <div
            className={cn(
                "flex w-[340px] md:w-[580px] xl:w-[820px] h-[800px] md:h-[460px] flex-shrink-0 origin-center overflow-hidden rounded-[8px] transition-all duration-500 flex-col md:flex-row",
                "bg-[#FAFAFA] border border-[#EAEAEA]",
                isActive
                    ? "scale-100 opacity-100 z-10 relative"
                    : "scale-[0.9] opacity-100 z-0"
            )}
        >
            {/* Image (Top on mobile, Right on md) */}
            <div className="relative h-[462px] w-full bg-white md:h-full md:w-[46%] xl:w-[52%] order-first md:order-last">
                <Image
                    src="/images/leon-moses.png"
                    alt="Dr Leon Moss"
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* Text Content */}
            <div className="flex w-full md:w-[54%] xl:w-[48%] flex-col justify-center px-6 py-10 md:px-8 md:py-0 xl:pl-[48px] xl:pr-[24px]">
                <h3 className="text-[24px] md:text-[24px] xl:text-[32px] font-semibold leading-tight text-[#14120F]">
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

                <div className="mt-4 md:mt-3 flex flex-col gap-[12px] md:gap-[8px]">
                    <p className="text-[16px] md:text-[13px] font-normal leading-[1.6] text-[#14120F]">
                        He is one of our Biggest Authors.<br />
                        A True Spiritual Guide, Healer & Teacher of The Omniverse.<br />
                        He has dedicated his life to helping others, especially Children?
                    </p>
                    <p className="text-[16px] md:text-[13px] font-medium leading-[1.6] text-[#14120F]">
                        Check out Dr Leon Moss’s latest interview
                    </p>
                </div>

                <div className="mt-6">
                    <button className="flex h-[42px] w-full max-w-[200px] items-center justify-center rounded-[4px] border border-[#14120F] bg-transparent text-[14px] font-medium text-[#14120F] hover:bg-[#14120F] hover:text-white transition-colors duration-300">
                        Watch Interview
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function CommunityTestimonials() {
    const timelineItems = ['meet-leon', ...otherTestimonials];

    return (
        <TestimonialCarousel
            title={"Real Voices, \nReal Experiences"}
            testimonials={timelineItems}
            renderItem={(item, index, isActive) => {
                if (item === 'meet-leon') {
                    return <MeetLeonCard key={index} isActive={isActive} />;
                }
                return (
                    <StandardTestimonialCard
                        key={index}
                        testimonial={item as Testimonial}
                        isActive={isActive}
                    />
                );
            }}
        />
    );
}
