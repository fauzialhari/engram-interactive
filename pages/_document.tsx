import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-mainbg text-white text-2xl overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}