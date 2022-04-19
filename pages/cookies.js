import {
  StyledSpan,
  Grid,
  Typography,
  styled,
} from '../components/MuiComponents/mui-components';
import { Head, Image } from '../components/NextComponents/next-components';
import {
  contentful,
  BLOCKS,
  documentToReactComponents,
} from '../components/ThirdPartyLibrariesComponents/third-party';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

const StyledParagraph = styled('p')({});

function CookiesPage({ cookies: { items } }) {
  const {
    title,
    content: { content },
    images,
  } = items[0].fields;
  const hero = images[0].fields.file.url;
  const Text = ({ children }) => <StyledParagraph>{children}</StyledParagraph>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
  return (
    <>
      <Head>
        <title>Politica de cookies</title>
        <meta
          name="description"
          content="Politica de cookies a societatii TSE RISK CONSULTING"
        />
        <meta name="description" content="Cookies TSE RISK CONSULTING" />
        <meta
          name="description"
          content="Politica de cookies analize de risc la securitatea fizica Cluj"
        />
        <meta
          name="description"
          content="Politica de cookies analize de risc la securitatea fizica Romania"
        />
      </Head>
      <Grid container mb={10}>
        <Grid item container justifyContent="center" mt={-25}>
          <Typography variant="h4" fontWeight="bolder">
            {title}
            <StyledSpan>.</StyledSpan>
          </Typography>
        </Grid>
        <Grid item container mt={-20}>
          <Image
            src={hero}
            alt="hero"
            layout="fixed"
            width={300}
            height={300}
            loader={myLoader}
          />
        </Grid>
        <Grid item container p={4}>
          {content.map((c, i) => {
            return (
              <div key={`${c}-${i}`}>
                {documentToReactComponents(c, options)}
              </div>
            );
          })}
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
  const data = await client.getEntries({ content_type: 'cookiePage' });
  return { props: { cookies: data } };
}

export default CookiesPage;
