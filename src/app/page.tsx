import Authorpreneur from '@/components/screens/homepage/Authorpreneur';
import AuthorsCorner from '@/components/screens/homepage/AuthorsCorner';
import AuthorsServices from '@/components/screens/homepage/AuthorsServices';
import Review from '@/components/screens/homepage/Review';
import WhyPublishWithUs from '@/components/screens/homepage/WhyPublishWithUs';

export default function Home() {
  return (
    <>
      <WhyPublishWithUs />
      <AuthorsServices />
      <Review />
      <Authorpreneur />
      <AuthorsCorner />
    </>
  );
}
