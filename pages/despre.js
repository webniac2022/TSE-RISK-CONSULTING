import {
  StyledSpan,
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
} from '../components/MuiComponents/mui-components';
import { Image, Head } from '../components/NextComponents/next-components';
import { contentful } from '../components/ThirdPartyLibrariesComponents/third-party';
import MyCard from '../components/Card/card';

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
          content="Informatii despre TSE RISK CONSULTING"
        />
        <meta name="description" content="TSE RISK CONSULTING - Despre" />
        <meta
          name="description"
          content="Despre analize de risc la securitatea fizica Cluj"
        />
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
            alt="hello"
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
            alt="legal"
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
