import { forwardRef } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

export default forwardRef(function Contact(props, ref) {
  const fullName = 'Martin Jovanovic';
  const phoneNumber = '+389 78 20 21 22';
  const email = 'jovanovik.martin2@gmail.com';

  return (
    <div
      className='pb-10 font-bold text-white mx-2 md:grid md:grid-cols-1 md:w-4/6 md:m-auto'
      ref={ref}
    >
      <p className='text-3xl font-bold text-left '>GET IN TOUCH</p>
      <div className='box = mt-4 rounded-lg border-2 md:w-5/6 md:m-auto md:mt-4'>
        <div className='content mt-2'>
          <p className='border-b-4 w-fit m-auto mb-2'>Contact info</p>
          <p className='text-2xl'>{fullName}</p>
          <div className='flex justify-center'>
            <FaPhoneAlt className='transform translate-y-1/2 text-2xl mr-3' />
            <a
              href={`tel:${phoneNumber}`}
              className='text-xl text-white pt-3 content-end border-b-2'
            >
              Phone : {phoneNumber}
            </a>
          </div>
          <div className='flex  justify-center'>
            <TfiEmail className=' transform translate-y-1/2 text-xl ' />
            <EmailLink
              email={email}
              subject='Inquiry'
              body="Hello, I'm contacting you regarding..."
            />
          </div>
        </div>
      </div>
    </div>
  );
});

function EmailLink({ email, subject, body }) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const mailtoHref = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <a
      href={mailtoHref}
      className='mt-2 mb-4 ml-1 border-b-2 md:hover:text-blue'
      style={{ textDecoration: 'none', color: 'white' }}
    >
      Send email : {email}
    </a>
  );
}
