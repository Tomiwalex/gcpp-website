'use client';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useSearchParams } from 'next/navigation';

const Pagination = () => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const { UpdateQuery } = useQueryParams();

  return (
    <div className="my-8 flex justify-center gap-2 lg:my-12">
      <button
        type="button"
        disabled
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-[0.76px] border-[#ACACAC] text-[#ACACAC] duration-300 ease-in-out hover:bg-[#14120F] hover:text-white"
      >
        <Icon icon="cuida:arrow-left-outline" className="text-lg" />
      </button>

      {['1'].map((page, index) => (
        <button
          onClick={() => UpdateQuery('page', `${page}`)}
          className={`"flex h-12 w-12 cursor-pointer items-center justify-center rounded text-base font-semibold ${
            currentPage === page ? 'text-[#14120F]' : 'text-[#D0D0D0]'
          } duration-300 ease-in-out hover:bg-[#FAFAFA] ${
            currentPage === page && 'bg-[#fafafa]'
          } lg:text-lg`}
          key={index}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-[0.76px] border-[#ACACAC] text-[#ACACAC] duration-300 ease-in-out hover:bg-[#14120F] hover:text-white"
      >
        <Icon icon="cuida:arrow-right-outline" className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
