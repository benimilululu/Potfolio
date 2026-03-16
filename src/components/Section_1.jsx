import snowProfilePic from '../images/FA18D6FF-6285-43E5-A6CA-58F1375CCF02.jpeg';

export default function Section_1({ onPortfolioClick, onContactClick }) {
  const eyebrow = 'Frontend Engineer';
  const smallTextAboutMe =
    'Hi. I am Martin Jovanovic. Passionate Front-end JavaScript Developer.';

  return (
    <section className='relative mx-auto w-[92%] max-w-6xl px-2 pb-0 pt-6 md:px-0 md:pb-2 md:pt-8'>
      <div className='glass noise rounded-[36px] border border-white/10 px-5 py-8 shadow-glass md:px-8 md:py-10 xl:px-10 xl:py-12'>
        <div className='grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] xl:gap-10'>
          <div className='order-2 text-left md:order-1'>
            <p className='neon-text mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-accent/90'>
              {eyebrow}
            </p>

            <h1 className='text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl'>
              Building immersive interfaces with clean motion and sharp front-end systems.
            </h1>

            <p className='mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg'>
              {smallTextAboutMe}
            </p>

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <button
                type='button'
                onClick={onPortfolioClick}
                className='rounded-full border border-accent/40 bg-accent/15 px-6 py-3 text-sm font-semibold text-white shadow-neon transition hover:bg-accent/20 hover:shadow-neon-lg'
              >
                View Portfolio
              </button>

              <button
                type='button'
                onClick={onContactClick}
                className='glass rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/30 hover:bg-white/10'
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className='order-1 flex justify-center md:order-2 md:justify-end'>
            <div className='neon-border relative flex h-[310px] w-[310px] items-center justify-center rounded-[38px] border border-white/10 bg-transparent p-5 sm:h-[360px] sm:w-[360px] md:h-[340px] md:w-[340px] lg:h-[380px] lg:w-[380px] xl:h-[410px] xl:w-[410px]'>
              <img
                className='shape bg-transparent rounded-full object-cover m-auto'
                src={snowProfilePic}
                alt='Martin Jovanovic portrait'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
