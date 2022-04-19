import { Typography, Grid } from '../MuiComponents/mui-components';
import { CookieConsent } from '../ThirdPartyLibrariesComponents/third-party';

function CookieModal() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="cook_agree"
      contentStyle={{ flex: '0 0 100%', textAlign: 'center' }}
      style={{
        background:
          'radial-gradient(circle, rgba(157,221,255,1) 0%, rgba(249,227,189,1) 50%)',
        zIndex: 3000,
        color: 'red',
        justifyContent: 'center',
      }}
      buttonStyle={{
        color: 'red',
        backgroundColor: 'white',
        fontSize: '13px',
        alignItems: 'center',
        marginTop: 0,
      }}
      expires={150}
    >
      <Grid container direction="column">
        <Grid item container justifyContent="center">
          <Typography>Permiteți Cookies</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          Acest website utilizează cookie-uri pentru a vă îmbunătăți experiența.
          Prin continuarea navigării website-ului vă acordați consimțământul cu
          privire la acest aspect. Pentru mai multe detalii, vă rugăm consultați
          secțiunea Politica de cookies.
        </Grid>
      </Grid>
    </CookieConsent>
  );
}

export default CookieModal;
