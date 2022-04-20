import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

function MyCard({ imgSrc, imgAlt, content, cardWidth, cardHeight }) {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={variants}
      ref={ref}
    >
      <Card align="center" sx={{ width: cardWidth, height: cardHeight }}>
        <CardMedia sx={{ width: 280, height: 200 }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={imgSrc}
              alt={imgAlt}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              loader={myLoader}
              priority
            />
          </Box>
        </CardMedia>
        <CardContent>
          {content.map((c, i) => (
            <Typography variant="paragraph" key={i}>
              {c}
              {i !== content.length - 1 && <br />}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default MyCard;
