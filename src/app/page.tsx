import Authorpreneur from '@/components/screens/homepage/Authorpreneur';
import AuthorsCorner from '@/components/screens/homepage/AuthorsCorner';
import Review from '@/components/screens/homepage/Review';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Review />
      <Authorpreneur />
      <AuthorsCorner />
    </>
  );
}
