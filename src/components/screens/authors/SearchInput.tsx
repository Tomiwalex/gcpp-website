'use client';

import { useQueryParams } from '@/hooks/useQueryParams';
import { Icon } from '@iconify/react/dist/iconify.js';

const SearchInput = () => {
  const { UpdateQuery, removeQuery } = useQueryParams();

  return (
    <div className="my-6 flex items-center gap-2 border border-[#EAEAEA] px-5 py-3 lg:px-11">
      <Icon icon="iconamoon:search-thin" className="text-xl text-[#14120F]" />
      <input
        className="flex-1 focus:outline-0"
        onChange={e => {
          if (e.target.value) {
            UpdateQuery('search', e.target.value);
          } else {
            removeQuery('search');
          }
        }}
        type="search"
        placeholder="Search Authors"
      />
    </div>
  );
};

export default SearchInput;
