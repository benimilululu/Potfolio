import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';

export default function TechStack() {
  return (
    <div className='text-white pb-10'>
      <p className='text-4xl whitespace-nowrap w-fit font-bold transform translate-y-1/2 col-span-3 mb-5 m-auto border-b-4'>
        Tech Stack
      </p>
      <div className='bb grid place-items-center grid-cols-3 md:grid-cols-6 gap-2 w-9/12 m-auto mt-10 pb-20 rounded-lg'>
        <TiHtml5 className='w-20 h-20   text-orange-600' />
        <FaCss3Alt className='w-20 h-20   text-sky-600' />
        <SiJavascript className='w-20 h-20  rounded-lg shadow-2xl text-yellow-300 bg-black' />
        <FaReact className='w-20 h-20 text-sky-400' />
        <TbBrandNextjs className='w-20 h-20' />
        <SiTailwindcss className='w-20 h-20 ' />
      </div>
    </div>
  );
}
