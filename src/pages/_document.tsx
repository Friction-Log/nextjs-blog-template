import Document, { Head, Html, Main, NextScript } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* TODO: See https://plausible.io/docs/plausible-script */}
          <script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
        </Head>
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
