import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

const ServiciiPageGrid = ({ serviciu, imgSrc, altOfImg }) => {
  return (
    <Grid item container direction="row" mb={4}>
      <Grid item container sm={12} md={6} alignItems="center" mb={4}>
        <Typography padding={2} variant="subtitle1" align="left">
          {serviciu}
        </Typography>
      </Grid>
      <Grid item container sm={12} md={6} justifyContent="center">
        <Box
          sx={(theme) => ({
            width: 400,
            height: 250,
            position: 'relative',
            'img:first-of-type': {
              borderRadius: 1,
            },
          })}
        >
          <Image
            loader={myLoader}
            src={imgSrc}
            alt={altOfImg}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ServiciiPageGrid;
