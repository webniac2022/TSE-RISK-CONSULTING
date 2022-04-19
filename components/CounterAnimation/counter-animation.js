import {
  useInView,
  useCountUp,
  motion,
  useRef,
  useEffect,
} from '../ThirdPartyLibrariesComponents/third-party';
import { Image } from '../NextComponents/next-components';
import { Grid, styled } from '../MuiComponents/mui-components';
import documents from '../../public/images/documents.svg';
import time from '../../public/images/time.svg';

const MyCounter = styled('div')(({ theme }) => ({
  fontWeight: 'bolder',
  color: '#9DDDFF',
  fontSize: 20,
}));

function CounterAnimation() {
  const { ref: refOne, inView: inViewOne } = useInView();
  const { ref: refTwo, inView: inViewTwo } = useInView();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };
  const animationRefOne = useRef();
  const animationRefTwo = useRef();
  const { start: startOne } = useCountUp({
    ref: animationRefOne,
    start: 0,
    end: 200,
    duration: 2,
    prefix: '>',
    suffix: ' analize efectuate',
  });
  const { start: startTwo } = useCountUp({
    ref: animationRefTwo,
    start: 0,
    end: 5,
    duration: 2,
    prefix: '>',
    suffix: ' ani activitate',
  });

  useEffect(() => {
    if (inViewOne) {
      startOne();
    } else if (inViewTwo) {
      startTwo();
    }
  }, [inViewOne, inViewTwo, startOne, startTwo]);

  return (
    <Grid item container direction="row" mt={1}>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={6}
        xs={12}
        mb={10}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image src={documents} alt="documents" width={180} height={180} />
          </motion.div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div ref={refOne}>
            <MyCounter ref={animationRefOne} />
          </motion.div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        sm={6}
        xs={12}
      >
        <Grid item container direction="column" alignItems="center">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image src={time} alt="time" width={180} height={180} />
          </motion.div>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <motion.div ref={refTwo}>
            <MyCounter ref={animationRefTwo} />
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CounterAnimation;
