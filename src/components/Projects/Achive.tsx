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
            title='King Tax Accounting Services'
            description='King Tax Accounting Services is a company that helps to register companies and provide accounting services and tax returns for companies and individuals, they also ensure that your business is tax compliant.'
            technologies={['React', 'NextJS', 'TailwindCSS', 'Vercel']}
            link='https://www.kingtaxaccounting.co.za/'
          />
          <AchiveCard
            title='Sea Harvest Zimbabwe'
            description='Sea Harvest is a Zimbabwean fish company that specializes in fresh fish from the Kariba and supplies in places in Mutare. I spearheaded the development of the site from the ground up.'
            technologies={['React', 'Styled Components', 'Netlify']}
            link='https://seaharvest.co.zw/'
          />
          <AchiveCard
            title='Edurite'
            description='Edurite offers unique, personalized, professional, virtual assistance with academic assignments and research projects in Business Studies. I championed the development of the site from the ground up using wordpress using elementor page builder, I then created social media pages for the site and connected their business to Google my Business.'
            technologies={['WordPress', 'Elementor']}
            link='https://www.edurite.co.za/'
          />

          {showMore && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <AchiveCard
                  title='Playhouse Media Group'
                  description='Playhouse Media Group is a media company that specializes in the creation responsive websites and applications that are user friendly and easy to use and seo optimized with a focus on speed and performance.'
                  technologies={[
                    'NextJS',
                    'TailwindCSS',
                    'SanityCMS',
                    'Cloudinary',
                    'Vercel',
                  ]}
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
