import PublishHeroSection from '@/components/screens/publish/HeroSection';
import TrackRecordSection from '@/components/screens/publish/TrackRecordSection';
import ServicesSection from '@/components/screens/publish/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Publish Your Book | GCPP',
    description:
        'Publish your book with GCPP. Choose from our flexible publishing packages — Basic, Standard, or Premium — and bring your story to readers worldwide.',
};

export default function PublishPage() {
    return (
        <main>
            <PublishHeroSection />
            <TrackRecordSection />
            <ServicesSection />
            <TestimonialsSection />
        </main>
    );
}
