import { StyledButton } from '../StyledComponents/styled-components';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Menu from '@mui/icons-material/Menu';
import { useAppContext } from '../../context/context';
import Link from '../Link/link';
import Underline from '../UnderlineAnimation/underline';

const SideDrawer = ({ navLinks }) => {
  const { toggleTabIndex, tabIndexx } = useAppContext();
  const [state, setState] = useState({
    left: false,
  });

  const handleChange = (e, index) => {
    toggleTabIndex(index);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container
      sx={{
        mt: 'auto',
        mb: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
                  <Underline width="100%" height={20} />
                )}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
          height: 50,
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        keepMounted
        PaperProps={{
          sx: { width: '60%' },
        }}
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer('left', true)}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </SwipeableDrawer>
    </>
  );
};

export default SideDrawer;
