import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import transition from '../transition.js';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Navbar from './Navbar.jsx';
import { Element } from 'react-scroll';
import Contacts from './Contacts.jsx';
// import Lenis from '@studio-freight/lenis';

const Home = () => {
  // const lenis = new Lenis({
  //   duration: 2,
  //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   // smooth: true,
  //   smoothTouch: false,
  // });

  // const lenis = new Lenis();

  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  return (
    <>
      <div className="bg-[url('./Assets/noise.gif')] fixed top-0 left-0 h-screen w-screen z-[1000] pointer-events-none opacity-[.02]"></div>
      <Element id='home' name='home'>
        <div className='relative h-screen bg-neutral-900 flex justify-center items-center text-9xl font-playfair text-neutral-100'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className='absolute top-0 w-[100%]'>
            <Navbar />
          </motion.div>

          <Link
            className='text-8xl mx-20 sm:mx-0 sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[13rem] tracking-tight sm:leading-none leading-[5rem] absolute sm:top-24 top-24'
            to='/'
          >
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              Vincent Palomo
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='absolute sm:bottom-40 md:bottom-32 bottom-40'
          >
            <svg className='h-[20rem]' viewBox='0 0 500 500' x='0px' y='0px'>
              <path fill='#F5F5F5' d='M254.963,169.094c4.664-3.232-.026-10.249-4.8-7.177C245.5,165.149,250.193,172.166,254.963,169.094Z' />
              <path fill='#F5F5F5' d='M347.08,11.916c4.664-3.233-.026-10.25-4.8-7.178C337.62,7.971,342.31,14.988,347.08,11.916Z' />
              <path
                fill='#F5F5F5'
                d='M256.059,184.779c.179-4.272-6.348-4.222-6.613,0-.782,13.453.1,27.111.359,40.58.159,7.282-1.5,18.734,4.377,24.432,2.805,3.414,7.9,4.1,11.792,2.091,10.293-5.309,8.384-19.539,4.272-28.131C261.922,208.777,254.707,203.8,256.059,184.779Zm9.831,55.143c-.421,1.841-1.77,5.343-4.022,5.662-3.758.532-3.792-5.44-4.072-7.764-.923-7.617-1.473-15.276-1.843-22.939C260.776,222.321,267.971,230.809,265.89,239.922Z'
              />
              <path
                fill='#F5F5F5'
                d='M231.327,352.348a142.541,142.541,0,0,0-4.752-24.5c-6.518-21.438-43.182-17.616-56.226-9.672-24.654,12.631-24.611,49.538-12.056,70.783,8.9,13.814,25.379,11.259,38.789,5.133,8.065-3.685,16.787-11.065,21.262-15.094a1.481,1.481,0,0,1,2.407,1.532c-1.707,5.538-7.453,15.37-25.781,23.254-2.5,1.075-1.817,6.286,1.581,5.838C225.852,405.058,235.319,378.988,231.327,352.348Z'
              />
              <path
                fill='#F5F5F5'
                d='M250.338,372.175c-.981-2.343-4.621-3.347-6.067-.561a91.645,91.645,0,0,0-7.033,19.668,118.067,118.067,0,0,0-4.894,25.182c-.487,3.685-1.333,7.589.552,10.749,1.109,3.523,4.369,5.774,7.142,2.263,2.834-4.643,5.569-9.315,8.176-14.077a8.074,8.074,0,0,0,2.171-.6,12.442,12.442,0,0,1,2.743,1.866c2.968,4.306,8.611,7.2,11.351,1.315a4.005,4.005,0,0,0,.918-3.347C263.554,404.06,257.806,379.4,250.338,372.175Z'
              />
              <path
                fill='#F5F5F5'
                d='M387.937,293.24c-2.075-6.3-6.8-7.338-12.72-8.623-97.012-22.341-80.839-48.267-86.21-131.118l.107-.087c20.687,5.6,14.923-22.632,14.64-34.377-.256-5.769-1.065-10.991-6.512-14.064-10.177-5.235-29.013-1.332-41.886-.346a3.212,3.212,0,0,1-3.462-3.014c-.744-12.824-.864-38.357,8.2-53.8a1.392,1.392,0,0,1,2.546,1.078,99.392,99.392,0,0,0-3.919,21.824,2.325,2.325,0,0,0,3.887,1.854c7.639-6.942,19.092-5.327,23.98-10.638,7.418-8.061,1.513-19.1,7-27.562,6.373-9.823,18.11-16.184,28.637-20.328,3.016-1.187,3.715-5.952,0-6.852C313.39,5.047,304.554,6.45,296,9.161c-4.115.566-31.113,14.48-27.8,3.19a2.83,2.83,0,0,0-2.1-3.724c-18.713-3.639-33.836,16.138-39.316,31.793-3.043,8.693-6.818,21.578.664,27.155,16.384,12.211,18.752,25.314,18.634,32.306a5.51,5.51,0,0,1-5.525,5.415c-15.762-.032-34.366-9.016-43.637,2.542-5.074,6.665-3.722,14.754-3.6,22.605.307,8.244-6.324,15.306-4.31,23.623a15.783,15.783,0,0,0,16.707,12.578c-2.04,20.292,7.351,77.093-5.3,90.179-4.834,3.943-10.954,6.717-13.638,12.756-19.994,7.27-41.332,10.091-62,15.038-5.905,1.282-10.639,2.307-12.72,8.623-4.425,13.432-1.148,28.5,1.323,41.965,3.077,16,4.557,32.969,9.4,48.521-1.2,12.8-6.915,27.3.84,39.006,7.328,18.42,26.239,18.711,43.375,18.463,28.717,15.438,20.158,53.387,52.889,54.288,10.025.71,49.571.707,59.291.062,34.083-.614,24.564-38.368,53.813-54.341,17.137.24,36.059-.052,43.386-18.471,7.759-11.71,2.034-26.2.846-39.011,4.324-15.527,6.007-32.6,9.392-48.517C389.084,321.738,392.362,306.673,387.937,293.24ZM194.43,270.762c3.011-3.188,7.5-5.57,10.617-8.23,17.033-15.258,4.856-75.294,8.155-98.994,10.04-8.973,3.069-20.977,6.381-31.508,11.644-11.728-7.5-14.652-10.439,6.027a93.557,93.557,0,0,1-1.9,12.647c-1.75,3.631-6.227,6.949-9.682,3.555-2.628-3.687-.486-9.391,1.12-12.95,4.17-9.615-1.766-23.261,7.6-30.89,8.686-3.737,17.856,1.587,26.693,2.224,19.006,2.207,38.046-4.119,56.963-1.913,5.808,3.367,4.259,11.8,2.135,16.995a5.181,5.181,0,0,1-5.618.192c-5.389-12.211-22.994-13.477-31.423-3.767-4.325,4.078-4.444,10.581-8.185,14.927-1.548,1.388-3.341,1.347-5.078,2.273a2.37,2.37,0,0,0-.474,3.679c7.375,7.081,14.342-6.548,16.535-12.051,6.931-5.363,15.309-3.576,18.523,4.091,6.465,42.1-.554,86.175,14.075,127.089a16.421,16.421,0,0,1-.942,6.487,7.432,7.432,0,0,1-6.951-.984,32.961,32.961,0,0,0-3.736-5.819c-1.463-1.824-4.618.145-3.9,2.268,2.783,9.14,8.049,23.885-3.213,29.144-5.834-.193-12.99-5.165-15.352-9.105-3.778-6.3-7.448-11-14.656-13.445-8.465-1.5-13.533-5.04-12.851-14.525.622-3.741,2.791-6.4.9-8.423a2.29,2.29,0,0,0-4.073.6C221.643,261.425,217,272.45,209.033,281.3c-5.254,5.725-14.645,9.107-17.494-.608C190.476,276.414,192.035,273.45,194.43,270.762Zm163.7,82.269c1.773,13.977,6.547,27.6,11.254,40.734,10.09,46.476-31.224,38.419-62.791,39.932-4.907.128-10.651-.572-15.3,1.1a3.513,3.513,0,0,0,0,6.713c7.018,1.949,15.119,0,22.342.174a6.9,6.9,0,0,1-.364,5.592c-5.773,7.555-10,16.9-13.815,24.24-4.776,9.954-8.411,15.53-20.383,15.336,2.106-4.565,2.356-9.84,3.161-14.741.725-4.536,1.708-9.128,1.765-13.732.044-3.544-4.893-3.973-5.97-.808-1.868,5.489-2.526,11.482-3.575,17.175-.876,4.755-1.2,11.923-7.316,12.584-3.68.1-7.351-.161-11.027-.223a8.806,8.806,0,0,1-2.936-2.264,198.258,198.258,0,0,0-.32-25.946,3.483,3.483,0,0,0-6.961,0c-.19,2.186.394,27.144-.578,27.265a4.051,4.051,0,0,0-1.8.683c-4.211-.064-8.424-.043-12.636-.027-4.236-1.847-4.573-7.884-5.345-12.072-1.049-5.693-1.707-11.687-3.575-17.175-1.068-3.137-6.014-2.766-5.97.808.057,4.6,1.04,9.2,1.765,13.732.807,4.907,1.055,10.188,3.169,14.756-12.048.271-15.643-5.416-20.39-15.352-3.816-7.346-8.045-16.688-13.819-24.244a6.894,6.894,0,0,1-.359-5.587c7.165-.121,15.4,1.809,22.34-.174a3.513,3.513,0,0,0,0-6.713c-31.3-6.524-86.338,13.558-78.975-38.422,7.767-20.453,13.71-42.881,14.234-64.684.1-2.4-3.832-3.014-4.258-.576a133.86,133.86,0,0,1-4.684,19.13,10.953,10.953,0,0,1-2.795-.7c-8.161-17.333-8.489-38.874,2.418-55.21,16.131-8.357,33.1-8.193,50.531-10.386,2.66,8.978,13.618,12.66,21.665,7.883,7.667-4.236,13.152-12.914,22.584-13.436,22.142,3.005,19.4,23.056,39.511,24.011,5.809,1.085,13.185-.964,16.02-6.657,4.783-14.882,16.8-15.6,30.65-14.219,15.684,1.128,31.025,4.539,46.332,7.986,5.519,3.023,9.13,8.047,9.373,14.457,1.473,12.809-1.059,25.592-4.975,37.756-5.124-3.192-5.519-14.519-6.639-20.182-.327-2.085-3.869-2.078-4.2,0C354.347,331.992,356.311,342.718,358.134,353.031Z'
              />
              <path
                fill='#F5F5F5'
                d='M329.605,318.158c-13.039-7.9-48.011-14.486-56.178,9.683-7.969,23.586-8.122,45.225-.212,61.25,5.7,10.976,18.085,18.932,30.234,20.535,3.394.448,3.809-4.28,1.581-5.837-10.2-6.454-21.5-10.306-26.007-21.695a1.637,1.637,0,0,1,2.564-1.874c5.646,4.745,15.9,13.325,21.806,15.8,13.591,5.709,29.419,6.75,38.313-7.06C354.284,367.717,354.293,330.751,329.605,318.158Z'
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='absolute sm:bottom-10 sm:left-10 bottom-16 lowercase tracking-wide font-notosans text-lg sm:text-xl'
          >
            available for hire or freelance projects &#10087;
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='absolute sm:bottom-10 bottom-9 sm:right-10 text-lg sm:text-xl'
          >
            <div className='lowercase font-notosans tracking-wide leading-6'>
              Based in Louisiana, Open to Relocation <span className='font-notoemoji filter grayscale'>🛸</span>
            </div>
          </motion.div>
        </div>
        <Element id='about' name='about'>
          <About />
        </Element>
        <Element id='projects' name='projects'>
          <Projects />
        </Element>
        <Element id='contacts' name='contacts'>
          <Contacts />
        </Element>
      </Element>
    </>
  );
};

export default transition(Home);
