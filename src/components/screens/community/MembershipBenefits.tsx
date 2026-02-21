'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const benefits = [
    {
        title: 'Unlimited Audiobook Library Access',
        description: 'Enjoy free access to our growing library of audiobooks, including all future releases. Audiobooks typically retail for $6.99 each, but as a member, they’re yours at no extra cost.',
        image: '/images/library.png',
    },
    {
        title: 'Complimentary First eBook in Any Series',
        description: 'Enjoy free access to our growing library of audiobooks, including all future releases. Audiobooks typically retail for $6.99 each, but as a member, they’re yours at no extra cost.',
        image: '/images/ebook.png',
    },
    {
        title: 'Weekly Workshops and Guest Speaker Events',
        description: 'Learn from industry leaders about the latest trends, strategies, and tips to grow your brand and skills as an author.',
        image: '/images/weekly.png',
    },
    {
        title: 'One-on-One Expert Consultation',
        description: 'Enjoy free access to our growing library of audiobooks, including all future releases. Audiobooks typically retail for $6.99 each, but as a member, they’re yours at no extra cost.',
        image: '/images/real-man.png',
    },
    {
        title: 'Exclusive Online Courses',
        description: 'Access a curated selection of on-demand courses covering writing techniques, editing, and the self-publishing process.',
        image: '/images/real-woman.png',
    },
    {
        title: 'Supportive Writer Community',
        description: 'Connect with a network of like-minded writers to share experiences, collaborate, and find inspiration.',
        image: '/images/real-man.png',
    },
];

export default function MembershipBenefits() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-[1213px] flex-col items-center justify-center px-5 mb-12 lg:mb-[80px]">
                <h2 className="text-[#14120F] text-[32px] lg:text-[48px] font-semibold leading-tight tracking-[-0.02em] text-center">
                    Membership Benefits
                </h2>
            </div>
            
            <div className="mx-auto w-full max-w-[1213px] px-5 lg:px-0">
                <div className="flex flex-col border border-[#EAEAEA] divide-y divide-[#EAEAEA]">
                    {benefits.map((benefit, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "px-5 md:px-[84px] py-10 lg:py-[32px] w-full",
                                    isEven ? "bg-[#FAFAFA]" : "bg-white"
                                )}
                            >
                                <div
                                    className={cn(
                                        "mx-auto flex w-full max-w-[1045px] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14",
                                        !isEven && "lg:flex-row-reverse"
                                    )}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full overflow-hidden bg-gray-100 lg:w-[509px] lg:min-w-[509px] h-[300px] lg:h-[302px]">
                                        <Image
                                            src={benefit.image}
                                            alt={benefit.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text Container */}
                                    <div className="flex flex-col gap-6 lg:w-[480px]">
                                        <h3 className="text-[28px] lg:text-[32px] font-semibold text-[#14120F] leading-[35px]">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-base text-[#14120F] font-normal leading-[1.5]">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
