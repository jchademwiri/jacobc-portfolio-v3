import { social } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub } from 'react-icons/tb';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const ProjectTwo = () => {
  return (
    <article className='mt-10 flex w-full flex-col items-center justify-center gap-28'>
      <div className='flex flex-col gap-6 lg:flex-row-reverse'>
        <Link
          href={`/`}
          target='_blank'
          className='group h-auto w-full lg:w-1/2'
        >
          <Image
            src={social}
            alt='project Two'
            className='h-full w-full object-contain'
          />
        </Link>
        <div className='z-10 flex w-full flex-col items-end justify-between gap-6 text-right  lg:w-1/2 '>
          <p className={`${inter.className} text-sm tracking-wide text-green`}>
            Featured Project
          </p>
          <h3 className='text-2xl font-bold'>Gascall Online Shop</h3>
          <p className=' rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base lg:-mr-16'>
            Gascall is an independent company, purchasing our LPG directly from the various
            refineries in South Africa and supplying same directly to our
            clients in cylinder and bulk format. We have our own cylinder stock
            and LPG filling plants to ensure that we manage our costs and pass
            on the benefit to our clients.
          </p>
          <ul
            className={`${inter.className} flex justify-between gap-2 text-xs tracking-wide text-dark md:gap-5 md:text-sm`}
          >
            <li>Wordpress</li>
            <li>Woo Commerce</li>
            <li>Elementor Pro</li>
            <li>Jet Engine</li>
          </ul>
          <div className='flex gap-4 text-2xl'>
          <Link
              href='https://github.com/jchademwiri/'
              target='_blank'
              className='duration-300 hover:text-green'
            >
              <TbBrandGithub />
            </Link>
            <Link
              href='https://gascall.co.za/'
              target='_blank'
              className='duration-300 hover:text-green'
            >
              <RxOpenInNewWindow />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProjectTwo;
