'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AuthordCard = ({
  author,
}: {
  author: { name: string; imageSrc: string };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cursor-pointer overflow-hidden rounded border border-[#EAEAEA] bg-white transition-all duration-500 ease-in-out hover:border-[#EB9202] hover:drop-shadow-md"
    >
      <div className="relative aspect-[1/1.1] w-full overflow-hidden bg-gray-100">
        <Image
          fill
          src={author.imageSrc}
          alt={author.name}
          className="w-full object-cover"
        />
      </div>
      <p className="py-4 text-center text-sm font-semibold text-[#14120F] lg:text-base">
        {author.name}
      </p>
    </motion.div>
  );
};

export default AuthordCard;
