'use client';
import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Baum = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className={`${inter.className} flex gap-1  text-xl font-medium`}>
        Freelance Web Developer{' '}
        <span className='tracking-wide text-green'>@ Baum Systems</span>
      </h3>
      <p className='mt-1 text-sm font-medium text-dark'>Jan 2020 - Dec 2022</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='flex gap-2 text-base text-dark'>
          <span className='mt-1 text-green'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, alias
          eum! Vitae, cum sed quas dolore pariatur, obcaecati et quis sunt
          repellendus fuga beatae perspiciatis assumenda esse, itaque ad est?
        </li>
        <li className='flex gap-2 text-base text-dark'>
          <span className='mt-1 text-green'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, alias
          eum! Vitae, cum sed quas dolore pariatur, obcaecati et quis sunt
          repellendus fuga beatae perspiciatis assumenda esse, itaque ad est?
        </li>
        <li className='flex gap-2 text-base text-dark'>
          <span className='mt-1 text-green'>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, alias
          eum! Vitae, cum sed quas dolore pariatur, obcaecati et quis sunt
          repellendus fuga beatae perspiciatis assumenda esse, itaque ad est?
        </li>
      </ul>
    </motion.div>
  );
};
export default Baum;
