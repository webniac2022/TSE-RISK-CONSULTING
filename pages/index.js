import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CookieModal from '../components/CookieModal/cookie-modal';
import {
  StyledSpan,
  useMediaQuery,
  Typography,
  Grid,
  useTheme,
} from '../components/MuiComponents/mui-components';
import { Image, Head } from '../components/NextComponents/next-components';
import {
  contentful,
  motion,
} from '../components/ThirdPartyLibrariesComponents/third-party';

import MyCard from '../components/Card/card';
import CounterAnimation from '../components/CounterAnimation/counter-animation';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

function HomePage({ homepage: { items } }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    mainTitle,
    shortIntro,
    homepageText,
    homepageSecondText,
    secondTitle,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    finalParagraph,
    images,
  } = items[0].fields;

  const hero = images[0].fields.file.url;
  const profi = images[1].fields.file.url;
  const data = images[2].fields.file.url;
  const security = images[3].fields.file.url;
  const vault = images[4].fields.file.url;

  return (
    <main>
      <Head>
        <title>
          TSE RISK CONSULTING - Analize de risc la securitatea fizica Cluj,
          Romania
        </title>
        <meta
          name="description"
          content="Analize de risc la securitatea fizica Cluj"
        />
        <meta
          name="description"
          content="Legea 333/2003 - realizarea analizei de risc la securitate"
        />
        <meta name="description" content="Ai nevoie de analiza de risc ?" />
        <meta name="description" content="Ce este analiza de risc?" />
        <meta name="description" content="Cat costa analiza de risc?" />
        <meta name="description" content="Analize de risc Cluj" />
        <meta name="description" content="Analize de risc Romania" />
        <meta name="description" content="Evaluator de risc" />
        <meta name="description" content="Evaluatori de risc Romania" />
        <meta name="description" content="Raport risc Cluj" />
        <meta name="description" content="Raport risc Romania" />
        <meta name="description" content="Securitate Cluj" />
      </Head>
      <Grid container mb={10}>
        <Grid item container direction="column" spacing={4}>
          <Grid item container>
            <Grid item container justifyContent="center" mt={-25}>
              <Typography variant={matchesSM ? 'h5' : 'h4'} fontWeight="bolder">
                {mainTitle}
                <StyledSpan>.</StyledSpan>
              </Typography>
            </Grid>

            <Grid item container direction="row">
              <Grid
                item
                container
                alignItems="center"
                sx={{ mt: { sm: -60, xs: -25, md: -55, lg: -50 } }}
                xs={12}
                sm={3}
              >
                <Image
                  src={hero}
                  alt="man working on the computer"
                  width={300}
                  height={300}
                  loader={myLoader}
                  priority
                />
              </Grid>
              <Grid item container xs={12} sm={9}>
                <CounterAnimation />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container justifyContent="center">
            <Grid item container xs={10} md={6} justifyContent="center">
              <MyCard
                imgSrc={profi}
                imgAlt="direction"
                content={[shortIntro]}
                cardWidth={matchesSM ? 300 : 450}
                cardHeight={matchesSM ? 500 : 450}
              />
            </Grid>
            <Grid
              item
              container
              xs={10}
              md={6}
              alignItems="center"
              justifyContent="center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 4 } }}
              >
                <ArrowForwardIcon
                  sx={{
                    width: 200,
                    height: 200,
                    fill: '#9DDDFF',
                    transform: 'rotate(90deg)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
            <Typography
              align="center"
              variant={matchesSM ? 'h5' : 'h4'}
              fontWeight="bold"
            >
              {secondTitle}
              <StyledSpan>?</StyledSpan>
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            spacing={4}
            justifyContent="center"
          >
            <Grid item container xs={10} md={6} justifyContent="center">
              <MyCard
                imgSrc={data}
                imgAlt="risk evaluation"
                content={[homepageText]}
                cardWidth={matchesSM ? 300 : 450}
                cardHeight={matchesSM ? 610 : 550}
              />
            </Grid>

            <Grid item container xs={10} md={6} justifyContent="center">
              <MyCard
                imgSrc={vault}
                imgAlt="vault"
                content={[finalParagraph]}
                cardWidth={matchesSM ? 300 : 450}
                cardHeight={matchesSM ? 670 : 550}
              />
            </Grid>
          </Grid>

          <Grid item container justifyContent="center">
            <MyCard
              imgSrc={security}
              imgAlt="security"
              content={[
                homepageSecondText,
                firstParagraph,
                secondParagraph,
                thirdParagraph,
              ]}
              cardWidth={matchesSM ? 300 : 450}
              cardHeight={matchesSM ? 720 : 570}
            />
          </Grid>
          <CookieModal />
        </Grid>
      </Grid>
    </main>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({ content_type: 'homepage' });
  return { props: { homepage: data } };
}

export default HomePage;
