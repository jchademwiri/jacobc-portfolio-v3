import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id='about'
      className='hidden w-full items-center justify-center gap-4 py-6 md:inline-flex'
    >
      <Link href='github' target='_blank'>
        <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
          <TbBrandGithub />
        </span>
      </Link>
      <Link href='github' target='_blank'>
        <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
          <SlSocialYoutube />
        </span>
      </Link>
      <Link href='github' target='_blank'>
        <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
          <SlSocialLinkedin />
        </span>
      </Link>
      <Link href='github' target='_blank'>
        <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
          <SlSocialFacebook />
        </span>
      </Link>
      <Link href='github' target='_blank'>
        <span className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-green'>
          <SlSocialInstagram />
        </span>
      </Link>
    </footer>
  );
};
export default Footer;
