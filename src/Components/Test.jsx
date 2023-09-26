import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import transition from '../transition.js';

// const marqueeVariants = {
//   animate: {
//     x: [0, -1480],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: 'loop',
//         duration: 10,
//         ease: 'linear',
//       },
//     },
//   },
// };

const Test = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const history = useNavigate();

  useEffect(() => {
    const target = 100;
    const duration = 10000;
    const interval = duration / target;

    const animation = animate(count, target, { duration: 10 });

    const counterInterval = setInterval(() => {
      if (count.get() === target) {
        clearInterval(counterInterval);
        // Perform your navigation action here, e.g., history('/');
        history('/home');
        console.log('Countdown finished');
      }
    }, interval);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(counterInterval);
    };
  }, [count]);

  // useEffect(() => {
  //   const animation = animate(count, 100, { duration: 10 });

  //   return animation.stop;
  // }, []);

  // function counter() {
  //   let count = 1;
  //   const target = 100;
  //   const duration = 10000;
  //   const interval = duration / target;

  //   function updateCounter() {
  //     if (count === target) {
  //       clearInterval(counterInterval);
  //       history('/');
  //     } else {
  //       count++;
  //     }
  //   }

  //   const counterInterval = setInterval(updateCounter, interval);
  // }

  // counter();

  return (
    <div>
      {' '}
      {/* <div className=' border-[20px] border-neutral-100 absolute z-10 min-h-screen min-w-full'></div> */}
      <div className='bg-neutral-900 flex flex-col justify-center items-center min-h-screen relative border-[20px] border-neutral-100'>
        {/* <motion.button
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 20 }}
          transition={{ duration: 1 }}
          className='text-9xl font-notoemoji'
        >
          😵‍💫
        </motion.button> */}
        <motion.div className='font-notosans font-black scale-[15] antialiased text-pink-400'>{rounded}</motion.div>
        {/* <motion.button
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1, opacity: 0 }}
          whileTap={{ scale: 0.9 }}
          className='bg-pink-400 p-5 rounded-md font-notoemoji'
        >
          <Link to='/'>enter 🤔</Link>
        </motion.button> */}

        <div className='absolute top-5 left-5 text-pink-400 font-playfair text-6xl'>hello ✌️</div>
        <div className='absolute bottom-5 left-5 text-6xl text-pink-400 font-playfair'>miss bb</div>
        <div className='absolute bottom-5 right-5 text-6xl text-pink-400 font-playfair'>mister doo</div>
        <div className='absolute top-5 right-5 text-6xl text-pink-400 font-playfair'>miss worm</div>

        {/* <motion.div
          className='border-2 border-red-500 text-neutral-100 w-screen max-w-full overflow-x-hidden whitespace-nowrap will-change-transform'
          animate={{ x: [0, -1035] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 10, ease: 'linear' } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima commodi perferendis distinctio maxime. Doloremque voluptas ad corrupti
          tenetur nulla architecto veniam iste, veritatis distinctio totam libero dolores recusandae excepturi porro modi cum voluptate sed quisquam
          non molestias quis reiciendis, explicabo voluptatum laboriosam. Quod, molestias illum odio optio eum fugiat!
        </motion.div> */}
        {/* 
        <div className='w-screen max-w-full h-[206px] overflow-x-hidden relative'>
          <motion.div
            className='text-9xl text-pink-400 absolute whitespace-nowrap will-change-transform'
            variants={marqueeVariants}
            animate='animate'
          >
            <h1 className='lowercase font-notosans font-black'>
              thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank
              you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you
              thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank you thank
              you thank you thank you thank you thank you thank you thank you
            </h1>
          </motion.div>
        </div> */}

        <motion.div
          class='absolute flex overflow-x-hidden text-pink-400 font-playfair scale-[.5] bottom-14 min-w-fit w-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div class='py-12 animate-marquee whitespace-nowrap'>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
          </div>

          <div class='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
            <span class='mx-4 text-9xl'>loading...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default transition(Test);
