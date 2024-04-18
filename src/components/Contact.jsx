import React, { useEffect } from 'react';
import { forwardRef } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

// !Exercise ->
// const getLongestNonRepeatingChar = (str) => {
//   let arr = [];
//   let subStr = '';
//   let longestChar = '';
//   let maxLength = 0;

//   for (const currentChar of str) {
//     if (subStr.includes(currentChar)) {
//       arr.push(subStr);
//       subStr = currentChar;
//     } else {
//       subStr += currentChar;
//     }
//   }
//   arr.push(subStr);

//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     if (currentValue.length > maxLength) {
//       maxLength = currentValue.length;
//       longestChar = currentValue;
//     }
//   }

//   return longestChar;
// };

export default forwardRef(function Contact(props, ref) {
  //
  // let letters = 'ABCDDDEFGHIIJKLMNOPQRSTU';

  // console.log(getLongestNonRepeatingChar(letters));

  //
  return (
    <div
      className='pb-10 font-bold text-white mx-2 md:grid md:grid-cols-1 md:w-4/6 md:m-auto'
      ref={ref}
    >
      <p className='text-3xl font-bold text-left '>GET IN TOUCH</p>
      <div className='box = mt-4 rounded-lg border-2 md:w-5/6 md:m-auto md:mt-4'>
        <div className='content '>
          <p className='text-2xl mt-4 '>Martin Jovanovic</p>
          <div className='flex justify-center'>
            <FaPhoneAlt className='transform translate-y-1/2 text-2xl mr-3' />
            <p className='text-xl pt-3 content-end'>Phone : +389 78 20 21 22</p>
          </div>
          <div className='flex  justify-center'>
            <TfiEmail className='mt-1 transform translate-y-1/2 text-xl ' />
            <p className='ml-2 text-xl pt-3 content-end pb-5'>
              Email : jovanovik.martin2@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
