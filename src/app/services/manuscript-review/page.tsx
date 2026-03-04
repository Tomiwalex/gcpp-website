import ManuscriptHeroSection from '@/components/screens/manuscript-review/HeroSection';
import ManuscriptTrackRecordSection from '@/components/screens/manuscript-review/TrackRecordSection';
import ManuscriptServicesSection from '@/components/screens/manuscript-review/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Manuscript Review | GCPP',
    description:
        'Professional manuscript review services to help you refine your story and prepare for publication.',
};

export default function ManuscriptReviewPage() {
    return (
        <main>
            <ManuscriptHeroSection />
            <ManuscriptTrackRecordSection />
            <ManuscriptServicesSection />
            <TestimonialsSection />
        </main>
    );
}
