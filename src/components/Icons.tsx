'use client';
import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram
} from 'react-icons/sl';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Icons = () => {
  return (
    <>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeIn' }}
      >
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialYoutube />
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeIn' }}
      >
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialLinkedin />
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: 'easeIn' }}
      >
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialFacebook />
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeIn' }}
      >
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <SlSocialInstagram />
          </span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: 'easeIn' }}
      >
        <Link href='github' target='_blank'>
          <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
            <TbBrandGithub />
          </span>
        </Link>
      </motion.div>
    </>
  );
};
export default Icons;
