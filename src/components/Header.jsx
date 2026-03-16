import toast, { Toaster } from 'react-hot-toast';

export default function Header(props) {
  const navItems = [
    {
      id: 'about',
      label: 'About me',
      onClick: props.AboutMeHandler,
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      onClick: props.PortfolioHandler,
    },
    {
      id: 'contact',
      label: 'Contact',
      onClick: props.ContactHandler,
    },
  ];

  const notifySuccess = () =>
    toast('Hi There.', {
      icon: '👏',
    });

  return (
    <div className='h-full'>
      <Toaster position='top-right' reverseOrder={false} />
      <header className='fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-[rgba(18,12,34,0.78)] px-4 py-3 shadow-glass backdrop-blur-xl transition-all duration-300 ease-in-out md:px-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <button
            type='button'
            className='w-fit text-left text-2xl font-bold text-white transition hover:text-white/90 md:text-2xl'
            onClick={notifySuccess}
            aria-label='Show greeting toast'
          >
            Martin.dev
          </button>

          <nav aria-label='Primary' className='w-full md:w-auto'>
            <ul className='grid grid-cols-3 gap-2 md:flex md:items-center md:gap-3'>
              {navItems.map((item) => {
                const isActive = props.activeSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type='button'
                      onClick={item.onClick}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative w-full rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition duration-300 md:text-base ${
                        isActive
                          ? 'border-accent/40 bg-accent/15 text-white shadow-neon'
                          : 'border-white/10 bg-white/0 text-white/72 hover:border-white/20 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className='relative z-10'>{item.label}</span>
                      <span
                        aria-hidden='true'
                        className={`pointer-events-none absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
