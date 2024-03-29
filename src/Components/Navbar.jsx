import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  const toggleMenu = () => {
    toggleOpen(!isOpen);
  };

  const closeMenu = () => {
    toggleOpen(false);
  };

  const links = [
    {
      id: 1,
      element: (
        <Link className="hover:text-neutral-100 cursor-pointer" to="home" smooth={true} onClick={closeMenu}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            Home
          </motion.div>
        </Link>
      ),
    },
    {
      id: 1,
      element: (
        <Link className="hover:text-neutral-100 cursor-pointer" to="about" smooth={true} onClick={closeMenu}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            about
          </motion.div>
        </Link>
      ),
    },
    {
      id: 1,
      element: (
        <Link className="hover:text-neutral-100 cursor-pointer" to="projects" smooth={true} onClick={closeMenu}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            projects
          </motion.div>
        </Link>
      ),
    },
    {
      id: 1,
      element: (
        <Link className="hover:text-neutral-100 cursor-pointer" to="contacts" smooth={true} onClick={closeMenu}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            contact
          </motion.div>
        </Link>
      ),
    },
  ];

  return (
    <>
      {/* visible navbar */}
      <div className=" bg-neutral-900 text-neutral-100 text-xl font-notosans h-20 flex justify-between items-center relative w-[100%]">
        <div className="sm:w-[55%] flex justify-between w-[90%] sm:text-xl text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute z-20 top-10 sm:left-10 left-5 tracking-wide"
          >
            software engineer - fullstack developer
          </motion.div>
          <div className="absolute">
            <button
              className={`fixed z-40 right-10 sm:top-10 top-8 cursor-pointer ${
                isOpen ? `text-neutral-900 text-3xl` : `text-neutral-100 text-3xl`
              }`}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <span class="material-symbols-outlined md-72">close</span>
              ) : (
                <span className="material-symbols-outlined md-72">menu</span>
              )}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 bg-purple-500 z-30 tracking-tighter"
                  initial={{ y: -1000 }}
                  animate={{ y: 0 }}
                  exit={{ y: -1000 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-[url('./Assets/noise.gif')] fixed top-0 left-0 h-screen w-screen z-[1000] pointer-events-none opacity-[.02]"></div>
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 sm:right-20 right-16"
                  >
                    <svg
                      className="sm:h-[20rem] md:h-[24rem] lg:h-[28rem] sm:block h-[20rem]"
                      viewBox="0 0 512 640"
                      x="0px"
                      y="0px"
                    >
                      <path fill="#171717" d="M213.27,398.83v0C213.22,398.62,213.19,398.49,213.27,398.83Z" />
                      <path
                        fill="#171717"
                        d="M129.89,120.53c.81-1,4.05-7.37,4.48-9.59,1.33-6.77-.49-14.52-5.86-19.13-6.5-5.57-15.69-2.92-19.3,4.48-3.06,6.29-4,15.29-.1,21.43C113.29,124.35,124.4,127.35,129.89,120.53Z"
                      />
                      <path
                        fill="#171717"
                        d="M199.41,62.56c8.27,2.1,18.59-6.65,16.41-19.65-1.25-7.4-5.18-14.33-13-14.25a12.62,12.62,0,0,0-11.14,6.84c-3.11,3.9-3.32,11-2.86,15.6C189.49,57.56,194.79,61.38,199.41,62.56Z"
                      />
                      <path
                        fill="#171717"
                        d="M305.16,99.26a33.85,33.85,0,0,0,5.47-15.7c.53-5.15.1-11.92-3.11-16.19a10.89,10.89,0,0,0-7-4.55,11.75,11.75,0,0,0-4.87-.88c-5.86.15-10.36,3.2-12.38,7.82-4.14,11.15-3.06,21.21,1.52,29C288.87,105.71,302.46,103.26,305.16,99.26Z"
                      />
                      <path
                        fill="#171717"
                        d="M429.13,318.08c-.65-.27-11.41-1.83-15.39,8.94a17.62,17.62,0,0,1-6.13,8.41,19.23,19.23,0,0,1-5.23,2.6,15.18,15.18,0,0,1-8.07.52c-4.29-1-4.22-3.31-4-7.14.86-15.75,8.7-30.42,13.41-45.23a183.52,183.52,0,0,0,4.54-92.43c-4.64-22.39-15.73-55.16-44.31-52.94-10.68.82-21,7-24,17.78-1.76,6.38,1.24,13.53-.6,19.57-2.05,6.73-10.07,3.43-13.95.31-11.07-8.9-16.16-22.65-21.86-35.07-5.39-11.74-18.57-15.58-27.53-4.9-8.39,10-12.07,26.57-11.18,39.34.41,5.9,2,12.06,6,16.59,4.83,5.46,11.48,6.77,18.26,8.4,23.12,5.53,49.86,14.22,63.57,35.18,15.42,23.58,12.3,61.82-2.55,85-8.5,13.26-21.7,22.8-34.89,31-5.88,3.64-12.15,7.23-15.45,13.6-3.72,7.21-.55,14.34-2.35,21.67-1.37,5.56-5.75,8.16-10,9.36a7.74,7.74,0,0,1-9.75-7.38c-.07-3.94-.36-7.88-2.38-10.72-2.49-3.52-7.33-4.67-10.64-1.37-4.17,4.14-4.27,11-3.55,17.27a4.93,4.93,0,0,1-4.57,5.5l-.57,0c-1.39.09-4.43.38-8.32.65a4.32,4.32,0,0,1-4.62-4.19c-.06-2.32-.12-4.63-.22-7-.18-4.54-.1-8.75-3.57-12.1a5.71,5.71,0,0,0-7.9,0c-3.8,3.42-3.54,8.19-3.8,13a41.82,41.82,0,0,0-.12,5.48,5.87,5.87,0,0,1-5.73,6.32c-5.22.13-10-2.42-10-9.44-1.2-13.26-3.29-26.95-11-38-8.87-12.62-23.13-17.2-35.66-25.06-14.86-9.32-19.19-25.82-18.27-42.52,1-18.83,6.53-38,10.81-56.35,1.64-7.05,3.5-16.38,10-20.72,2.25-1.51,5.3-2.68,8.05-2.09,3.14.67,4.27,3.29,6.58,5.22,6.49,5.45,14.24,2.36,21.13-.51,7.18-3,14.12-6.91,19.56-12.56,10.61-11,14.4-27.5,6.28-41-4.73-7.85-6.87-13.25-6.28-22.61.5-7.88,2.06-15.69,1.37-23.6-1.1-12.75-8.31-28.09-23.11-28.43-7-.16-12.8,3.39-17.13,8.67-.28.35-.55.7-.8,1A33.3,33.3,0,0,0,176,111c-1.6,7.32-1.65,14.88-2.74,22.28a114.29,114.29,0,0,1-5.72,22.43c-2.32,6.35-5.12,13.26-9.5,18.5-3.83,4.57-11.18,8.26-14.44,1.24-2.46-5.29-2.77-10.89-6.2-15.85-3.6-5.19-9.14-8.68-15.62-8.27-12,.77-16.78,13.59-18,23.72-2,15.69-1.42,31.59-5.55,47-3.88,14.44-10.4,28-15.11,42.14-4.87,14.65-9.67,30.53-10.43,45.9-1.1,22.18.42,46.54,10.35,66.78a39,39,0,0,0,5.92,11.74c4.51,6.15,11.35,12,19.3,12.32,2.66.1,4.55-2.6,4.24-5a2.82,2.82,0,0,0-.17-1.62c-1.58-4-4.16-7.46-2.51-11.93,2.07-5.62,9-7.54,14.38-6.58,8.67,1.55,13.42,8.55,19.66,13.5,5.43,5.33,10.41,11.3,13.2,18.26,1.4,3.48,3.6,8.46-.43,10.56-3.41,1.78-8.52,1.08-12.15.81-7.54-.55-9.77,8.86-5.67,13.7,18.82,22.21,45.06,40.33,73.73,46.73a7.83,7.83,0,0,0,4-.09c18.67,5.39,40.85,5,59.16,1.22,22.31-4.63,41.35-18.23,63-24.83,10.27-3.12,20.54-6.31,29.71-12a117,117,0,0,0,23.45-20.06c14-15.15,26.77-32.19,35.8-50.79C434.35,359,450.08,326.68,429.13,318.08ZM383.22,216.61a12.09,12.09,0,0,1-2.79,1,9,9,0,0,1-8.82-.4c-4-2.42-5.82-6.53-6.77-10.84a47.56,47.56,0,0,1-2.31-8.18c-1.14-5.42-2.84-12.26-.74-17.62A11.41,11.41,0,0,1,378,174.78c4.52,2.5,7.41,7.91,9.18,12.53C390.36,195.58,393,211.59,383.22,216.61Z"
                      />
                      <path
                        fill="#171717"
                        d="M230.42,277.53c-3.78-5.88-9.44-10.8-15.22-13-11.5-4.32-23.75,1.16-30.46,10.94-16.3,23.73,8.71,55.16,35.32,42.83A27.09,27.09,0,0,0,235.15,289,25.86,25.86,0,0,0,230.42,277.53Z"
                      />
                      <path
                        fill="#171717"
                        d="M317.08,267.69c-11.35-9.71-29.19-9.51-37.75,3.8a45.91,45.91,0,0,0-5.7,16.61c-1.32,12.44,4.81,24.75,16.11,30.35,12.79,6.32,29.4,1.73,36.46-11C333.54,294.3,328.07,277.1,317.08,267.69Z"
                      />
                      <path
                        fill="#171717"
                        d="M264.23,324.85c-4.2-5.23-8.56-7.14-16.29-1.87a17.71,17.71,0,0,0-6.38,8.12c-1.2,2.84-4.89,11.88-4.39,14,.88,3.69,4.22,5.18,7.66,5.73,6,1,21.15.73,25.08-2.88C274.56,343.63,269.88,331.89,264.23,324.85Z"
                      />
                    </svg>
                  </motion.div>

                  <div className="flex flex-col justify-center items-center sm:h-[100%] h-3/4 space-y-5 font-playfair tracking-tight lowercase text-7xl text-neutral-900">
                    {links.map((link, i) => (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: i * 0.5 }}
                      >
                        {i > 0 ? ' ' : null}
                        <h2>{link.element}</h2>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
