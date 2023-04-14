'use client';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={` mx-auto flex max-w-contentContainer flex-col items-center gap-4 py-10 text-center md:py-24 md:px-10 lg:gap-8 xl:px-4`}
    >
      <p className='text-lg font-semibold tracking-wide text-green'>
        04. Contact me
      </p>
      <h2 className=' text-5xl font-semibold'>Get In Touch</h2>
      <p className='mx-auto max-w-[600px] text-dark'>
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <button className='h-12 w-36 rounded-md border border-green text-[13px] text-green duration-300 hover:bg-hoverColor'>
        Say Hello, 👋
      </button>
    </motion.section>
  );
};
export default Contact;
