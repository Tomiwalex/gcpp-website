import AudiobookHeroSection from '@/components/screens/audiobook-creation/HeroSection';
import AudiobookTrackRecordSection from '@/components/screens/audiobook-creation/TrackRecordSection';
import AudiobookServicesSection from '@/components/screens/audiobook-creation/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Audiobook Creation | GCPP',
    description:
        'Transform your book into an immersive audio experience with GCPP. Professional narration and production services for authors.',
};

export default function AudiobookCreationPage() {
    return (
        <main>
            <AudiobookHeroSection />
            <AudiobookTrackRecordSection />
            <AudiobookServicesSection />
            <TestimonialsSection />
        </main>
    );
}
