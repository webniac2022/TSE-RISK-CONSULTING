import {
  StyledSpan,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '../components/MuiComponents/mui-components';
import { Head } from '../components/NextComponents/next-components';
import { contentful } from '../components/ThirdPartyLibrariesComponents/third-party';

import MyCard from '../components/Card/card';

function ServiciiPage({ servicii: { items } }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    title,
    firstService,
    secondService,
    thirdService,
    fourthService,
    images,
  } = items[0].fields;

  const consultancy = images[0].fields.file.url;
  const contract = images[1].fields.file.url;
  const evaluation = images[2].fields.file.url;
  const completedTasks = images[3].fields.file.url;

  return (
    <>
      <Head>
        <title>Servicii analiza de risc TSE RISK CONSULTING</title>
        <meta name="description" content="Servicii TSE RISK CONSULTING" />
        <meta
          name="description"
          content="Analize de risc la securitatea fizica Cluj"
        />
        <meta
          name="description"
          content="Evaluari de risc la securitatea fizica Cluj"
        />
        <meta name="description" content="Raport evaluare de risc Cluj" />
        <meta name="description" content="Evaluatori profesionisti Romania" />
        <meta name="description" content="Legea 333/2003 evaluare de risc" />
        <meta name="description" content="H.G.1002/2015" />
      </Head>

      <Grid container mb={10}>
        <Grid item container justifyContent="center" mt={-25}>
          <Typography
            variant={matchesSM ? 'h5' : 'h4'}
            align="center"
            fontWeight="bolder"
          >
            {title}
            <StyledSpan>.</StyledSpan>
          </Typography>
        </Grid>

        <Grid item container mt={-10}>
          <Grid item container direction="row" mb={7} spacing={5}>
            <Grid item container xs={12} lg={6} justifyContent="center">
              <MyCard
                imgSrc={consultancy}
                alt="consultancy service"
                content={[firstService]}
                cardWidth={matchesSM ? 300 : 450}
                cardHeight={matchesSM ? 450 : 400}
              />
            </Grid>
            <Grid item container xs={12} lg={6} justifyContent="center">
              <MyCard
                imgSrc={contract}
                alt="evaluation contract"
                content={[secondService]}
                cardWidth={matchesSM ? 300 : 450}
                cardHeight={matchesSM ? 500 : 400}
              />
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item container direction="row" spacing={5}>
              <Grid item container xs={12} lg={6} justifyContent="center">
                <MyCard
                  imgSrc={evaluation}
                  alt="evaluation process"
                  content={[thirdService]}
                  cardWidth={matchesSM ? 300 : 450}
                  cardHeight={matchesSM ? 450 : 400}
                />
              </Grid>
              <Grid
                item
                container
                xs={12}
                lg={6}
                justifyContent="center"
                mb={5}
              >
                <MyCard
                  imgSrc={completedTasks}
                  alt="implementing recomandations"
                  content={[fourthService]}
                  cardWidth={matchesSM ? 300 : 450}
                  cardHeight={matchesSM ? 450 : 400}
                />
              </Grid>
            </Grid>
          </Grid>
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
  const data = await client.getEntries({ content_type: 'serviciiPage' });
  return { props: { servicii: data } };
}

export default ServiciiPage;
