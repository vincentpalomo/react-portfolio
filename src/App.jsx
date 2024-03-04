import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Components/Home';
// import Loading from './Components/Loading';
// import { Element } from 'react-scroll';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          {/* <Route
            index
            element={
              <Element id='home' name='home'>
                <Loading />
              </Element>
            }
          /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
