import { motion } from 'framer-motion';
import Link from 'next/link';

const ResumeButton = () => {
  return (
    <Link href='/' target='_blank'>
      <motion.button
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeIn' }}
        className='rounded-md border border-green px-4 py-2 text-[13px] text-green duration-300 hover:bg-hoverColor'
      >
        Resume
      </motion.button>
    </Link>
  );
};
export default ResumeButton;
