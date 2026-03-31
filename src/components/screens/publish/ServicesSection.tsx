import { PricingCard, PricingCardProps } from '@/components/ui/PricingCard';

const packages: PricingCardProps[] = [
    {
        name: 'Basic Package',
        description: 'Ideal for new authors starting their journey.',
        price: '$6,000',
        features: [
            { text: 'Manuscript formatting for eBook compatibility.' },
            { text: 'Conversion to eBook formats (EPUB, MOBI, PDF).' },
            { text: 'Publishing on major digital platforms (Amazon Kindle, Apple Books, Google Play Books).' },
            { text: 'Basic cover design with customizable templates.' },
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Standard Package',
        description: 'Make a bold statement with innovative and unique designs.',
        price: '$8,000',
        features: [
            { text: 'Professional manuscript formatting for print and eBook.' },
            { text: 'ISBN registration and barcode generation.' },
            { text: 'Print-ready file preparation for on-demand printing.' },
            { text: 'Custom cover design tailored to your book\'s theme.' },
            { text: 'Distribution setup on platforms like Amazon and IngramSpark.' },
        ],
        featured: true,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Premium Package',
        description: 'A complete solution for authors ready to make an impact.',
        price: '$12,000',
        features: [
            { text: 'Comprehensive manuscript editing (copyediting and proofreading).' },
            { text: 'Full-service publishing (print and digital).' },
            { text: 'Custom book layout and typography design.' },
            { text: 'Advanced marketing strategy, including social media promotion and press releases.' },
            { text: 'Dedicated consultation sessions with a publishing expert.' },
            { text: 'Distribution and sales analytics support.' },
            { text: 'Assistance with audiobook creation and publishing.' },
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px]">
                        Services for Authors
                    </h2>
                    <p className="mx-auto mt-4 max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to
                        meet your specific needs
                    </p>
                </div>

                {/* Pricing cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
}
