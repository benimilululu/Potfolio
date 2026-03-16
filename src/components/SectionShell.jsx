import { forwardRef } from 'react';

const SectionShell = forwardRef(function SectionShell(
  {
    id,
    title,
    subtitle,
    children,
    className = '',
    contentClassName = '',
    glass = false,
  },
  ref
) {
  const sectionClassName = [
    'mx-auto w-full max-w-6xl px-4 md:px-0 md:w-5/6',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const innerClassName = [
    glass ? 'glass rounded-[32px] border border-white/10 p-6 md:p-8' : '',
    contentClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={sectionClassName} ref={ref}>
      {(title || subtitle) && (
        <div className='mb-8'>
          {title && (
            <h2 className='text-2xl font-semibold tracking-tight text-white md:text-3xl'>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className='mt-2 text-sm text-white/60 md:text-base'>{subtitle}</p>
          )}
        </div>
      )}

      <div className={innerClassName}>{children}</div>
    </section>
  );
});

export default SectionShell;
