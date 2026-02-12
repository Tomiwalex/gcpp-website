import Authors from '@/components/screens/authors/Authors';
import SearchInput from '@/components/screens/authors/SearchInput';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Authors - Golden Child Promotions Publishing',
  description:
    'Our authors are the heart of what we do. Explore their works and discover the magic behind the pages',
};

const page = async () => {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="bg-[#F9F9F9] px-5 py-16 md:px-[100px]">
        <div className="mx-auto max-w-[1512px]">
          <div className="text-[#14120F]">
            <h1 className="mb-2 text-3xl font-semibold lg:text-4xl">
              Celebrating the Minds Behind the Stories
            </h1>
            <p className="max-w-[1011px] text-sm font-normal lg:text-base">
              Our authors are the heart of what we do. With each book, they
              bring unique perspectives, creative brilliance, and inspiring
              journeys to readers worldwide. Explore their works and discover
              the magic behind the pages.
            </p>
          </div>

          <SearchInput />
          <Authors />
        </div>
      </div>
    </Suspense>
  );
};

export default page;
