import { StyledSpan } from '../components/StyledComponents/styled-components';
import Head from 'next/head';
import * as contentful from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

const StyledParagraph = styled('p')({});

function ConfidentialitatePage({ confidentialitate: { items } }) {
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
        <title>Politica de confidentialitate</title>
        <meta
          name="description"
          content="Politica de confidentialitate a societatii TSE RISK CONSULTING"
        />
        <meta
          name="description"
          content="Aceasta pagina prezinta informatii relevante privind politica de confidentialitate a societatii WEBNIAC SRL"
        />
      </Head>
      <Grid container mb={10}>
        <Grid item container justifyContent="center" mt={-25}>
          <Typography variant="h4" align="center" fontWeight="bolder">
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
            priority
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
  const data = await client.getEntries({
    content_type: 'confidentialitatePage',
  });
  return { props: { confidentialitate: data } };
}

export default ConfidentialitatePage;
