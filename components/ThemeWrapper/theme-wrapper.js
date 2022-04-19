import {
  ThemeProvider,
  createTheme,
  red,
  green,
  responsiveFontSizes,
} from '../MuiComponents/mui-components';
import { useMemo } from '../ThirdPartyLibrariesComponents/third-party';
import { useAppContext } from '../../context/context';

const ThemeWrapper = ({ children }) => {
  const { mode } = useAppContext();

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: '#9e9a9a',
            light: '#f9e3bd',
            dark: '#ffffff',
            contrastText: '#fff',
          },
          secondary: {
            main: '#9e9a9a',
            light: '#FF6347',
            dark: '#ffffff',
            contrastText: '#fff',
          },
          error: { main: red.A400 },
          success: { main: green.A400 },
          text: {
            primary: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)',
          },
        },
        typography: {
          fontFamily: ['Karla', 'sans-serif'].join(','),
          subtitle1: {
            color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)',
          },
          h1: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h2: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h3: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h4: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h5: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          h6: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
          p: { color: mode === 'dark' ? '#ffffff' : 'rgba(23, 21, 22, 0.8)' },
        },

        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                overflowX: 'hidden',
                margin: 0,
              },
            },
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
