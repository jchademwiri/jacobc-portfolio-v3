import { logo, profile, social } from '@/data/assets';
import { skills } from '@/data/Skills';
import Image from 'next/image';
import { AiFillThunderbolt } from 'react-icons/ai';
import uuid from 'react-uuid';
import TitleSection from '../TitleSection';

const About = () => {
  return (
    <section
      id='about'
      className={` mx-auto flex max-w-contentContainer flex-col gap-4 py-10 md:py-24 md:px-10 lg:gap-8 xl:px-4`}
    >
      <TitleSection titleNumber='01.' title='About me' />
      <div className='flex flex-col gap-16 lg:flex-row'>
        <div className='flex w-full flex-col gap-4 text-base font-medium text-dark lg:w-2/3'>
          <p>
            Hello! My name is Noor Mohammad and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about
            <span className='text-green'> HTML & CSS!</span>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className='mt-6 grid max-w-[450px] grid-cols-2 gap-2 text-sm '>
            {skills.map(({ name }) => (
              <li key={uuid()} className='flex items-center gap-2'>
                <span className='text-green'>
                  <AiFillThunderbolt />
                </span>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className='group relative h-80 w-full lg:w-1/3'>
          <div className='group absolute -left-6 -top-6 h-80 w-full rounded-lg'>
            <div className='relative z-20 flex h-full w-full pl-6 lg:pl-0'>
              <Image
                className='h-full rounded-lg object-cover'
                src={logo}
                alt='Profile Picture'
              />
              <div className='absolute top-0 left-0 hidden h-80 w-full rounded-md bg-green/20 duration-300 group-hover:bg-transparent lg:inline-block'></div>
            </div>
          </div>
          <div className='top-4 left-4 hidden h-80 w-full rounded-md border-2 border-green bg-transparent transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 lg:inline-flex'></div>
        </div>
      </div>
    </section>
  );
};
export default About;
