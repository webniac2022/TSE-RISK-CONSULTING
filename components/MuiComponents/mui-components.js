import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Slide from '@mui/material/Slide';
import MuiLink from '@mui/material/Link';
import Container from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import {
  createTheme,
  responsiveFontSizes,
  useTheme,
  styled,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { green, red } from '@mui/material/colors';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  '&:hover': {
    background: `radial-gradient(circle, rgba(157,221,255,1) 0%, rgba(249,227,189,1) 50%)`,
  },
  fontWeight: 'bolder',
}));

const StyledSpan = styled('span')({
  color: 'orange',
});

export {
  MuiLink,
  StyledButton,
  StyledSpan,
  useMediaQuery,
  green,
  red,
  Container,
  SwipeableDrawer,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useTheme,
  styled,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  useScrollTrigger,
  Zoom,
  Box,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Alert,
  AlertTitle,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Slide,
};
