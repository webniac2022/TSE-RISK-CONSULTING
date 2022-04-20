import { StyledButton } from '../components/StyledComponents/styled-components';
import Link from '../components/Link/link';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const SuccessFormPage = () => {
  return (
    <Grid container justifyContent="center" gap={5} mb={10}>
      <Grid item container justifyContent="center">
        <Alert severity="success" sx={{ fontSize: 20 }}>
          <AlertTitle>Mesaj trimis cu succes!</AlertTitle>
          Mesajul tau a fost trimis cu succes! Multumim pentru interesul si
          increderea acordata!
        </Alert>
      </Grid>
      <Grid item container justifyContent="center">
        <StyledButton
          component={Link}
          href="/"
          sx={{
            height: 50,
            width: 200,
            fontSize: 26,
            background:
              'radial-gradient(circle, rgba(157,221,255,1) 0%, rgba(249,227,189,1) 50%)',
            '&:hover': { opacity: 0.7, transition: '1s ease' },
          }}
        >
          Inapoi
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default SuccessFormPage;
