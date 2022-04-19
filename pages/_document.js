import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionCache from '../lib/create-emotion-cache';
import createEmotionServer from '@emotion/server/create-instance';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ro">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Analize de risc la securitatea fizica Cluj"
          />
          <meta
            name="description"
            content="Analize de risc la securitatea fizica Romania"
          />
          <meta name="description" content="Evaluare de risc" />
          <meta name="description" content="Risc Cluj" />
          <meta name="description" content="Risc Romania" />
          <meta
            name="description"
            content="Legea nr. 333/2003 si HG 1002/2015"
          />
          <meta name="description" content="Raport de securitate Cluj" />
          <meta
            name="description"
            content="Ce este analiza de risc la securitatea fizica?"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default MyDocument;
