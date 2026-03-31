import { PricingCard, PricingCardProps } from '@/components/ui/PricingCard';

const packages: PricingCardProps[] = [
    {
        name: 'Basic Package',
        description: 'For authors who want professional narration without additional enhancements.',
        price: '$200',
        priceNote: 'for books up to 100 pages. $2 per additional page.',
        features: [
            { text: 'Professional narration by experienced voice artists.' },
            { text: 'Voice tailored to match the tone and genre of your book.' },
            { text: 'High-quality audio recording delivered in your preferred format.' },
            { text: 'Delivery in 10 business days.' },
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Standard Package',
        description: 'Ideal for authors seeking polished audio with seamless editing.',
        price: '$400',
        priceNote: 'for books up to 100 pages. $4 per additional page.',
        features: [
            { text: 'Professional narration with audio editing for a polished output.' },
            { text: 'Noise reduction to ensure crystal-clear sound quality.' },
            { text: 'Seamless transitions and pacing adjustments for enhanced flow.' },
            { text: 'High-quality audio mastering to industry standards.' },
            { text: 'Delivery in 15 business days.' },
        ],
        featured: true,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Premium Package',
        description: 'Comprehensive production for a truly immersive audiobook experience.',
        price: '$800',
        priceNote: 'for books up to 100 pages. $6 per additional page.',
        features: [
            { text: 'Full production with narration, sound effects, and background music to create an immersive experience.' },
            { text: 'Custom sound design to enhance scenes and evoke emotions.' },
            { text: 'Comprehensive editing and mastering for professional-grade output.' },
            { text: 'Personalized marketing support, including promotional audio clips.' },
            { text: 'Delivery in 20 business days.' },
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
];

export default function AudiobookServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center gap-[28px]">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px] max-w-[706px]">
                        Choose the level of service that meets your audiobook needs
                    </h2>
                    <p className="mx-auto max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to
                        meet your specific needs
                    </p>
                </div>

                {/* Pricing cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} priceVertical={true} />
                    ))}
                </div>
            </div>
        </section>
    );
}
