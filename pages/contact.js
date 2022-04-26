import map from '../public/images/screenshot.png';
import classes from '../styles/contact.module.css';
import {
  StyledSpan,
  StyledButton,
} from '../components/StyledComponents/styled-components';
import Image from 'next/image';
import Head from 'next/head';
import * as contentful from 'contentful';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import ContactThanksAnimation from '../components/ContactThanks/contact-thanks';
import ContactInfo from '../components/ContactInfo/contact-info';
import { useState } from 'react';

const myLoader = ({ src }) => {
  return `https:${src}`;
};

function ContactPage({ contact: { items } }) {
  const { title, images } = items[0].fields;
  const hero = images[0].fields.file.url;
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    message: '',
    showAlert: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <Head>
        <title>Analiza de risc</title>
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
      <Grid container>
        <Grid item container>
          <Grid item container justifyContent="center" mt={-25}>
            <Typography variant="h4" align="center" fontWeight="bolder">
              {title}
              <StyledSpan>.</StyledSpan>
            </Typography>
          </Grid>
          <Grid item container direction="row" mt={-25}>
            <Grid item container xs={12} sm={6} justifyContent="center">
              <Image
                src={hero}
                alt="hero"
                width={200}
                height={200}
                layout="fixed"
                loader={myLoader}
                priority
              />
            </Grid>
            <Grid item container xs={12} sm={6} justifyContent="center">
              <ContactThanksAnimation />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container mt={5} mb={15}>
          <Grid
            item
            container
            xs={12}
            lg={6}
            justifyContent="center"
            spacing={4}
          >
            <Grid item container justifyContent="center">
              <Typography variant="h5" fontWeight="bolder" align="center">
                Multumim pentru interesul acordat<StyledSpan>!</StyledSpan>
              </Typography>
            </Grid>
            <Grid item container>
              <ContactInfo />
            </Grid>
            <Grid item container justifyContent="center">
              <Image
                src={map}
                className={classes.map}
                alt="map"
                layout="fixed"
                width={300}
                height={300}
                priority
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            lg={6}
            justifyContent="center"
            mt={7}
            mb={7}
          >
            <Grid item container justifyContent="center">
              <Typography variant="h5" fontWeight="bolder" align="center">
                Contacteaza-ne<StyledSpan>!</StyledSpan>
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Box
                component="form"
                name="contact"
                sx={{
                  width: '70%',
                }}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/success"
              >
                <Input type="hidden" name="form-name" value="contact" />
                <InputLabel className={classes.hiddenField}>
                  Robot, please fill this form so I can mark you as spam!
                  <Input name="bot-field" />
                </InputLabel>
                <FormControl fullWidth margin="dense">
                  <InputLabel htmlFor="nume">Nume</InputLabel>
                  <Input
                    type="text"
                    name="nume"
                    id="nume"
                    value={formData.nume}
                    onChange={handleChange}
                    required
                    autoComplete="false"
                  />
                </FormControl>
                <FormControl fullWidth margin="dense">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    required
                    autoComplete="false"
                  />
                </FormControl>
                <FormControl fullWidth margin="dense">
                  <InputLabel htmlFor="message">Mesaj</InputLabel>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    autoComplete="false"
                  />
                </FormControl>
                <FormControl fullWidth margin="dense">
                  <StyledButton
                    type="submit"
                    sx={{ width: '40%', alignSelf: 'center' }}
                  >
                    Trimite
                  </StyledButton>
                </FormControl>
              </Box>
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
  const data = await client.getEntries({ content_type: 'contactPage' });
  return { props: { contact: data } };
}

export default ContactPage;
