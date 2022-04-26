import { StyledSpan } from '../components/StyledComponents/styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as contentful from 'contentful';
import MyCard from '../components/Card/card';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

function DespreNoiPage({ despre: { items } }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const { title, shortIntro, firstParagraph, secondParagraph, images } =
    items[0].fields;

  const hello = images[0].fields.file.url;
  const team = images[1].fields.file.url;
  const entrepreneurs = images[2].fields.file.url;
  const legal = images[3].fields.file.url;

  return (
    <>
      <Head>
        <title>Despre TSE RISK CONSULTING</title>
        <meta
          name="description"
          content="Tot ce trebuie sa stii despre analiza de risc la securitatea fizica, legea 333/2003, hg 301/2012 si hg 1002/2015"
        />
        <meta
          name="description"
          content="Evita amenda pentru analiza de risc la securitatea fizica"
        />
        <meta
          name="description"
          content="Informatii despre TSE RISK CONSULTING"
        />
        <meta name="description" content="TSE RISK CONSULTING - Despre" />
        <meta
          name="description"
          content="Despre analize de risc la securitatea fizica Cluj"
        />
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
      </Head>
      <Grid container mb={10}>
        <Grid item container justifyContent="center" mt={-25}>
          <Typography
            variant={matchesSM ? 'h5' : 'h4'}
            align="center"
            fontWeight="bolder"
          >
            {title}
            <StyledSpan>?</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container mt={-25}>
          <Image
            src={hello}
            alt="evaluator de risc la securitatea fizica"
            layout="fixed"
            width={350}
            height={350}
            loader={myLoader}
            priority
          />
        </Grid>
        <Grid item container spacing={5}>
          <Grid item container xs={12} md={6} justifyContent="center">
            <MyCard
              imgSrc={team}
              imgAlt="team"
              content={[shortIntro]}
              cardWidth={matchesSM ? 300 : 450}
              cardHeight={matchesSM ? 430 : 400}
            />
          </Grid>
          <Grid item container xs={12} md={6} justifyContent="center">
            <MyCard
              imgSrc={entrepreneurs}
              imgAlt="entrepreneurs"
              content={[firstParagraph]}
              cardWidth={matchesSM ? 300 : 450}
              cardHeight={matchesSM ? 430 : 400}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          sx={{ zIndex: 1000 }}
          mt={6}
        >
          <MyCard
            imgSrc={legal}
            alt="analiza de risc la securitatea fizica"
            content={[secondParagraph]}
            cardWidth={matchesSM ? 300 : 450}
            cardHeight={matchesSM ? 430 : 400}
          />
        </Grid>
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({ content_type: 'desprePage' });
  return { props: { despre: data } };
}
export default DespreNoiPage;
