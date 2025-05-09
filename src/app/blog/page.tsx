import BlogCard from '@/components/BlogCard';
import { articles } from '@/components/data/articles';
import FeaturedBlog from '@/components/screens/blog/FeaturedBlog';
import Pagination from '@/components/screens/blog/Pagination';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blogs - Golden Child Promotions Publishing',
  description:
    ' Your go-to space for tips, inspiring stories, and everything you need to navigate your publishing journey.',
};

const page = () => {
  return (
    <Suspense fallback={'loading...'}>
      <div className="py-12 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-4xl font-semibold lg:text-5xl">
            The Author&apos;s Corner
          </h2>
          <p className="mx-auto w-full max-w-[704px] text-base font-normal text-[#14120f]">
            Your go-to space for tips, inspiring stories, and everything you
            need to navigate your publishing journey.
          </p>
        </div>

        <FeaturedBlog />
        <Pagination />
        <div className="grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[360px_360px_360px]">
          {articles.map((article, index) => (
            <BlogCard
              key={index}
              title={article.title}
              description={article.description}
              imageSrc={article.imageSrc}
              href={article.href}
              date={article.date}
              author={article.author}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default page;
