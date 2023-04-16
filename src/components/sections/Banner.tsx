'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Banner = () => {
  return (
    <section
      id='home'
      className={`section mx-auto flex max-w-contentContainer flex-col gap-4 py-10 md:py-24 md:px-10 lg:gap-8 xl:px-4`}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`${inter.className} text-lg tracking-wide text-green`}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='flex flex-col text-4xl font-semibold  lg:text-6xl'
      >
        Jacob Chademwiri{' '}
        <span className='mt-2 text-dark lg:mt-4'>I build websites.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-base font-medium text-dark md:max-w-[650px]'
      >
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem. <br />
        <Link href={`/`} target='_blank'>
          <span className='group relative inline-flex h-7 cursor-pointer  overflow-x-hidden text-green'>
            Learn More.
            <span className='absolute left-0 bottom-1 h-[2px] w-full -translate-x-[110%] bg-green transition-transform duration-500 group-hover:translate-x-0'></span>
          </span>
        </Link>
      </motion.p>
      <Link href={`#projects`}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='h-14 w-52 rounded-md border border-green text-sm tracking-wide text-green duration-500 hover:bg-hoverColor'
        >
          Check Out my projects
        </motion.button>
      </Link>
    </section>
  );
};
export default Banner;
