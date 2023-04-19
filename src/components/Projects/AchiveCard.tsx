import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import uuid from 'react-uuid';

interface Achive {
  title: String;
  description: String;
  technologies: String[];
  link: String;
}

const AchiveCard = ({ title, description, technologies, link }: Achive) => {
  return (
    <div className='group flex w-full flex-col justify-center gap-6 rounded-lg bg-[#112240] p-7 transition-transform duration-300 hover:-translate-y-2'>
      <div className='flex items-center justify-between'>
        <Link href={`/`} target='_blank' title='Project Title'>
          <FaRegFolder className='text-3xl' />
        </Link>{' '}
        <Link href={`${link}`} target='_blank' title='Project Title'>
          <RxOpenInNewWindow className='text-3xl hover:text-green' />
        </Link>
      </div>
      <div>
        <h2 className='text-xl font-semibold tracking-wide group-hover:text-green'>
          {title}
        </h2>
        <p className='mt-3 text-sm'>{description}</p>
      </div>
      <ul className='flex flex-wrap items-center justify-between gap-2 text-xs text-dark md:text-sm'>
        {technologies.map((tech) => (
          <li key={uuid()} className='text-green'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AchiveCard;
