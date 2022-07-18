import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
        </Head>
        <body className="bg-mainbg text-white lg:text-2xl overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
