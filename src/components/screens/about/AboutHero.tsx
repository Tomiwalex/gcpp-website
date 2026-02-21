import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="bg-[#f9f9f9] px-5 py-12 md:px-10 lg:px-[112px] pt-[120px] pb-[64px]">
            <div className="mx-auto flex w-full max-w-[1252px] flex-col gap-6 lg:gap-6">

                {/* Text section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[87px]">
                    <h1 className="w-full lg:w-auto text-[36px] md:text-[48px] font-semibold leading-[1.1] md:leading-[54px] tracking-[-2%] text-[#14120f] lg:max-w-[400px]">
                        Where Stories <br className="hidden lg:block" /> Take Flight
                    </h1>

                    <div className="flex w-full flex-col gap-2 lg:max-w-[767px]">
                        <p className="text-sm md:text-base font-semibold uppercase leading-[1.5] text-[#8a8884]">
                            WHO WE ARE
                        </p>
                        <p className="text-base font-normal leading-relaxed text-[#14120f]">
                            Golden Child Promotions Publishing (GCPP) is a publishing organization dedicated to creating an equitable platform for every voice to be heard. Specializing in book publishing for beginners, we make the process accessible, requiring only a compelling idea and passion.
                        </p>
                    </div>
                </div>

                {/* Image section */}
                <div className="relative w-full aspect-[2/1] lg:aspect-[4/1] overflow-hidden rounded bg-black mt-4">
                    <Image
                        src="/images/pexels-divinetechygirl-1181408 1.png"
                        alt="About GCPP"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
