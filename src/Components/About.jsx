import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-9xl font-playfair absolute sm:top-20 top-12 sm:left-20 tracking-tighter text-neutral-100"
      >
        about
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
        exit={{ opacity: 0, x: 200 }}
        className="absolute hidden sm:block sm:top-32 sm:right-12 md:top-20 md:right-20 lg:top-32 lg:right-32 overflow-hidden text-neutral-100 text-5xl font-playfair"
      >
        <svg className="h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem]" viewBox="0 0 500 625" x="0px" y="0px">
          <path
            fill="#F5F5F5"
            d="M218.525,107.941c20.375-6.566,27.412-5.345,40.552,12.121,2.474,3.145,7.5-.9,5.485-4.232-3.526-5.819-7.653-11.289-10.775-17.357-3.674-7.14,2.015-12.609,6.95-17.175,3.118-2.886-.842-7.386-4.347-5.634-19.549,10.1-20.479-1.256-33.645-11.589-3.192-2.082-6.226,2.43-3.9,5.054,6.109,6.774,13.5,19.395,4.137,26.751a72.569,72.569,0,0,1-7.381,5.128C211.9,103.233,214.335,108.984,218.525,107.941Z"
          />
          <path
            fill="#F5F5F5"
            d="M255.817,259.258s4.042,3.87,3.665,13.594c-.1,2.564,3.149,2.629,4.3,1.039,3.709-5.108,3.662-11.861,1.948-17.94a110.859,110.859,0,0,0,31.225-18.763c4.944,4.571,12.078,7.548,18.074,5.065a2.561,2.561,0,0,0-.136-4.888c-4.316-1.294-9.057-2.026-12.362-5.379a94.229,94.229,0,0,0,15.312-20.276,18.982,18.982,0,0,0,17.1-.766,2.4,2.4,0,0,0-1.331-4.423,24.919,24.919,0,0,1-11.9-1.586A75.163,75.163,0,0,0,328.1,186a21.179,21.179,0,0,0,13.342-6.266c1.876-1.989-.637-4.739-2.907-3.558a32.349,32.349,0,0,1-8.755,2.778c1.079-5.174,3.38-17.58-.789-24.742-3.756-6.452-12.761-10.841-19.213-14.314-19.726-10.6-49.86-16.808-71.04-7.807-2.576,1.381-1.076,5.216,1.57,5.216,7.614,0,15.153-2.052,22.852-2.021a94.235,94.235,0,0,1,26.978,4.112.668.668,0,0,1-.157,1.306c-51.4.512-81.8,19.2-108.621,64.543a1.665,1.665,0,0,1-.477-.269,101.8,101.8,0,0,1,12.931-29.949c2.139-3.361,4.971-6.422,6.636-10.044,1.08-2.347-1.539-5.666-4.012-3.8-10.674,8.646-19.835,31.28-23.376,44.564-2.937,11.3-5.858,36.011-1.108,46.711,3.245,10.368,15.434,13.2,25.179,13.541.3,5.07-2.41,9.56-5.53,13.356a2.394,2.394,0,0,0,2.99,3.659c5.833-3.02,8.971-10.471,8.874-17.042,8.019-.457,14.961-.72,22.659-1.209,1.737,5.111.048,10.242-1.061,15.236A2.284,2.284,0,0,0,228.9,282.1c4.632-3.968,5.087-11.9,3.872-17.96Zm24.639-99.48q.756-.021,1.5.008a1.569,1.569,0,0,0,.882-2.912,58.792,58.792,0,0,0-13.037-5.767,1.046,1.046,0,0,1,.2-2.039c15.539-2.008,31.176.632,45.8,6.778a10.373,10.373,0,0,1,6.414,11.2c-1.933,12.7-6.715,28.6-13.168,38.34a1.045,1.045,0,0,1-1.9-.74,47.46,47.46,0,0,0-1.272-19.786,1.568,1.568,0,0,0-3.045.209c-3.908,26.993-40.676,25.094-44.068-.1A22.479,22.479,0,0,1,280.456,159.778ZM179.925,233.756c1.761-13.56,8.077-26.087,15.642-37.348a1.047,1.047,0,0,1,1.912.605c-.138,7.155.079,23.472,4.276,31.625,6.856,13.319,19.53,22.274,33.649,25.84a1.043,1.043,0,0,1-.126,2.044C223.687,256.591,176.369,270.322,179.925,233.756Z"
          />
          <path
            fill="#F5F5F5"
            d="M282.134,340.888c2.473,3.145,7.5-.9,5.484-4.232-3.525-5.818-7.652-11.289-10.775-17.357-3.674-7.139,2.015-12.608,6.95-17.175,3.118-2.886-.842-7.385-4.347-5.633-19.545,10.1-20.481-1.257-33.644-11.589-3.192-2.082-6.227,2.429-3.9,5.053,6.108,6.774,13.5,19.4,4.137,26.752a72.583,72.583,0,0,1-7.382,5.128c-3.7,2.224-1.267,7.975,2.923,6.932C261.952,322.2,268.993,323.421,282.134,340.888Z"
          />
          <path
            fill="#F5F5F5"
            d="M473.578,283.552a12.052,12.052,0,0,0,.631-16.163C436.291,221.036,294.418,47.76,264.062,13A20.022,20.022,0,0,0,241.08,7.8C165.223,40.307,91.1,89.206,31.088,144.958c-9.019,17.217-12.857,57.47-5.148,75.577,63.1,98.577,141.126,187.939,221.852,272.376a3.612,3.612,0,0,0,4.769.043c50.686-43.571,105.239-82.809,165.31-112.476,17.066-8.582,34.5-16.261,52.084-23.7a2.862,2.862,0,0,0,1.576-1.564c4.642-1.5,8.113-5.462,6.065-10.375-1.237-3.042-4.094-5.273-6.427-7.456-1.754-1.641-3.5-3.718-5.5-5.285-.557-1.213-1.077-2.444-1.606-3.672,1.1-9.424,2.386-18.773,3.471-28.221C467.728,296.049,468.491,288.56,473.578,283.552Zm-31.9-14.936c4.514-2.907,8.952,3.733,4.539,6.792C441.7,278.315,437.263,271.675,441.677,268.616ZM246.858,29.308c4.515-2.907,8.952,3.733,4.539,6.793C246.883,39.008,242.445,32.367,246.858,29.308ZM60.844,146.673c6.363-3.968,12.619,5.1,6.4,9.272C60.879,159.913,54.623,150.849,60.844,146.673Zm19.62,81.408A90.846,90.846,0,0,0,76.532,271.8a2.69,2.69,0,0,1-4.853,1.971L52.93,247.4a14.031,14.031,0,0,1-2.617-8.166c.069-19.618,3.488-33.386,5.823-40.518a3.287,3.287,0,0,1,5.725-1l17.333,22.421A8.476,8.476,0,0,1,80.464,228.081Zm123.9,144.73c-7.052,19.766-8.373,34.347-8.11,43.541a3.679,3.679,0,0,1-6.449,2.5l-16.862-19.241a11.974,11.974,0,0,1-2.932-8.256,108.456,108.456,0,0,1,9.912-42.136,4.7,4.7,0,0,1,7.7-1.2l14.983,16.115A8.513,8.513,0,0,1,204.36,372.811Zm43.656-16.039a7.273,7.273,0,0,1-8.563-1.019C181.926,302.122,132.785,240.5,83.807,179.162c-4.543-5.3,1.133-11.357,2.478-16.1a35.515,35.515,0,0,0,1.532-18.171c-1.324-7.082,6.388-10.46,10.94-14.284A840.85,840.85,0,0,1,229.09,48.937a6.187,6.187,0,0,1,6.473.538c6.414,4.759,15.62,6.365,23.487,4.816a6.227,6.227,0,0,1,5.7,1.777c54.324,56.415,142.547,170.12,160.253,193.087a5.915,5.915,0,0,1-.051,7.36,30.882,30.882,0,0,0-6.53,15.866,5.943,5.943,0,0,1-3.2,4.584c-16.97,8.717-36.582,18.443-52.633,28.243-25.345,14.966-50.054,31.112-73.063,49.453a7.334,7.334,0,0,1-8.031.763C270.48,349.54,257.257,351.455,248.016,356.772Zm10.692,21.433c5.906-3.8,11.713,4.885,5.938,8.888C258.74,390.9,252.934,382.208,258.708,378.205Zm102.606-6.318c4.06-2.877,9.13-1.806,13.778-1.856-14.261,8.689-87.45,61.768-114.98,81.742.134-1.972.31-4.071.536-6.258C279.924,430.091,354.847,376.133,361.314,371.887ZM259.709,467.053s-.1-3.092.045-7.992c32.377-24.079,105.063-75.93,126.829-88.832a95.974,95.974,0,0,1,10.722.826C362.374,391.567,259.709,467.053,259.709,467.053ZM418.417,355.369c-.11,1.282.142,8.932-1.094,9.77-13.5-.577-27.016-3.27-40.909-2.879q21.209-13.132,43.45-24.455Q419.159,346.589,418.417,355.369Zm31.672-13.828q-12.235,6.549-24.371,13.307.289-3.609.576-7.219,14.682-7.178,29.785-13.5A27.812,27.812,0,0,1,450.089,341.541ZM457.23,328.2c-10.326,4.217-20.478,8.792-30.493,13.631.218-3.4.082-7.631,3.754-9.232q13.659-6.569,27.7-12.358C457.877,322.894,457.563,325.548,457.23,328.2ZM459.1,312.68c-70.787,28.52-116.4,63.074-197.376,124.529.311-1.985.665-4,1.075-6.013,88.55-70.014,142.406-104.191,196.948-125.075C459.544,308.319,459.338,310.508,459.1,312.68Zm1.314-13.717C378.28,326.1,298.057,397.581,264.673,423.39c.689-2.452,1.466-4.865,2.355-7.189,0,0,84.5-78.4,194.48-125.841C461.04,293.2,460.7,296.077,460.409,298.963Z"
          />
        </svg>
      </motion.div>
      <div className="max-w-5xl w-full sm:h-fit h-[32rem] sm:mt-32 mt-40 flex sm:flex-row justify-center sm:justify-start">
        <div className="h-full sm:w-1/2 w-[90%] flex flex-col justify-center items-center font-playfair text-neutral-100">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className="font-notosans text-lg leading-6 tracking-wider"
          >
            Experienced fullstack developer with a strong background in creating dynamic and engaging web applications
            for clients, utilizing technology like NodeJS, ExpressJS and React. Proficient in implementing user
            authentication and security measures including Google Auth, JWT Tokens, and route protection. Skilled inn
            managing all aspects of web development projects from inception to deployment while ensuring timely delivery
            and adherence to best practices
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className='font-notosans text-lg leading-6 tracking-wider'
          >
            As a full-stack developer, I've journeyed through the immersive experience of the{' '}
            <span className='font-playfair italic'>LSU Coding Bootcamp</span>. Coding isn't just a profession for me; it's a passion that fuels my
            desire to craft innovative solutions shaping the ever-evolving landscape of technology. I thrive on the creative process of
            problem-solving, constantly seeking ways to blend my technical expertise with human-centered design principles. My goal isn't just to
            write code; it's to build impactful solutions that resonate with users, enhance their experiences, and contribute positively to the tech
            community.
          </motion.div> */}
          {/* <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className="font-notosans text-lg leading-5 tracking-tight"
          >
            I'm a software engineer with a strong background in coding and a passion for bringing ideas to life through
            technology. I graduated from the{' '}
            <span className="font-playfair font-bold italic">Louisiana State University Coding Bootcamp</span>, where I
            learned the fundamentals of web development and gained proficiency in the PERN stack, TypeScript,
            JavaScript, and nodeJS.
          </motion.div> */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
        className="text-neutral-100 py-5 tracking-tight text-7xl"
      >
        tech stack
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1.5 }}
        className="sm:w-[90%] sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-y-0 grid grid-cols-3 gap-5 place-items-center"
      >
        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
          ></path>
        </svg>

        {/* <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
            fill="#F5F5F5"
          ></path>
        </svg> */}

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <g fill="#F5F5F5">
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </g>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#F5F5F5"
            d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703a32.18 32.18 0 00-7.09-2.75c-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337H85.086c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707a57.214 57.214 0 00-4.718-.294c-1.538-.033-3.087-.032-4.618.104a30.16 30.16 0 00-7.158 1.513 23.813 23.813 0 00-7.086 3.865c-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117a324.86 324.86 0 001.546 7.111c.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129a10.979 10.979 0 004.824-2.311c.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336a38.176 38.176 0 002.158 6.428 13.81 13.81 0 003.9 5.185c2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204a49.01 49.01 0 005.387-1.275c3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303a56.542 56.542 0 004.99-1.067c1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692a32.093 32.093 0 01-4.114.097c-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655a63.102 63.102 0 01-.491-4.136 108.067 108.067 0 01-.299-4.62 250.203 250.203 0 01-.197-5.871c-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2a12.392 12.392 0 01-4.798 1.353c-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319a44.368 44.368 0 003.761-1.029c1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11a157.373 157.373 0 01-1.482-6.182 216.117 216.117 0 01-1.464-7.079c-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089a36.66 36.66 0 016.555.923c2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167a116.972 116.972 0 01-2.589 8.17c-.879 2.481-1.893 4.917-2.918 7.343a80.07 80.07 0 01-2.458 5.303c-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zm-22.013-3.353c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933a21.143 21.143 0 00-3.517 3.77c-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216a17.386 17.386 0 01-1.08 5.146c-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258a10.128 10.128 0 003.937-2.354c1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zm-57.597-7.052a17.526 17.526 0 01-1.354-5.622c-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425a17.695 17.695 0 01-4.095-5.931zm53.688-47.569a61.488 61.488 0 013.309 4.204c2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496a93.621 93.621 0 006.222-11.493 186.333 186.333 0 003.287-7.766c1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851a44.628 44.628 0 00-.392-4.259c-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zm47.04-.308c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98a9.042 9.042 0 00-.293 3.41 20.11 20.11 0 001.193 5.176c.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431a13.783 13.783 0 001.351-5.622c.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zm-35.422 37.66c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zm51.751.526c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            fill="#F5F5F5"
            d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
          ></path>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
            fill="#F5F5F5"
          ></path>
        </svg>

        <svg className="sm:h-24 h-16" viewBox="0 0 128 128">
          <g fill="#F5F5F5">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            ></path>
            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
          </g>
        </svg>

        <svg className="sm:h-20 h-16" viewBox="0 0 128 128">
          <path
            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
            fill="#F5F5F5"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default About;
