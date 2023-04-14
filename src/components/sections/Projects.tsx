'use client';
import TitleSection from '../TitleSection';
import { motion } from 'framer-motion';
import { Achive, ProjectOne, ProjectTwo, ProjectThree } from '../Projects';
const Projects = () => {
  return (
    <motion.section
      id='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.section
        className={`mx-auto flex max-w-contentContainer flex-col gap-4 py-10 md:py-24 md:px-10 lg:gap-8 xl:px-4`}
      >
        <TitleSection titleNumber='03.' title='Recently Completed Projects' />
        <div className='mt-10 flex w-full flex-col items-center justify-center gap-28'>
          {/* Featured Project 1 */}
          <ProjectOne />
          {/* Featured Project 2 */}
          <ProjectTwo />
          {/* Featured Project 3 */}
          <ProjectThree />
        </div>
        {/* Achive Projects  */}
      </motion.section>
      <Achive />
    </motion.section>
  );
};
export default Projects;
