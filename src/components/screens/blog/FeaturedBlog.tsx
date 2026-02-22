import Image from 'next/image';
import Link from 'next/link';

const FeaturedBlog = ({ post }: { post?: any }) => {
  return (
    <section className="px-4 md:px-[50px]">
      <div className="mx-auto max-w-[1486px]">
        {/* featured post */}
        <div className="mt-9 grid min-h-[300px] grid-cols-1 rounded border-[1.1px] border-[#EAEAEA] bg-[#F9F9F9] md:max-h-min md:grid-cols-2 lg:mt-12">
          <div className="relative max-h-[360px] min-h-[300px] cursor-pointer overflow-hidden md:aspect-auto md:max-h-[unset]">
            <Image
              fill={true}
              alt={'gcpp-blog'}
              src={'/background-images/hero-bg.png'}
              className="object-cover transition-all duration-500 ease-in-out hover:scale-105"
            />
          </div>

          <div className="space-y-2 p-4 md:p-8 lg:space-y-[11px] lg:px-[54px] lg:py-14">
            <small className="text-sm font-normal text-[#56575d]">
              {new Date().toDateString()} | by Kwadw(o) Naya
            </small>

            <div className="flex flex-1 flex-col space-y-3">
              <h3 className="text-lg font-semibold text-[#14120f] md:text-2xl lg:text-3xl lg:leading-[42.4px]">
                Common Mistakes First-Time Authors Make and How to Avoid Them
              </h3>

              <p className="line-clamp-7 text-sm leading-[1.54] font-normal text-balance overflow-ellipsis text-[#43413E] lg:text-base">
                Embarking on your first publishing journey can be thrilling yet
                fraught with pitfalls. One common mistake is the lack of
                planning. Having a clear plan and timeline is crucial for
                staying organized and on track. Ignoring the audience is another
                frequent error; understanding who your readers are and what they
                want is essential for a successful book. Skipping professional
                editing is a mistake many first-time authors make. A
                professional editor can provide invaluable feedback and polish
                your manuscript to a high standard.
              </p>
            </div>

            <Link
              href="/blog/common-mistakes"
              className="mt-10 inline-block w-max rounded-[2px] border border-[#14120F] px-10 py-3 text-sm font-normal text-[#14120F] transition-all duration-500 ease-in-out hover:bg-[#14120f] hover:text-white lg:px-12 lg:text-base"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
