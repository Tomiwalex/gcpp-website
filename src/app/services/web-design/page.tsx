import WebDesignHeroSection from '@/components/screens/web-design/HeroSection';
import WebDesignTrackRecordSection from '@/components/screens/web-design/TrackRecordSection';
import WebDesignServicesSection from '@/components/screens/web-design/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Web Design | GCPP',
    description:
        'Professional web design services for authors. Create a stunning online hub to showcase your portfolio, sell your books, and connect with readers.',
};

export default function WebDesignPage() {
    return (
        <main>
            <WebDesignHeroSection />
            <WebDesignTrackRecordSection />
            <WebDesignServicesSection />
            <TestimonialsSection />
        </main>
    );
}
