'use client';

import { members } from '@/components/data/members';
import AuthordCard from './AuthordCard';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Suspense } from 'react';

const Authors = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toLowerCase() || '';
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(search)
  );
  return (
    <Suspense fallback={'loading...'}>
      <div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {filteredMembers.map(author => (
            <AuthordCard author={author} key={author.name} />
          ))}
        </div>

        {!filteredMembers.length && (
          <div className="mx-auto my-20 flex max-w-[150px] flex-col items-center justify-center text-center">
            <Icon className="text-5xl" icon={'lucide:search-x'} />
            <p className="mt-3 font-medium text-gray-600">Author not found</p>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default Authors;
