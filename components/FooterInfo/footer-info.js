import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../StyledComponents/styled-components';
import { useAppContext } from '../../context/context';
import Link from '../Link/link';

const FooterInfo = () => {
  const { footerInfo, toggleTabIndex } = useAppContext();
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography variant="h6" fontWeight="bolder">
          Info
        </Typography>
      </Grid>
      {footerInfo.map((info, i) => (
        <Grid item key={`${info.title}-${info.path}-${i}`}>
          <StyledButton
            component={Link}
            variant="text"
            href={`${info.path}`}
            onClick={() => toggleTabIndex(null)}
            aria-label={`${info.title}`}
          >
            <Typography variant="subtitle1" fontWeight="bolder">
              {info.title}
            </Typography>
          </StyledButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterInfo;
