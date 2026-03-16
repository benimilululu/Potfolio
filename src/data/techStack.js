import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

export const techStack = [
  {
    name: 'HTML5',
    icon: TiHtml5,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-orange-600',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-sky-600',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    className:
      'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 rounded-lg shadow-2xl text-yellow-300',
  },
  {
    name: 'React',
    icon: FaReact,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-sky-400',
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-white',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-blue',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24',
  },
  {
    name: 'Firebase',
    icon: IoLogoFirebase,
    className: 'w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-yellow-400',
  },
];
