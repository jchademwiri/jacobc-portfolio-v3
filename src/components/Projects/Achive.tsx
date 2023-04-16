'use client';
import { Inter } from 'next/font/google';
import AchiveCard from './AchiveCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

const Achive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.article
      id='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className='mx-auto max-w-contentContainer px-4 py-24'
    >
      <div className='flex w-full flex-col'>
        <h2 className={`${inter.className} text-center text-3xl font-bold`}>
          Other Projects
        </h2>
        <p className='text-center text-green'>View The Archive</p>
        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
          <AchiveCard
            title='Project Title'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            tenetur porro iusto, adipisci voluptatibus id.'
            technologies={['NextJS', 'TailwindCSS', 'Vercel']}
            link='/'
          />
          <AchiveCard
            title='Project Title'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            tenetur porro iusto, adipisci voluptatibus id.'
            technologies={['NextJS', 'TailwindCSS', 'Vercel']}
            link='/'
          />
          <AchiveCard
            title='Project Title'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          tenetur porro iusto, adipisci voluptatibus id.'
            technologies={['NextJS', 'TailwindCSS', 'Vercel']}
            link='/'
          />

          {showMore && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <AchiveCard
                  title='Project Title'
                  description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur porro iusto, adipisci voluptatibus id.'
                  technologies={['NextJS', 'TailwindCSS', 'Vercel']}
                  link='/'
                />
              </motion.div>
            </>
          )}
        </div>
        <div className='mt-12 flex items-center justify-center'>
          {showMore ? (
            <button
              onClick={() => setShowMore(false)}
              className='h-12 w-36 rounded-md border border-green text-[13px] text-green duration-300 hover:bg-hoverColor'
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              className='h-12 w-36 rounded-md border border-green text-[13px] text-green duration-300 hover:bg-hoverColor'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
export default Achive;
