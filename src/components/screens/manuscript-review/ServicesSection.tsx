import { PricingCard, PricingCardProps } from '@/components/ui/PricingCard';

const packages: PricingCardProps[] = [
    {
        name: 'Basic Package',
        description: 'Perfect for a deeper dive into your manuscript.',
        price: '$150',
        features: [
            { text: 'General feedback on plot, structure, and language.' },
            { text: 'Identification of key areas for improvement.' },
            { text: 'Delivery in 5 business days.' }
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Detailed Package',
        description: 'Perfect for a deeper dive into your manuscript.',
        price: '$350',
        features: [
            { text: 'Chapter-by-chapter analysis.' },
            { text: 'Suggestions for improving pacing, dialogue, and character development.' },
            { text: 'Comprehensive report with actionable advice for each chapter.' },
            { text: 'Delivery in 10 business days.' }
        ],
        featured: true,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
    {
        name: 'Comprehensive Package',
        description: 'A thorough critique for maximum impact.',
        price: '$600',
        features: [
            { text: 'Full critique with rewrite suggestions.' },
            { text: 'Guidance on narrative flow and stylistic improvements.' },
            { text: 'Personalized consultation with a manuscript expert.' },
            { text: 'One-on-one feedback session to address questions.' },
            { text: 'Delivery in 15 business days.' }
        ],
        featured: false,
        ctaLabel: 'Get Started',
        ctaHref: '#contact',
    },
];

export default function ManuscriptServicesSection() {
    return (
        <section id="services" className="bg-[#F9F9F9] px-5 py-20 md:px-[100px]">
            <div className="mx-auto w-full max-w-[1512px]">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center gap-[28px]">
                    <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-2%] text-[#14120F] md:text-[40px] md:leading-[48px] max-w-[706px]">
                        Choose the level of review that suits your needs
                    </h2>
                    <p className="mx-auto max-w-[734px] text-base font-normal leading-[1.6] text-[#14120F]">
                        Tailor your publishing experience with our flexible packages designed to meet your specific needs
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
