'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex h-full w-full flex-col items-center justify-end gap-6 text-light'
    >
      <Link href='mailto:jchademwiri@gmail.com' target='_blank'>
        <p className='my-6 flex w-72 rotate-90 text-sm tracking-wide text-green'>
          jchademwiri@gmail.com
        </p>
      </Link>
      <span className='h-[200px] w-[2px] bg-dark'></span>
    </motion.div>
  );
};
export default RightSide;
