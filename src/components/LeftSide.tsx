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
      className='w-full h-full flex flex-col items-center justify-end gap-6 text-light'
    >
      <div className='flex flex-col gap-4'>
        <Link href='github' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialYoutube />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialLinkedin />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialFacebook />
          </span>
        </Link>
        <Link href='github' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialInstagram />
          </span>
        </Link>
      </div>
      <span className='w-[2px] h-[100px] bg-dark'></span>
    </motion.div>
  );
};
export default LeftSide;
