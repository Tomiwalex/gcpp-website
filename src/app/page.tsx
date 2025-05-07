import Cta from '@/components/Cta';
import Authorpreneur from '@/components/screens/homepage/Authorpreneur';
import AuthorsCorner from '@/components/screens/homepage/AuthorsCorner';
import AuthorsServices from '@/components/screens/homepage/AuthorsServices';
import HeroSection from '@/components/screens/homepage/HeroSection';
import PublishingProcess from '@/components/screens/homepage/PublishingProcess';
import PublishingTimeline from '@/components/screens/homepage/PublishingTimeline';
import Review from '@/components/screens/homepage/Review';
import SubmitManuscript from '@/components/screens/homepage/SubmitManuscript';
import WhyPublishWithUs from '@/components/screens/homepage/WhyPublishWithUs';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPublishWithUs />
      <AuthorsServices />
      <Review />
      <Authorpreneur />
      <AuthorsCorner />
      <SubmitManuscript />
      <PublishingProcess />
      <PublishingTimeline />
      <Cta />
    </>
  );
}
