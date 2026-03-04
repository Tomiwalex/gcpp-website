import BookCoverHeroSection from '@/components/screens/book-cover-design/HeroSection';
import BookCoverTrackRecordSection from '@/components/screens/book-cover-design/TrackRecordSection';
import BookCoverServicesSection from '@/components/screens/book-cover-design/ServicesSection';
import TestimonialsSection from '@/components/screens/publish/TestimonialsSection';

export const metadata = {
    title: 'Book Cover Design | GCPP',
    description:
        'Make your book stand out with captivating covers from GCPP. Professional design services to ensure your story gets the attention it deserves.',
};

export default function BookCoverDesignPage() {
    return (
        <main>
            <BookCoverHeroSection />
            <BookCoverTrackRecordSection />
            <BookCoverServicesSection />
            <TestimonialsSection />
        </main>
    );
}
