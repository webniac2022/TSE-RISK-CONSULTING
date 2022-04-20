import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
function CopyRight() {
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h6" fontWeight="bolder">
        &copy;{new Date().getFullYear()} All rights reserved.
      </Typography>
      <Typography variant="h6" fontWeight="bolder">
        TSE RISK CONSULTING
      </Typography>
    </Grid>
  );
}

export default CopyRight;
