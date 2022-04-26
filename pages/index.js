import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CookieModal from '../components/CookieModal/cookie-modal';
import { StyledSpan } from '../components/StyledComponents/styled-components';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MyCard from '../components/Card/card';
import CounterAnimation from '../components/CounterAnimation/counter-animation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import * as contentful from 'contentful';

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

  const metaPicUrl = `https://${images[5].fields.file.url}`;

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
          content="Analize de risc la securitatea fizica prin experti abilitati inscrisi in Registrul National al Evaluatorilor de risc la securitatea fizica"
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
        <meta
          name="description"
          content="Analiza de risc reprezinta fundamentul adoptarii masurilor de securitate. Orice instalare a unui sistem antiefractie sau supraveghere video trebuie sa fie realizata in baza unei analize de risc."
        />
        <meta name="description" content="securitate romania" />
        <meta name="description" content="consultanta securitate cluj" />
        <meta name="description" content="RNERS romania" />
        <meta name="description" content="Ce este analiza de risc?" />
        <meta name="description" content="Contact analize de risc Cluj" />
        <meta name="description" content="Ai nevoie de o analiza de risc?" />
        <meta
          name="description"
          content="Tot ce trebuie sa stii despre analiza de risc la securitatea fizica"
        />
        <meta name="description" content="Evaluare de risc la securitate" />
        <meta name="description" content="legea 333/2003" />
        <meta name="description" content="hg 301/2012" />
        <meta name="description" content="evaluare de risc la preturi mici" />
        <meta
          name="description"
          content="Pagina de contact a TSE RISK CONSULTING"
        />
        <meta name="description" content="Contact TSE RISK CONSULTING" />
        <meta name="description" content="Contact analize de risc" />
        <meta name="description" content="Analiza de risc Cluj" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TSE RISK CONSULTING - Analize de risc la securitatea fizica prin experti abilitati inscrisi in R.N.E.R.S.F"
        />
        <meta
          property="og:description"
          content="TSE RISK CONSULTING - Ce este analiza de risc? Realizam analize de risc la securitatea fizica prin experti abilitati"
        />
        <meta property="og:url" content="https://tseriskconsulting.ro" />
        <meta
          property="og:site_name"
          content="TSE RISK CONSULTING - Evaluari de risc la securitatea fizica Cluj, Romania"
        />
        <meta property="og:image" content={`${metaPicUrl}`} />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="488" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Analize de risc la securitatea fizica prin experti abilitati inscrisi in RNERSF"
        />
        <meta
          name="twitter:title"
          content="Analize de risc la securitatea fizica prin experti abilitati inscrisi in RNERSF"
        />
        <meta name="twitter:image" content={`${metaPicUrl}`} />
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

            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                container
                alignItems="center"
                direction="column"
                justifyContent="center"
                sx={{
                  mt: { sm: -60, xs: -25, md: -55, lg: -50 },
                  display: 'block',
                }}
                xs={12}
                sm={4}
              >
                <Image
                  src={hero}
                  alt="Evaluator de risc la securitatea fizica, analiza de risc la securitatea fizica Cluj Romania"
                  width={300}
                  height={300}
                  layout="responsive"
                  loader={myLoader}
                  priority
                />
              </Grid>
              <Grid item container xs={10} sm={8} p={2} mb={2} gap={2}>
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  mb={2}
                  sx={{
                    borderRadius: 2,
                    boxShadow: '1px 1px 1px 1px  #9DDDFF',
                  }}
                >
                  <Typography
                    variant="h6"
                    align="center"
                    p={5}
                    fontWeight="bold"
                  >
                    Efectuam analize de risc la securitatea fizica prin experti
                    abilitati si inscrisi in R.N.E.R.S.F(Registrul National al
                    evaluatorilor de risc la securitatea fizica)
                  </Typography>
                </Grid>
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
