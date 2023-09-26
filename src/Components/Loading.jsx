import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import transition from '../transition';

const Loading = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const history = useNavigate();

  const message = [
    { id: 1, word: `let's` },
    { id: 2, word: 'start' },
    { id: 3, word: 'something' },
    { id: 4, word: 'new' },
  ];

  useEffect(() => {
    const target = 100;
    const duration = 10000;
    const interval = duration / target;

    animate(count, target, { duration: 10 });

    const counterInterval = setInterval(() => {
      if (count.get() === target) {
        clearInterval(counterInterval);
        history('/home');
      }
    }, interval);

    return () => {
      clearInterval(counterInterval);
    };
  });

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex justify-center items-center relative">
      <motion.div className="absolute font-notosans font-black text-[250px] antialiased text-neutral-100 bottom-0 right-10 overflow-y-hidden">
        {rounded}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, delay: 1 }}
        className="absolute text-neutral-100 text-5xl font-playfair"
      >
        <svg className="h-[32rem]" viewBox="0 0 500 625" x="0px" y="0px">
          <path
            fill="#F5F5F5"
            d="M144.656,409.563c8.135,6.185,18.855,8.266,28.432,11.419,3.986,1.153,8.479,2.82,12.942,3.792,14.711,14.593,12.434,30.637,16.834,49.194,3.339,14.618,8.141,18.926,23.318,17.576q34.29-.406,68.557-1.877a4.161,4.161,0,0,0,2.83-1.19c11.711.411,12.8-22.687,14.2-30.379a122.592,122.592,0,0,1,5.637-21.977c2.337-6.124,6.473-11.41,9.116-17.3,29.895-12.4,44.6-50.42,44.383-80.726,0-50.514-37.879-96.837-85.878-110.245-5.7-4.944-3.5-20.352-4.03-27.708.282-6.676-.87-12.855.943-19.472,11.278.3,16.087-10.08,9.821-19.255-2.758-5.015-2.407-10.183-4.082-15.5-4.318-13.362-17.673-10.244-28.833-8.517a3.893,3.893,0,0,1-4.492-3.783c-.1-5.087-.853-10.393,1.961-14.671,1.676-2.884,4.11-5.158,6.41-7.527a46.038,46.038,0,0,0,10.438-16.192c4.369-11.793,4.5-28.35-3.7-38.641-1.341-1.685-3.255-1.027-4.138.379a2.978,2.978,0,0,0-1.236,2c-.445,2.879-1.079,6.976-3.368,9.044-3.351,3.027-6.613.2-7.282-3.595-1.159-6.573,2.121-14.363,3.483-20.73,2.168-10.485,3.846-22.668-.643-32.823-.5-2.941-5.327-3.851-6.929-.459-14.129,28.418-43.412,64.032-20.535,95.424a48.846,48.846,0,0,0,4.3,4.406,3.262,3.262,0,0,0,5.417-1.872,61.447,61.447,0,0,1,2.838-10.561c7.034-8.208,5.373,34.867,5.608,37.4a3.89,3.89,0,0,1-3.56,3.891c-6.042.534-14.5-1.439-18.851-2.614a6.248,6.248,0,0,0-7,2.767c-3.291,5.515-.826,14.518-3.905,20.276-1.993,3.586-4.717,6.692-4.883,11-.376,8.587,9.482,12.329,16.381,8.849,1.31,9.425,4.61,40.153-1.033,47.078C144.892,247.22,95.257,338.3,144.656,409.563Zm82.38-243c-1.083,2.345-2.051,4.849-4.426,6.206-1.859,1.062-8.846-.032-5.89-5.46a54.718,54.718,0,0,0,5.924-20.256c.508-5.959,11.483-1.323,16.821-1.565,10.63,1.348,20.809-1.142,31.232-2.369,7-.809,9.143,2.253,10.17,6.608.11,13.023-6.016,11.336-7.942,10.593h0c-3.669-1.374-7.877-.673-10.347,3.4-1.257,2.144-1.354,4.8-3.118,6.663-1.786,1.884-4.316,2.076-6.606,2.938-1.935.728-3.24,4.994-.653,4.994,23.485,0,14.626,32.665,16.808,46.084,0,0-14.714-4.011-34.915.1,3.491-20.468-1.964-36.385-.067-56.047a12.221,12.221,0,0,1,2.079-3.446c3.477-.367,4.972,3.092,7.612,4.482,2.27,1.1,5.246-.726,4.453-3.423-1.466-4.605-7.538-8.1-12.282-7.4C231.268,158.744,228.83,162.711,227.036,166.566ZM360.563,319.955c3.144,18.008,6.6,77.084-52.28,95.581-4.794,1.506-9.6,2.982-14.308,4.723-3.145-.108-4.845,7.838,4.576,7.522a46.27,46.27,0,0,0,9.01-1.415,2.4,2.4,0,0,1,2.932,2.717c-.891,5.193-3.771,12.311-4.963,17.215-2.441,9.962-3.461,20.247-6.312,30.113-1.12,4.174-3.521,2.761-6.5,4.672-1.994.082-3.989.148-5.983.225.094-4.423-.454-8.993-.11-13.364.493-6.272,2.621-12.491,2.7-18.755.032-2.62-3.345-3.251-4.685-1.268-5.1,8.212-5.8,21.6-5.917,31.419a6.725,6.725,0,0,1-1.625,2.332q-5.454.19-10.909.35a13.823,13.823,0,0,1-4.306-1.863q-.643-7.994-1.222-15.992c-.371-5.1.8-12.763-2.948-16.654a2.454,2.454,0,0,0-3.458,0c-3.412,4.414-1.533,11.36-1.231,16.654.3,5.242.7,10.476,1.118,15.709-1.681,2.7-5.533,2.274-8.361,2.338-2.844.193-9.65,1.8-9.892-2.983a2.383,2.383,0,0,0-.44-1.324,101.42,101.42,0,0,0-.986-11.754c-.681-6.169-.419-14.847-3.641-20.247a2.614,2.614,0,0,0-4.721.617c-2.426,11.75,4.093,24.627.9,36.43-5.072-.284-11.611,1.928-13.705-4.333-5.854-14.574-4.279-30.371-10.812-44.658a2.331,2.331,0,0,1,2.831-3.184c4.111,1.309,9.373,3.093,11.314,4.219,5.563,3.227,8.843-4.835,5.223-7.1-7.428-4.647-17.681-10.244-27.361-11.663-41.27-10.214-50.326-14.028-60.332-56.692-9.105-53.781,33.831-105.586,82.967-122.711C277.853,215.412,348.967,256.626,360.563,319.955Z"
          />
          <path
            fill="#F5F5F5"
            d="M157.839,358.021c12.559,28.694,42.9,23.7,61.8,4.885a1.523,1.523,0,0,1,2.455,1.677c-3.954,10.01-12.064,16.43-22.449,20.722a2.944,2.944,0,0,0,1.473,5.436c33.187-3.1,48.107-45.616,35.3-73.451C215.872,264.209,140.415,315.3,157.839,358.021Z"
          />
          <path
            fill="#F5F5F5"
            d="M299.637,390.741a2.944,2.944,0,0,0,1.473-5.436c-10.385-4.292-18.5-10.712-22.45-20.722a1.523,1.523,0,0,1,2.456-1.676c40.319,39.512,85.726-4.734,52.85-47.853-8.157-10.758-20.564-16.976-33.379-19.43-17.719-3.393-27.961,3.12-36.247,21.666C251.525,345.112,266.453,387.658,299.637,390.741Z"
          />
          <path
            fill="#F5F5F5"
            d="M237.224,413.3c4.327,4.2,9.53-12.12,14.6-3.668,2.225,2.991,3.767,8.31,7.325,10.03,4.083,2.066,8.261-2.035,7.146-6.25-.689-9.742-3.153-19.412-5.65-28.858-1.526-5.37-3.809-16.654-11.069-17.24-6.977-.564-7.86,12.253-8.913,16.787C239.891,388.69,234,411.05,237.224,413.3Z"
          />
          <path
            fill="#F5F5F5"
            d="M184.525,387.942c-4.616,3.2.026,10.145,4.748,7.1C193.889,391.846,189.247,384.9,184.525,387.942Z"
          />
          <path
            fill="#F5F5F5"
            d="M311.721,387.677c-4.616,3.2.026,10.145,4.747,7.1C321.084,391.582,316.442,384.636,311.721,387.677Z"
          />
          <path
            fill="#F5F5F5"
            d="M37.7,372.953c-3.391,4.78-9.863,7.927-10.14,14.416-.245,5.7,4.413,8.853,9.728,8.266,3.226-.356,6.208-1.91,9.509-1.217,3.914.822,7.208,3.576,10.482,5.709,7.477,5.627,20.64,8.878,25.89-.662a26.194,26.194,0,0,0,16.51.82c7.793-2.077,11.1-11.3,7.077-18.063-2.554-4.856-7.723-7.318-10.725-11.764-3.72-5.51-15.824-34.122-8.313-81.532,0,0,20.757,1.526,12.327-22.489-1.289-3.672-3.794-6.526-4.469-10.449-1.364-9.409.574-19.266,4.191-27.973,1.622-3.718,4.042-7.26,4.524-11.368.781-6.651-3.358-12.023-9.291-14.562-7.464-3.2-15.274-.6-22.994-.281.03-6.544.469-17.436,2.8-20.973,1.675-2.884,4.109-5.158,6.409-7.527a46.011,46.011,0,0,0,10.438-16.192c4.369-11.793,4.5-28.35-3.7-38.641-1.341-1.685-3.255-1.027-4.138.379a2.986,2.986,0,0,0-1.236,2c-.445,2.879-1.079,6.976-3.368,9.044-3.351,3.027-6.612.2-7.281-3.595-1.159-6.573,2.12-14.364,3.482-20.73,2.168-10.485,3.846-22.668-.642-32.824-.5-2.94-5.327-3.851-6.929-.458-14.927,29.222-46.794,70.187-16.235,99.83a3.261,3.261,0,0,0,5.416-1.872,61.508,61.508,0,0,1,2.842-10.571,1.708,1.708,0,0,1,3.238.077c2.513,8.4,1.827,29.592,1.608,41.774-7.073-.629-13.984-4.232-21.2-3.027-7.423,1.544-9.981,5.341-11.207,11.465a18.571,18.571,0,0,1-2.776,6.768c-4.882,7.239-10.022,14.248-3.554,23.014,3.993,5.411,9.183,8.5,12.143,14.9,8.049,17.395.847,38.036-2.671,46.75-5.607,13.888.3,17.078,4.545,17.717a5.585,5.585,0,0,1,4.754,4.585c1.163,7.175.353,17.628.168,22A60.152,60.152,0,0,1,37.7,372.953Zm9.646-66.535c-.4,1.519-.641,6.105-3.982,5.025-4.907-1.586.062-9.013,1.707-12.144,8.064-16.091,3.346-34.147,4.961-51.269.577-6.779.151-18.012,7.788-21.151,2.8-1.151,2.459-5.056-.72-5.322-13.242-.292-12.893,16.862-14.085,26.364A33.752,33.752,0,0,0,36.7,239.9c-2.21-2.04-5.271-4.088-6.174-7.1-1.49-6.969,6.979-12.027,7.914-18.335,2.011-13.576,17.944-6.742,21.171-6.116,7.228,1.4,14.018.845,21.261.028,6.118-.69,17.763-.5,15.469,8.869-.948,3.876-3.155,7.47-4.518,11.227-3.838,11.257-5.535,23.844-3.029,35.581,1.747,7.914-6.819,10.065-7.857,1.416-1.684-12.55,2.013-33.8-7.808-42.834-3.845-3.537-7.694,2.009-5.613,2.861,13.161,13.389-2.7,122.745,20.867,148.163,2.544,3.228,5.912,6.3,7.162,10.327,1.009,3.248-3.239,9.759-9.549,5.043a21.339,21.339,0,0,1-5.206-6.294c-1.418-2.351-5.435-.636-4.363,1.84,2.666,6.16,2.666,12.878-7.183,12.493-10.413-2.294-17.23-12.715-28.54-9.484-2.3.52-6.657,2.673-5.727-1.281.466-1.979,3.918-4.1,5.263-5.545,8.656-9.195,11.687-22.162,12.293-34.445.7-13.011.052-26.077.663-39.11C53.35,303.834,48.2,303.2,47.35,306.418Z"
          />
          <path
            fill="#F5F5F5"
            d="M472.875,216.647c.78-6.651-3.358-12.023-9.292-14.562-7.463-3.2-15.273-.6-22.993-.281.029-6.544.468-17.436,2.8-20.973,1.676-2.884,4.11-5.158,6.41-7.527a46.038,46.038,0,0,0,10.438-16.192c4.368-11.793,4.5-28.35-3.7-38.641-1.342-1.685-3.255-1.027-4.139.379a2.986,2.986,0,0,0-1.236,2c-.444,2.879-1.079,6.976-3.368,9.044-3.35,3.027-6.612.2-7.281-3.595-1.159-6.573,2.121-14.364,3.483-20.73,2.168-10.485,3.846-22.668-.643-32.824-.5-2.94-5.327-3.851-6.929-.458-14.927,29.222-46.793,70.187-16.235,99.83a3.262,3.262,0,0,0,5.417-1.872,61.421,61.421,0,0,1,2.841-10.571,1.709,1.709,0,0,1,3.239.077c2.513,8.4,1.827,29.592,1.608,41.774-7.074-.629-13.984-4.232-21.2-3.027-7.423,1.544-9.981,5.341-11.206,11.465a18.589,18.589,0,0,1-2.776,6.768c-4.882,7.239-10.022,14.248-3.554,23.014,3.992,5.411,9.183,8.5,12.143,14.9,8.049,17.395.847,38.036-2.671,46.75-5.608,13.888.3,17.078,4.545,17.717a5.582,5.582,0,0,1,4.753,4.585c1.163,7.175.353,17.628.168,22a60.151,60.151,0,0,1-7.214,27.253c-3.392,4.78-9.863,7.927-10.14,14.416-.246,5.7,4.413,8.853,9.727,8.266,3.227-.356,6.208-1.91,9.51-1.217,3.914.822,7.207,3.576,10.481,5.709,7.477,5.627,20.64,8.878,25.89-.662a26.2,26.2,0,0,0,16.511.82c7.793-2.077,11.1-11.3,7.077-18.063-2.554-4.856-7.724-7.318-10.725-11.764-3.72-5.51-15.824-34.122-8.314-81.532,0,0,20.757,1.526,12.327-22.489-1.289-3.672-3.794-6.526-4.469-10.449-1.363-9.409.575-19.266,4.192-27.973C469.972,224.3,472.393,220.755,472.875,216.647Zm-7.958.6c-.949,3.876-3.156,7.47-4.518,11.227-3.838,11.257-5.536,23.844-3.029,35.581,1.747,7.914-6.82,10.065-7.857,1.416-1.685-12.55,2.013-33.8-7.808-42.834-3.845-3.537-7.695,2.009-5.614,2.861,13.161,13.389-2.7,122.745,20.867,148.163,2.545,3.228,5.912,6.3,7.162,10.327,1.009,3.248-3.239,9.759-9.548,5.043a21.308,21.308,0,0,1-5.206-6.294c-1.419-2.351-5.435-.636-4.364,1.84,2.666,6.16,2.666,12.878-7.182,12.493-10.413-2.279-17.23-12.727-28.54-9.484-2.3.52-6.658,2.673-5.727-1.281.466-1.979,3.918-4.1,5.263-5.545,17.828-20.055,11.051-49.038,12.956-73.555.157-3.375-4.988-4-5.842-.791-.4,1.519-.641,6.105-3.982,5.025-4.908-1.586.062-9.013,1.706-12.144,8.065-16.091,3.347-34.147,4.961-51.269.578-6.779.152-18.012,7.788-21.151,2.8-1.151,2.459-5.056-.72-5.322-13.242-.292-12.892,16.862-14.084,26.364a33.752,33.752,0,0,0-6.323-8.018c-2.211-2.04-5.272-4.088-6.174-7.1-1.491-6.969,6.978-12.027,7.913-18.335,2.012-13.576,17.944-6.742,21.172-6.116,7.228,1.4,14.017.845,21.26.028C455.565,207.692,467.21,207.883,464.917,217.251Z"
          />
        </svg>
      </motion.div>
      {/* 
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
        className='top-10 left-10 font-playfair text-5xl absolute text-neutral-100'
      >
        loading...
      </motion.div> */}

      <div className="absolute top-10 left-10 flex flex-wrap justify-start w-screen max-w-5xl mx-auto">
        {message.map((word, i) => (
          <motion.div
            key={word.id}
            className="font-playfair text-5xl text-neutral-100 tracking-tighter m-1"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 1.5, delay: i * 1 }}
          >
            {i > 0 ? ' ' : null}
            <h2>{word.word}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default transition(Loading);
