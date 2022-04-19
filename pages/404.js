import {
  StyledButton,
  Grid,
  Typography,
  StyledSpan,
} from '../components/MuiComponents/mui-components';
import { Image } from '../components/NextComponents/next-components';
import Link from '../components/Link/link';
import err from '../public/images/404.svg';

function Custom404() {
  return (
    <Grid container mt={-13} mb={10}>
      <Grid item container justifyContent="center">
        <Typography variant="h3">
          OOOPS...Ceva nu a funcționat<StyledSpan>!</StyledSpan>
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Image
          src={err}
          alt="404"
          layout="fixed"
          width={300}
          height={300}
          priority
        />
      </Grid>
      <Grid item container justifyContent="center">
        <StyledButton
          component={Link}
          href="/"
          sx={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            border: '2px solid orange',
          }}
        >
          Înapoi
        </StyledButton>
      </Grid>
    </Grid>
  );
}

export default Custom404;
