import IllustrationsHeroSection from '@/components/screens/illustrations/HeroSection';
import IllustrationsTrackRecordSection from '@/components/screens/illustrations/TrackRecordSection';
import IllustrationsServicesSection from '@/components/screens/illustrations/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Illustrations | GCPP',
    description:
        'Professional illustration services from GCPP. Bring your story to life with bespoke visual art tailored to your narrrative.',
};

export default function IllustrationsPage() {
    return (
        <main>
            <IllustrationsHeroSection />
            <IllustrationsTrackRecordSection />
            <IllustrationsServicesSection />
            <TestimonialsSection />
        </main>
    );
}
