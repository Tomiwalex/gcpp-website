'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Add or update a query parameter
  const UpdateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    router.push(`?${params.toString()}`);
  };

  // Remove a query parameter
  const removeQuery = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    router.push(`?${params.toString()}`);
  };

  return { UpdateQuery, removeQuery };
}
