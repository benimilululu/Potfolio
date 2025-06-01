
import snowProfilePic from '../images/FA18D6FF-6285-43E5-A6CA-58F1375CCF02.jpeg'

export default function Section_1() {
  const smallTextAboutMe =
    'Hi. I am Martin Jovanovic. Passionate Front-end JavaScript Developer.';

  return (
    <div className='relative md:h-[45vh] cursor-default '>
      <div className='grid grid-cols-1 md:absolute  md:grid-cols-2 h-full  rounded-full items-center'>
        <div className='md:flex md:justify-end md:mr-10 mt-5 md:mt-0 w-4/6  h-full m-auto'>
          <img
            className='shape bg-transparent rounded-full object-cover  m-auto'
            src={snowProfilePic}
            alt='profile pic'
          ></img>
        </div>
        <div className='md:flex md:justify-start text-4xl md:text-5xl pt-4 w-fit md:w-3/6 font-serif font-bold text-white mt-5 pb-10 md:mr-10'>
          <div>
            <div className='animated-title m-auto'>
              <div className='text-top'>
                <div>
                  <span className='text-white'>JavaScript </span>
                  <span className='mt-4'>Software</span>
                </div>
              </div>
              <div className='text-bottom'>
                <div>Developer</div>
              </div>
            </div>
            <p className='text-2xl  static'>{smallTextAboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
