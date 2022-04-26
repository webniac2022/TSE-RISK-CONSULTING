import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { Fragment } from 'react';
import { useAppContext } from '../../context/context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import logo from '../../public/images/logo.svg';
import bg from '../../public/images/bg_two.svg';
import Link from '../Link/link';
import Navbar from '../Navbar/navbar';
import SideDrawer from '../SideDrawer/side-drawer';
import HideOnScroll from '../HideOnScroll/hide-on-scroll';
import BackToTop from '../BackToTop/back-to-top';

const Offset = styled('div')(({ theme }) => ({}));
const MyOffset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginTop: 12,
}));

const Header = () => {
  const { services, mode, toggleTheme, toggleTabIndex } = useAppContext();

  return (
    <Fragment>
      <HideOnScroll>
        <div>
          <AppBar
            position="static"
            sx={(theme) => ({
              zIndex: theme.zIndex.modal + 1,
              background: 'transparent',
              backgroundImage: `url(${bg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100vw',
              height: 220,
            })}
            elevation={0}
          >
            <Toolbar>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <IconButton
                    size="small"
                    edge="start"
                    aria-label="home"
                    disableRipple
                    onClick={() => toggleTabIndex(0)}
                  >
                    <Box component={Link} href="/" noLinkStyle>
                      <Image src={logo} alt="logo" width={80} height={80} />
                    </Box>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={toggleTheme}
                    sx={{ height: 40 }}
                    aria-label="theme"
                  >
                    {mode === 'light' ? (
                      <LightModeIcon sx={{ fill: '#FF0000' }} />
                    ) : (
                      <DarkModeIcon sx={{ fill: '#F0E68C' }} />
                    )}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Navbar navLinks={services} />
                  <SideDrawer navLinks={services} />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <MyOffset />
        </div>
      </HideOnScroll>

      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab
          size="large"
          aria-label="back to top"
          sx={{
            background: '#9DDDFF',
            '&:hover': { background: '#9DDDFF', opacity: 0.8 },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </Fragment>
  );
};

export default Header;
