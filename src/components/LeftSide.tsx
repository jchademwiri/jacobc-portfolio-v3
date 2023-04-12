'use client';
import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex h-full w-full flex-col items-center justify-end gap-6 text-light'
    >
      <div className='flex flex-col gap-4'>
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <TbBrandGithub />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialYoutube />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialLinkedin />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialFacebook />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialInstagram />
          </span>
        </Link>
      </div>
      <span className='h-[200px] w-[2px] bg-dark'></span>
    </motion.div>
  );
};
export default LeftSide;
