import createEmotionCache from '../lib/create-emotion-cache';
import {
  Head,
  CacheProvider,
} from '../components/NextComponents/next-components';
import { CssBaseline } from '../components/MuiComponents/mui-components';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { AppWrapper } from '../context/context';
import ThemeWrapper from '../components/ThemeWrapper/theme-wrapper';
import PageTransition from '../components/PageTransitionWrapper/page-transition';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          TSE RISK CONSULTING - Analize de risc la securitatea fizica
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Evaluari de risc Romania" />
        <meta
          name="description"
          content="Evaluare de risc la securitatea fizica Cluj"
        />
        <meta
          name="description"
          content="Ce este analiza de risc la securitatea fizica"
        />
        <meta name="description" content="analize de risc Cluj" />
        <meta
          name="description"
          content="Sunt obligat sa fac analiza de risc?"
        />
        <meta
          name="description"
          content="Peste 200 de analize de risc efectuate"
        />
        <meta
          name="description"
          content="Peste 5 ani de activitate privind realizarea analizelor de risc la securitatea fizica"
        />
        <meta name="description" content="Evaluari de risc Cluj" />
      </Head>
      <AppWrapper>
        <ThemeWrapper>
          <CssBaseline />
          <Header />
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
          <Footer />
        </ThemeWrapper>
      </AppWrapper>
    </CacheProvider>
  );
}

export default MyApp;
