import { Icon } from '@iconify/react';

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[6px]">
      {[1, 2, 3, 4, 5].map((value: number, index: number) => (
        <div
          key={index}
          className={`h-7 w-7 ${value <= rating ? 'bg-[#219653]' : 'bg-[#D9D9D9]'} flex items-center justify-center`}
        >
          <Icon icon="simple-icons:trustpilot" className="text-xl text-white" />
        </div>
      ))}
    </div>
  );
}
