'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
    {
        name: 'Jerry Ryan',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Ifeyinka Adeyemo.png',
    },
    {
        name: 'Nathan Romaguera',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/image 13.png',
    },
    {
        name: "Garry O'Reilly",
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Eric Moura.png',
    },
    {
        name: 'Lila Hane II',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Lord Ander Fotografia.png',
    },
    {
        name: 'Stella Abbott Jr.',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by afshin aliabadi.png',
    },
    {
        name: 'Terri Goodwin',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Ono  Kosuki.png',
    },
    {
        name: 'Evelyn Foster',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Ifeyinka Adeyemo.png',
    },
    {
        name: 'Marcus Chen',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/image 13.png',
    },
    {
        name: 'Sarah Williams',
        role: 'Tailored for women in the working class, this course is designed to accelerate your career with essential Data Science skills.',
        image: '/images/team/Pexels Photo by Eric Moura.png',
    },
];

export default function TeamSection() {
    return (
        <section className="bg-white px-5 pb-24 pt-12 md:px-10 lg:px-[112px]">
            <div className="mx-auto w-full max-w-[1252px]">
                {/* Header */}
                <div className="mb-12 flex max-w-[800px] flex-col gap-4">
                    <h2 className="font-[Manrope] text-[32px] font-semibold tracking-[-0.02em] text-[#14120f] md:text-[40px]">
                        Meet the team
                    </h2>
                    <p className="font-[Manrope] text-[16px] leading-[28px] text-[#14120f]">
                        Our authors are the heart of what we do. With each book, they bring unique perspectives, creative brilliance, and inspiring journeys to readers worldwide. Explore their works and discover the magic behind the pages.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-[#f9f9f9] transition-all hover:shadow-md"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-6">
                                <h3 className="mb-3 font-[Manrope] text-[20px] font-semibold text-[#14120f] md:text-[24px]">
                                    {member.name}
                                </h3>
                                <p className="mb-8 font-[Manrope] text-[14px] leading-[24px] text-[#14120f]">
                                    {member.role}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href="#"
                                        className="inline-flex h-[40px] items-center justify-center border border-[#14120f] bg-transparent px-6 font-[Manrope] text-[14px] font-medium text-[#14120f] transition-colors hover:bg-[#14120f] hover:text-white"
                                    >
                                        Know more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
