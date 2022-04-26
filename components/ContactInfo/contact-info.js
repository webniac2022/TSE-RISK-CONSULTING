import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { StyledButton } from '../StyledComponents/styled-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Link from '../Link/link';

const ContactInfo = ({ isDisplayed }) => {
  const router = useRouter();
  return (
    <Grid
      item
      container
      direction="column"
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      {isDisplayed && (
        <Grid item>
          <Typography variant="h6" fontWeight="bolder">
            Contact
          </Typography>
        </Grid>
      )}
      <Grid item container justifyContent="center">
        <Grid item>
          <StyledButton
            variant="text"
            startIcon={<PhoneIcon sx={{ fill: 'red' }} />}
            size="medium"
            component={Link}
            href="tel:+0742409403"
            aria-label="0742.409.403"
          >
            <Typography variant="subtitle1" fontWeight="bolder">
              0742.409.403
            </Typography>
          </StyledButton>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item>
          <StyledButton
            variant="text"
            startIcon={<EmailIcon sx={{ fill: 'rgba(240, 156, 74, 0.8)' }} />}
            size="medium"
            component={Link}
            href={router.pathname}
            onClick={(e) => e.preventDefault()}
            aria-label="office@tseriskconsulting.ro"
          >
            <Typography variant="subtitle1" fontWeight="bolder">
              office@tseriskconsulting.ro
            </Typography>
          </StyledButton>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item>
          <StyledButton
            variant="text"
            startIcon={<FacebookIcon sx={{ fill: '#3b5998' }} />}
            size="medium"
            component={Link}
            href="https://www.facebook.com/TSE-Risk-Consulting-104100931475614/"
            target="_blank"
            rel="noopener"
            aria-label="/TSERISKCONSULTING"
          >
            <Typography variant="subtitle1" fontWeight="bolder">
              /TSERISKCONSULTING
            </Typography>
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
