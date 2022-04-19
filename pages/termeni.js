import {
  StyledSpan,
  Grid,
  styled,
  Typography,
} from '../components/MuiComponents/mui-components';
import { Image, Head } from '../components/NextComponents/next-components';
import {
  contentful,
  BLOCKS,
  documentToReactComponents,
} from '../components/ThirdPartyLibrariesComponents/third-party';

const myLoader = ({ src }) => {
  return `https:${src}`;
};
const StyledParagraph = styled('p')({});

function TermeniPage({ termeni: { items } }) {
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
        <title>Termeni si conditii TSE RISK CONSULTING</title>
        <meta
          name="description"
          content="Termeni si conditii TSE RISK CONSULTING"
        />
        <meta
          name="description"
          content="Termeni si conditii realizare analize de risc la securitatea fizica Cluj"
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
            priority
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
  const data = await client.getEntries({ content_type: 'termeniPage' });
  return { props: { termeni: data } };
}

export default TermeniPage;
