import { useAppContext } from '../../context/context';
import { motion } from '../ThirdPartyLibrariesComponents/third-party';
import { useTheme } from '../MuiComponents/mui-components';

function ContactThanksAnimation() {
  const { mode } = useAppContext();
  const theme = useTheme();
  const variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 4 } },
  };

  return (
    <motion.svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={300}
      height={300}
      viewBox="0 0 750 750"
      scale={2.2}
    >
      <motion.circle
        cx={180.18}
        cy={49.432}
        r={49.432}
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      ></motion.circle>

      <motion.path
        d="M235.805 364.622a81.057 81.057 0 0 1-52.68-19.454c-4.898-4.192-10.116-11.48-15.51-21.66a49.536 49.536 0 0 1-1.57-42.765 56.842 56.842 0 0 1-9.388 7.699l-1.716 1.142-.099-2.058a82.05 82.05 0 0 1-.098-3.965c0-7.615 5.76-15.343 3.104-22.383-11.197-29.669-46.71-59.154 4.76-105.071 4.76-4.248-1.6-12.74-1.6-19.167 0-62.982 68.433-157.46 114.243-114.22 26.74 25.238 82.453 43.167 108.464 78.273l.345 1.04-1.015.411a61.223 61.223 0 0 1-16.267 4.327 77.569 77.569 0 0 0 18.138 1.52l.943-.034.23.917a114.743 114.743 0 0 1 3.406 27.766l-.004 1.012a50.592 50.592 0 0 0 16.713 37.723 81.244 81.244 0 0 1 26.505 59.951c0 13.352-9.074 30.879-16.687 43.23a24.445 24.445 0 0 1-17.946 11.495 23.873 23.873 0 0 1-19.266-6.224 78.949 78.949 0 0 0 13.922 19.711l1.039 1.07-1.29.752a80.997 80.997 0 0 1-40.831 11.027l-.84-.002c-21.782 0-42.457 8.438-56.724 23.152a81.673 81.673 0 0 1-58.28 24.785Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M207.22 491.6a1.458 1.458 0 0 1-1.441-1.253c-.062-.435-6.128-44.187-.68-102.335 5.032-53.701 21.19-131.05 69.594-194.575a1.458 1.458 0 1 1 2.32 1.767c-47.987 62.977-64.015 139.758-69.011 193.08-5.417 57.81.602 101.22.664 101.652a1.46 1.46 0 0 1-1.446 1.664Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M251.418 281.435a1.458 1.458 0 0 1-.859-2.637 200.92 200.92 0 0 1 44.357-22.58c24.472-8.96 61.685-17.081 99.996-4.888a1.458 1.458 0 1 1-.884 2.778c-37.526-11.943-74.065-3.955-98.11 4.848a197.62 197.62 0 0 0-43.645 22.2 1.452 1.452 0 0 1-.855.279ZM183.697 109.26a1.458 1.458 0 0 1 2.569-1.047 200.92 200.92 0 0 1 25.715 42.615c10.698 23.764 21.48 60.296 12.077 99.385a1.458 1.458 0 1 1-2.834-.682c9.209-38.288-1.39-74.157-11.902-97.506a197.62 197.62 0 0 0-25.285-41.932 1.452 1.452 0 0 1-.34-.834Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M539.353 580.178c-100.268 0-177.23-5.278-230.648-26.439-130.109-51.54-174.218-72.943-174.649-73.153l.878-1.797c.43.21 44.495 21.589 174.507 73.09 77.117 30.55 204 27.826 379.616 24.053 32.955-.707 67.032-1.439 103.324-2.022l.031 2c-36.285.583-70.36 1.314-103.312 2.022-54.631 1.173-104.559 2.246-149.747 2.246ZM116.202 711.394l-1.414-1.414c48.58-48.58 67.3-67.153 71.267-71.083L42.91 535.497l1.17-1.62 145.06 104.782-.84.83c-.16.16-16.742 16.55-72.098 71.905ZM188.28 763.679l-1.364-1.463c4.481-4.183 109.888-102.336 130.428-102.336h.065l472.096 4.807-.02 2-472.096-4.807h-.058c-19.738 0-127.959 100.779-129.051 101.799ZM658.243 610.687h121.252v2H658.243zM431.243 610.687h121.252v2H431.243z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M425.495 449.53h-70v-17.685h26a6 6 0 0 0 6-6v-19.158a6 6 0 0 0-6-6h-26v-6a8 8 0 0 0-16 0v6h-96.09a6 6 0 0 0-3.468 1.103l-13.527 9.58a6 6 0 0 0 0 9.793l13.527 9.579a6 6 0 0 0 3.467 1.103h96.091v17.684h-70a6 6 0 0 0-6 6v19.158a6 6 0 0 0 6 6h70v66a8 8 0 0 0 16 0v-66h70a6 6 0 0 0 6-6V455.53a6 6 0 0 0-6-6Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M307.495 417.187h-50a3.5 3.5 0 0 1 0-7h50a3.5 3.5 0 0 1 0 7Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M369.495 468.187h-50a3.5 3.5 0 1 1 0-7h50a3.5 3.5 0 0 1 0 7Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M129.495 549.53v-17.685h26a6 6 0 0 0 6-6v-19.158a6 6 0 0 0-6-6h-26v-5.726a8.182 8.182 0 0 0-7.467-8.257 8 8 0 0 0-8.533 7.983v6L5.886 551.037a3.552 3.552 0 0 0-1.874 2.11c-.847 2.582-2.628 8.092-3.839 12.438a4.668 4.668 0 0 0 4.65 5.907c6.935-.213 11.498-.536 14.664-.624a4.64 4.64 0 0 0 1.77-.405l92.238-38.618v114.568a8.182 8.182 0 0 0 7.468 8.257 8 8 0 0 0 8.532-7.983V549.53Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m87.74 532.154-45.626 20.453a3.5 3.5 0 0 1-2.863-6.387l45.625-20.453a3.5 3.5 0 0 1 2.864 6.387Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m699.187 369.224-20.851 2.115a61.775 61.775 0 0 0 5.417 31.258l-6.256 58.271.093-.001a6.766 6.766 0 1 0 11.157-.813l13.905-51.993ZM635.054 625.01l-8.859-1.527-.868-26.742 15.615-5.905-5.888 34.174z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m633.774 634.306-27.245-4.694.06-.344a10.761 10.761 0 0 1 12.43-8.778h.001l5.627-2.918 8.635 5.375 2.379.41Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        d="m723.94 606.495-7.672 4.685-21.726-27.365 11.325-6.915 18.073 29.595z"
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m729.099 614.334-23.595 14.41-.182-.3a10.761 10.761 0 0 1 3.575-14.791l2.313-5.902 10.038-1.641 2.06-1.258ZM638.084 462.372l-5.316 20.201s-1.451 8.372-.7 9.124a10.093 10.093 0 0 1 1.842 6.223c-.337 2.048-3.777 1.213-2.057 4.263s-3.596 49.449-3.596 49.449l-4.762 57.055 17 2c2.441-1.43 2.799-3.054 1.358-4.849 0 0 3.487-4.021 1.565-5.586s1.55-2.219 1.74-6.212l10.972-39.181 3.632-8.759-.95-4.569 2.76-5.245 1.326-13.76 3.597 36.161 33.598 38.582 16.542-8.272.971-2.114a3.927 3.927 0 0 0-1.499-4.976l-5.612-5.22c.48-2.15-7.154-7.542-7.154-7.542l-12.783-24.061 7.937-67.397s12-16-3.897-30.478c-6.513-5.93-56.514 15.163-56.514 15.163Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="M689.244 435.832c2.818-4.188 9.586 1.827 7.33-5.692s-7.963-8.917-2.854-16.113l7.365-35.87a33.002 33.002 0 0 0-8.106-23.415l-10.603-12.134-1.593-4.304-18.046-.752-1.504 5.264c-5.39 6.713-14.214 15.332-13.95 28.01.508 24.398-3.297 56.862-12.669 99.095 0 0 20.959-16.365 27.549-9.275s26.442 5.163 31.403.222a29.379 29.379 0 0 0 6.768-12.03s-13.908-8.817-11.09-13.006Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m700.639 464.287-41.144-11.6-27 13c12.09-22.494 19.445-59.947 17.122-91.764a36.684 36.684 0 0 1 3.835-19.595c3.712-7.144 9.517-12.191 18.043-11.64l11-1 7 4c10.129 10.61 14.113 26.442 12.537 41.027-1.74 16.098-3.905 35.653-4.342 37.4-.256 1.026.554 2.828 1.411 4.735 1.448 3.218 3.249 7.224.746 9.726a7.282 7.282 0 0 0-2.454 5.337 6.527 6.527 0 0 0 2.434 4.64c3.197 2.761.972 14.877.876 15.392Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m679.65 384.616-20.672-3.452a61.775 61.775 0 0 0-3.008 31.58l-21.386 54.566.09.023a6.766 6.766 0 1 0 10.977 2.155l27.11-46.494Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.path
        d="m655.495 395.687 24-5 3.92-17.418a13.535 13.535 0 0 0-27.07 0c-2.418 9.693-1.996 12.502-.85 22.418Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
      <motion.circle
        cx={671.008}
        cy={316.499}
        r={18.798}
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
      ></motion.circle>

      <motion.path
        d="M692.814 302.212c-1.463-2.618-7.281.731-9.085-1.665a19.624 19.624 0 0 0-5.359-5.274 11.705 11.705 0 0 0-11.54-.128 23.206 23.206 0 0 1-4.146 2.356c-1.519.485-3.5.118-4.159-1.334l1.392 3.807a5.415 5.415 0 0 1-6.975-2.225l-.245 3.941a1.57 1.57 0 0 0-1.726-1.101 2.83 2.83 0 0 0-1.924 2.013c-1.188 3.492 1.653 7.568 5.294 8.153 2.253.362 4.518-.36 6.779-.667s4.877-.05 6.305 1.728c1.402 1.748 1.13 4.237 1.212 6.476s1.06 4.925 3.28 5.224c1.524.205 2.98-.858 4.515-.767 2.19.13 3.595 2.648 3.359 4.83s-1.608 4.049-2.931 5.8l6.563.518-.848.236c5.353-.262 9.484-5.457 10.123-10.778s2.73-16.465.116-21.143Z"
        fill={
          mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
        initial="hidden"
        animate="visible"
        variants={variants}
        stroke="#9DDDFF"
        strokeWidth={2}
      />
    </motion.svg>
  );
}

export default ContactThanksAnimation;
