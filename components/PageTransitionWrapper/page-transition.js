import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function PageTransition({ children }) {
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: [-400, -300, -200, -100, 0] },
    exit: { opacity: 0, x: 0, y: [-400, -300, -200, -100, 0] },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: [0.2, 0.22, 0.25, 0.27], duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
