import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      {/* slide in */}
      <motion.div
        className='fixed z-30 top-0 left-0 w-full h-screen bg-purple-500 origin-top'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* slide out */}
      <motion.div
        className='fixed z-30 top-0 left-0 w-full h-screen bg-purple-500 origin-bottom'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
