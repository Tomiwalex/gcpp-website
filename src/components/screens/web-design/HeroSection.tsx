import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WebDesignHeroSection() {
    return (
        <section className="relative flex h-[calc(100dvh-128px)] items-center bg-[#F9F9F9] px-5 py-24 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px] text-center">
                {/* Tag */}
                <p className="mb-4 text-base font-semibold leading-[1.5] text-[#8A8884]">
                    WEB DESIGN
                </p>

                {/* Hero heading */}
                <h1 className="mx-auto w-full max-w-[900px] text-[32px] font-semibold leading-[1.2] tracking-[-2%] text-[#14120F] lg:text-[56px] lg:leading-[66px]">
                    Create an Author’s Hub with a Professionally Designed Website
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-6 max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                    Enhance your online presence with a website that showcases your portfolio, sells your books, and connects you with readers. GCPP specializes in designing author websites that are visually stunning and user-friendly.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    <Button asChild className="px-10 font-medium text-black bg-gradient-to-b from-[#FEE416] to-[#EB9202] hover:opacity-90">
                        <Link href="#services">See Packages</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-[#14120F] px-10 font-medium text-[#14120F] hover:bg-[#14120F] hover:text-white"
                    >
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
