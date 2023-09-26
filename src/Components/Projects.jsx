import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectLinks = [
    {
      id: 1,
      element: (
        <div className='flex justify-between w-[600px]'>
          Java Chatroom
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            href='https://github.com/vincentpalomo/java-chatroom'
            className='hover:text-purple-500 font-playfair'
          >
            github
          </motion.a>
        </div>
      ),
    },
    {
      id: 2,
      element: (
        <div className='flex justify-between w-[600px]'>
          CodeThreads Capstone
          <div className='flex space-x-5 font-playfair'>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <a href='https://codethreads.netlify.app/home' className='hover:text-purple-500'>
                live
              </a>
            </motion.div>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <a href='https://github.com/CodeThreads-FSA-VP-AM/CodeThreads' className='hover:text-purple-500'>
                github
              </a>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      element: (
        <div className='flex justify-between w-[600px]'>
          fitnesstrackr
          <div className='flex space-x-5 font-playfair'>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <a href='https://fitnesstrakr-fsa-vp-at.netlify.app/' className='hover:text-purple-500'>
                live
              </a>
            </motion.div>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <a href='https://github.com/anahuynh27/FitnessTracker_FrontEnd' className='hover:text-purple-500'>
                github
              </a>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      element: (
        <div className='flex justify-between w-[600px]'>
          Valorant
          <div className='flex space-x-5 font-playfair'>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <motion.a href='https://valorant-react-vp.netlify.app/' className='hover:text-purple-500'>
                live
              </motion.a>
            </motion.div>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <a href='https://github.com/vincentpalomo/Valorant-React-App' className='hover:text-purple-500'>
                github
              </a>
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='relative min-h-screen bg-neutral-900 flex flex-col justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-0 right-20'
      >
        <svg className='h-96' viewBox='0 0 500 625' x='0px' y='0px'>
          <path
            fill='#F5F5F5'
            d='M246.991,90.793c-3.117,65.11-.748,130.669-.366,195.887.07,3.373,5.177,3.378,5.245,0,.384-65.216,2.753-130.778-.364-195.887A2.259,2.259,0,0,0,246.991,90.793Z'
          />
          <path
            fill='#F5F5F5'
            d='M223.378,219.181a14.23,14.23,0,0,0-6.488-6.324c-40.737-18.207-58.838,47.8-15.072,50.66,8.851.62,17.8-4.517,20.984-13.305a2.536,2.536,0,0,0-3.268-3.269c-2.476.957-7.095,3.346-10.374,2.749-4.835-.879-11.154-4.557-11.154-11.958-.5-15.646,11.488-14.994,23.361-11.132a2.639,2.639,0,0,0,3.533-2.958A17.6,17.6,0,0,0,223.378,219.181Z'
          />
          <path
            fill='#F5F5F5'
            d='M128.132,199.334c-8.593,1.016-18.232,2.34-25.983,6.351-2.327,1.2-.942,5.15,1.583,4.854,8.616-1.009,16.974-3.739,25.671-4.62,8.794-.891,17.4-.137,26.175-.31,3.616-.072,4.106-5.666.533-6.358C147.128,197.511,137.161,198.267,128.132,199.334Z'
          />
          <path
            fill='#F5F5F5'
            d='M96.149,234.974c18.869-7.565,39.155-9.81,59.3-7.825,3.7.3,4.619-6.007.886-6.553-27.156-4.515-53.613,4.306-78.7,13.741-2.73.892-2.367,5.193.7,5.148C84.466,239.4,90.456,237.063,96.149,234.974Z'
          />
          <path
            fill='#F5F5F5'
            d='M156.26,241.459a173.61,173.61,0,0,0-38.394,3.934c-12.984,2.838-25.168,9.21-38.317,10.95-2.618.346-3.962,4.7-.7,5.194,5.934.9,11.511-.7,17.106-2.617,6.357-2.175,12.731-4.243,19.26-5.849a164.76,164.76,0,0,1,41.048-4.635C160.75,248.48,160.755,241.493,156.26,241.459Z'
          />
          <path
            fill='#F5F5F5'
            d='M137.611,267.851c-19.826-3.009-36.915,12.6-56.41,13.069-2.579.4-2,3.96,0,4.671,13.776,4.027,26.914-6.691,39.928-9.47,5.348-1.321,11.376-.818,16.482-2.717C140.018,272.508,140.659,268.443,137.611,267.851Z'
          />
          <path fill='#F5F5F5' d='M154.484,266.017c-5.384,1.167-3.785,9.2,1.636,8.22C161.5,273.07,159.9,265.034,154.484,266.017Z' />
          <path fill='#F5F5F5' d='M171.381,95.639c5.384-1.167,3.785-9.2-1.636-8.221C164.361,88.585,165.961,96.622,171.381,95.639Z' />
          <path fill='#F5F5F5' d='M170.706,108.149c-5.384,1.166-3.785,9.2,1.635,8.22C177.725,115.2,176.126,107.165,170.706,108.149Z' />
          <path fill='#F5F5F5' d='M172.341,138.908c5.384-1.167,3.785-9.2-1.635-8.221C165.322,131.854,166.921,139.891,172.341,138.908Z' />
          <path fill='#F5F5F5' d='M171.169,152.66c-5.384,1.167-3.785,9.2,1.635,8.22C178.188,159.713,176.589,151.677,171.169,152.66Z' />
          <path
            fill='#F5F5F5'
            d='M229.3,97.565a70.5,70.5,0,0,0-39.616-8.632,2.682,2.682,0,0,0,0,5.36c6.573.534,13.059,1.008,19.477,2.643,6.154,1.568,11.79,4.163,17.622,6.6C230.238,104.976,232.444,99.354,229.3,97.565Z'
          />
          <path
            fill='#F5F5F5'
            d='M227.558,117.29c-11.992-4.218-26.962-8.3-39.746-5.931-2.082.387-1.976,3.646,0,4.106,6.272,1.459,12.827,1.67,19.158,2.981a128.548,128.548,0,0,1,18.783,5.39C229.835,125.354,231.675,118.738,227.558,117.29Z'
          />
          <path
            fill='#F5F5F5'
            d='M226.015,137.152c-11.992-3.279-24.98-6.464-37.424-4.485-2.318.531-2.368,4.239,0,4.74,5.853,1.236,12.021,1.047,17.949,1.99a123.454,123.454,0,0,1,17.714,4.143C228.327,144.823,230.086,138.406,226.015,137.152Z'
          />
          <path
            fill='#F5F5F5'
            d='M219.962,160.3c-10.007-1.965-20.458-4.833-30.72-4.094-2.946.312-4.142,4.845-.756,5.587,6.529,1.429,13.319,1.816,19.9,3.079q4.89.939,9.733,2.11c2.834.687,5.437,1.867,8.286.9a2.66,2.66,0,0,0,1.157-4.381C225.605,161.214,222.8,160.954,219.962,160.3Z'
          />
          <path
            fill='#F5F5F5'
            d='M99.293,167.326c.926,8.966,7.253,9.549,14.765,7.463,5.975-.93,11.953-1.061,17.966-1.45,2.238-.084,5.406.871,6.437-1.806,2-1.879,2.379-5.474,3.059-7.929,1.5-5.789,3.362-11.78,3.34-17.788.332-1-.128-2.279-.415-3.305a147.905,147.905,0,0,1-3.452-16.522,85.592,85.592,0,0,0-.03-12.962c-2.813-20.46-41.187-32.779-57.328-21.7-18.168,13.5-32.913,46.041-8.72,61.182,6.222,3.424,17.131,1.732,22.347,6.794A52.1,52.1,0,0,1,99.293,167.326ZM71.33,140.174c-9.217-14.362,4.519-37.394,17.931-44.822,12.531-3.745,27.538-.293,37.65,8.39,1.7,2.27,2.6,5.593,1.268,8.118-6.79,8.521-3.289,18.784,6.048,23.613,1.39,3.1,3.715,5.817,4.2,9.349.326,6.673-2.382,12.958-4.215,19.377a5.845,5.845,0,0,1-2.6,2.006c-.1-.039-.193-.084-.292-.12.675.278-.453-.229-.526-.374.4.471-.341-.384-.465-.409a49.906,49.906,0,0,0-2.02-10.064c-.9-2.8-4.669-1.582-4.287,1.182.418,2.713.656,5.14,1.075,7.905-.736,2.6-4.971,3.342-6.467,1.04a33.723,33.723,0,0,0-1.557-8.478c-.822-2.767-4.626-1.556-4.219,1.163.334,2.226,1.7,7.46.1,9.63-2.371-.027-4.967.259-6.689-1.617C101,140.555,81.461,155.886,71.33,140.174Z'
          />
          <path
            fill='#F5F5F5'
            d='M105.949,141.7c11.822-6.879,10.234-29.821-6.515-26.108-12.381,2.216-7.945,25.087,5.022,19.053.047.046.089.1.139.14a8.6,8.6,0,0,1-6.057,3.435,2.273,2.273,0,0,0-.869.117c-2.792.047-3.723,3.681-.937,4.706,2.561.839,5.5.168,7.926-.7A1.744,1.744,0,0,0,105.949,141.7Z'
          />
          <path
            fill='#F5F5F5'
            d='M118.876,146.295c1.743-.433,2.107-2.491,2.78-3.936a1.894,1.894,0,0,0,.51-.2c.054.045.106.095.158.145.492.873.985,1.744,1.457,2.616,2.012,3.1,6.252.006,4.338-3.1-.726-3.186-4.18-13.914-8.175-13.321-2.789.2-3.083,2.9-3.292,5.108-.329,3.478-.666,6.952-.85,10.44C115.712,145.737,117.486,146.6,118.876,146.295Z'
          />
          <path
            fill='#F5F5F5'
            d='M281.081,156.2c14.691,10.3,34.872,9.758,49.987,1.246,25.343-14.785,21.089-50.613.756-67.947C289.909,56.908,240.539,124.853,281.081,156.2Zm43.469-14.729c-3.454-2.642-6.831-4.69-10.153-7.3q2.754-1.869,5.494-3.758Q322.179,135.962,324.55,141.475Zm-3.141-27.01q4.836-.1,9.673-.088-3.865,2.6-7.695,5.25C322.705,117.915,322.053,116.192,321.409,114.465Zm-12.84,15.4c-6.449-4.862-15.455-3.172-7.036,4.555-4.493,2.828-9.028,5.583-13.53,8.4,3.555-7.856,6.534-16.035,10.235-23.776a13.661,13.661,0,0,1,6.114-3.872c3.109.029,6.248-.195,9.362-.4,1.127,3.057,2.322,6.089,3.524,9.117C314.354,125.889,311.49,127.919,308.569,129.862ZM289.44,149.553a151.718,151.718,0,0,0,18.39-10.933c6.356,3.53,11.512,8.794,17.715,12.573C314.472,157.615,300.409,156.152,289.44,149.553Zm44.092-5.069q-3.871-9.084-7.543-18.256c4.444-3.051,8.914-6.063,13.439-9A28.3,28.3,0,0,1,333.532,144.484Zm-20.3-54.047c10.229-.154,17.721,8.4,22.289,17.031-5.533-.046-11.063.02-16.595.229-1.719-5.538-4.622-11.186-5.867-16.952C313.113,90.643,313.169,90.54,313.228,90.437Zm-4.875,8.748q1.349,4.4,2.876,8.74a63.007,63.007,0,0,0-7.865.712Q305.8,103.88,308.353,99.185Zm-22.129-.346a35.643,35.643,0,0,1,19.643-8.159c-5.069,9.9-9.863,19.953-14.532,30.034-2.726-2.4-6.152-3.848-9.085-5.937a59.767,59.767,0,0,0,6.648-.2c2.951-.395,4.365-5.053.781-5.77-3.594-.7-7.281-.21-10.907.04A39.926,39.926,0,0,1,286.224,98.839Zm-11.872,25.25a37.665,37.665,0,0,1,1.146-6.8c3.975,3.591,8.989,5.921,12.919,9.648a160.774,160.774,0,0,0-6.79,16.475A22.048,22.048,0,0,1,274.352,124.089Z'
          />
          <path
            fill='#F5F5F5'
            d='M377.3,90.1c9.574,2.262,19.581,2.978,29.241,4.989,9.435,1.58,18.475,5.177,27.866,6.746,3.071.308,4.082-4.314,1.542-5.693-8.262-4.485-19.434-5.864-28.612-7.547-9.466-1.735-19.769-3.72-29.412-3.114C375.4,85.635,374.589,89.454,377.3,90.1Z'
          />
          <path
            fill='#F5F5F5'
            d='M361.482,112.5c11.889,1.665,24.077,1.363,35.95,3.491,12.027,1.758,23.791,4.5,35.643,7.134,4.509,1,6.421-5.733,1.917-6.954a286.967,286.967,0,0,0-36.615-7.161c-11.645-1.568-25.256-3.931-36.895-1.565C358.982,107.949,358.982,111.985,361.482,112.5Z'
          />
          <path
            fill='#F5F5F5'
            d='M361.756,136.712c23.308,1.757,46.711,3.28,69.617,8.376,4.417.9,6.3-5.9,1.867-6.774-23.506-4.287-47.527-8.209-71.484-7.689C357.775,130.823,357.915,136.3,361.756,136.712Z'
          />
          <path
            fill='#F5F5F5'
            d='M403.425,196.874c-7.691,9.695-22.057,35.162-20.474,39.751,2.211,7.1,10.027,31.436,15.827,39.706,1.919,2.736,4.45,2.023,5.407.59A168.121,168.121,0,0,0,422.6,239.138c-1.259-14.151-8.441-27.938-13.271-41.4C407.659,193.412,404.746,195.261,403.425,196.874Zm2.663,38.731a3.7,3.7,0,0,1-.948.256c-3.012-.763-6.558-3.1-8.14,1.073-.9,4.585,5.277,4.91,8.319,6.18.131.2.26.395.382.6-2.383,7.6-4.275,14.847-6.281,22.458a225.855,225.855,0,0,1-9.6-31.572,160.258,160.258,0,0,1,13.611-26.06c1.353,8.578,2.917,16.126,3.51,24.639Q406.537,234.4,406.088,235.605Z'
          />
          <path
            fill='#F5F5F5'
            d='M296.676,185.288c-2.684.283-2.6,5.409,0,5.537,10.84.531,21.008,3.035,31.406,6.016,9.447,2.709,19.669,6.157,29.6,5.295,3.008-.261,2.6-5.563.059-5.974a160.968,160.968,0,0,1-32.518-6.822C316.011,186.738,306.319,184.271,296.676,185.288Z'
          />
          <path
            fill='#F5F5F5'
            d='M357.884,214.536c-26.526.148-56.42-16.805-81.39-8.342-2.794,1.065-1.1,5.983,1.416,5.809,14-1.623,27.533.016,41.032,3.85,12.53,3.18,25.868,7.668,38.866,5.9C363.1,221.027,361.468,214.679,357.884,214.536Z'
          />
          <path
            fill='#F5F5F5'
            d='M356.353,237.154c-24.831-1.459-55.3-16.467-78.774-4.737-2.265,1.316-.828,5.684,1.775,5.215,6.581-1.185,12.351-2.993,19.132-2.888,19.387.48,37.746,9.126,57.156,9.266C359.518,244.009,360.21,237.534,356.353,237.154Z'
          />
          <path
            fill='#F5F5F5'
            d='M337.977,256.861c-18.826-2.206-42.944-11.325-60.41-1.038-2.138,1.407-.442,5.573,2.148,4.912,10.126-2.585,18.806-3.624,29.24-2.045,9.383,1.419,18.269,4.329,27.8,4.331C341.684,263.022,341.21,257.366,337.977,256.861Z'
          />
          <path
            fill='#F5F5F5'
            d='M478.646,92.105c-5.19-6.7-11.02-18.352-14.19-25.051a8.821,8.821,0,0,0-7.753-5.073c-15.293-.359-27.49-3.575-41.519-7.555-20.538-7.293-41.57-12.024-62.419-13.32a5.488,5.488,0,0,0-5.416,3.33l-6.6,15.663L331.07,44.03a5.492,5.492,0,0,0-5.095-2.628c-27.921,1.92-52.089,10.685-76.89,29.081C216.725,46.447,174.448,36.5,134.661,41.7c-32.114,4.552-62.121,18.758-94.63,21.212a4.172,4.172,0,0,0-4.093,2.666c-2.685,7.645-11.464,28-20.3,29.285-3.059.883-8.39-1.371-9.351,2.726C9.21,192.9,9.323,289.079,19.5,384.136a4.711,4.711,0,0,0,4.691,4.15c13.506-1.871,45.238-5.225,80.914-8.771,1.3,20.251,1.944,22.5,2.3,51.938.051,4.239,3.762,6.365,6.735,8.981Q120.688,446.2,127.3,451.9a3.4,3.4,0,0,0,5.633-3.279c-3.516-14.365-4.62-63.381-5.377-71.315,11.457-1.115,23.008-2.221,34.227-3.282,2.682,20.884.5,49,.32,68.234-.031,3.241,4.643,4.636,6.219,1.684,2.269-4.247,4.211-8.8,6.385-13.135,5.167,8.793,10.34,17.6,15.663,26.29,1.248,3.638,7.351,3.424,7.071-.945-1.358-21.132-2.508-123.439-2.6-125.694a180.724,180.724,0,0,1,52.235,6.807c.049,2.048.158,4.082.344,6.075a151.768,151.768,0,0,0-39.842-6.138,3.841,3.841,0,0,0-3.9,4.351l3.141,23.364a5.283,5.283,0,0,0,5.707,4.553c40.982-5.462,70.549-.632,114.053,3.516,1.053,16.374,2.344,32.873,1.756,49.221-.131,3.637,4.434,4.152,6.257,1.695,3.067-4.133,3.217-9.382,5.889-13.639,4.67-8.644,14.609,8.274,18.176-1.183.107-10.835-1.348-54.6-.876-70.615,9.269,2.163,18.494,4.614,27.814,7.086q-.092,2.4-.148,4.8c-5.094-1.4-10.2-2.743-15.322-3.947a2.757,2.757,0,0,0-3.374,3.058l3.365,24.137a4.918,4.918,0,0,0,4.37,4.21q5.8.594,11.54,1.188c1.007,18.085,3.019,36.181,4.884,54,.3,2.918,4.872,5.211,6.369,1.725,1.68-3.912,13.322-21.507,17.938-28.427a9.092,9.092,0,0,0,1.482-6,96.9,96.9,0,0,1-.214-18.108c26.441,2.819,48.619,5.32,59.318,6.8a4.708,4.708,0,0,0,4.7-4.152c10.223-95.079,10.027-191.224,13.212-286.539a3.05,3.05,0,0,0-3.073-2.537C486.409,96.028,481.373,95.915,478.646,92.105Zm-15.3-9.7a83.632,83.632,0,0,0,5.56,9c-6.8,84.52-10.934,169.546-15.962,254.283-3.955-7.281-7.39-14.788-8.138-22.7Q458.066,203.038,463.349,82.4ZM36.6,81.772c3.36,80.38,9.936,160.591,18.585,240.56-.749,7.886-4.2,15.39-8.146,22.663C42,260.238,37.21,175.288,31.087,90.691A83.649,83.649,0,0,0,36.6,81.772Zm66.467,259.171c-17.184,4.549-34.845,9.118-53.7,12.406,1.179-1.743,2.317-3.515,3.393-5.327a21.847,21.847,0,0,1,6.813-4.043c14.4-2.183,28.849-6.162,43.328-10.572A53.645,53.645,0,0,0,103.068,340.943ZM36,359.466c-6.115-85.672-12.05-171.381-15.466-257.192a31.216,31.216,0,0,0,5.64-5.289c4.185,85.691,12.752,171.169,15.4,256.959A22.036,22.036,0,0,1,36,359.466Zm4.214,6.372c1.778-2.245,3.4-4.545,5.089-6.785,20.75-2.113,39.756-6.555,58.127-11.321q.12,2.487.246,4.973C82.763,358.677,61.867,364.789,40.211,365.838Zm17.54-27.173c.829-1.8,1.584-3.645,2.232-5.509,31.194-2.071,58.438-20.091,88.214-27.872a158.872,158.872,0,0,1,90.058,2.8,21.315,21.315,0,0,1,6.315,8.541C181.6,286.854,120.032,327.626,57.751,338.665Zm84.259,4.468c-4.343.794-8.665,1.728-12.973,2.754q.162-2.487.337-4.973c9.4-2.411,18.769-4.648,28.267-6.434a37.4,37.4,0,0,1,2.261,5.8C153.905,341.118,147.935,342.085,142.01,343.133ZM247.116,330.52c-43.622-11.433-80.182-5.689-117.229,3.455.527-3.29,1.756-6.431,2.547-9.723,38.229-11.513,76.515-19.593,114.351.737A21.533,21.533,0,0,1,247.116,330.52Zm-5.444-29.72c-79.764-23.931-107.122,5.839-178.483,24.532l-.064-.043C53.583,240.565,47.579,156.8,44.113,71.626c7.237.543,15.743-3.183,22.209-4.561C142.676,45.631,176.827,35.51,249.047,79.084a3.3,3.3,0,0,0,2.572-.544c22.833-15.723,45.487-25.878,72.02-28.822a3.573,3.573,0,0,1,3.406,1.656l12.27,19.463a2.95,2.95,0,0,0,5.2-.4L352.8,51.33a3.565,3.565,0,0,1,3.6-2.145c33.41,2.884,64.01,19.384,97.64,21.13-3.9,85.148-9.2,170.263-19.006,254.972l-.067.045c-80.915-20.844-85.02-44.708-176.345-24.145A34.553,34.553,0,0,1,241.672,300.8Zm13.18,24.089c22.933-11.853,45.973-13.414,69.04-10.23a79.767,79.767,0,0,1,.847,11.494,193.02,193.02,0,0,0-69.994,4.629C254.712,328.83,254.715,326.805,254.852,324.889Zm.009,18.579c.083-1.984.077-3.981.038-5.98a180.507,180.507,0,0,1,69.888-4.991c.011,2.279.061,4.477.161,6.709C301.459,336.919,277.767,337.243,254.861,343.468Zm1.816-26.683a30.834,30.834,0,0,1,6.288-8.379A158.763,158.763,0,0,1,351.8,306c29.259,7.739,55.821,24.958,86.391,27.767a14.163,14.163,0,0,1,4.054,5.614C380.426,328.482,319.291,288.022,256.677,316.785Zm101.362,15.061c.117-3.235.177-6.471.018-9.671,27.518,7.777,55.019,18.414,82.365,22.519a21.845,21.845,0,0,1,6.81,4.042q1.613,2.715,3.385,5.326C417.515,348.311,387.9,338.492,358.039,331.846Zm57.551,26.947a13.512,13.512,0,0,1-.115-5.7,318.1,318.1,0,0,0,39.212,6.671c1.666,2.218,3.288,4.562,5.073,6.784C445,365.833,429.888,362.565,415.59,358.793Zm48.421,1.392a22.323,22.323,0,0,1-5.582-5.526c3.189-85.767,10.625-171.288,15.4-256.96a75.66,75.66,0,0,0,5.649,5.291C476.1,188.8,470.314,274.522,464.011,360.185Z'
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='sm:text-9xl font-playfair text-neutral-100 tracking-tight absolute top-20 left-20'
      >
        projects
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-col justify-center items-center space-y-5 font-notosans lowercase text-3xl text-neutral-100 w-[75%]'
      >
        {projectLinks.map((link, i) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, delay: i * 1 }}
          >
            {i > 0 ? ' ' : null}
            <h2>{link.element}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;