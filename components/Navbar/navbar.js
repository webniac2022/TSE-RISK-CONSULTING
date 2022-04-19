import {
  StyledButton,
  Typography,
  Grid,
} from '../MuiComponents/mui-components';
import { useAppContext } from '../../context/context';
import Link from '../Link/link';
import Underline from '../UnderlineAnimation/underline';

const Navbar = ({ navLinks }) => {
  const { toggleTabIndex, tabIndexx } = useAppContext();

  const handleChange = (e, index) => {
    toggleTabIndex(index);
  };

  return (
    <Grid
      container
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-between',
      }}
    >
      {navLinks.map(({ title, path, tabIndex }, i) => {
        return (
          <Grid item key={`${title}${i}`}>
            <Grid container direction="column">
              <Grid item>
                <StyledButton
                  component={Link}
                  href={path}
                  onClick={(e, i) => handleChange(e, tabIndex)}
                  aria-label={`${title}`}
                >
                  <Typography variant="subtitle1" fontWeight="bolder">
                    {title}
                  </Typography>
                </StyledButton>
              </Grid>
              <Grid item>
                {tabIndexx === tabIndex && (
                  <Underline height={20} width="100%" />
                )}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Navbar;
