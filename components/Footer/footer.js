import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { Fragment } from 'react';
import bgFooter from '../../public/images/bgFooter.svg';
import ContactInfo from '../ContactInfo/contact-info';
import FooterInfo from '../FooterInfo/footer-info';
import CopyRight from '../CopyRight/copyright';
import Author from '../Author/author';

function Footer() {
  return (
    <Fragment>
      <AppBar
        position="static"
        sx={{
          pb: 2,
          pt: 1,
          background: 'transparent',
          backgroundImage: `url(${bgFooter.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
        elevation={0}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContactInfo isDisplayed={true} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterInfo />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} md={6}>
              <CopyRight />
            </Grid>
            <Grid item container xs={12} md={6} justifyContent="center">
              <Author />
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
}

export default Footer;
