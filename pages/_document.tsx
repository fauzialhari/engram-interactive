import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl">
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
        </Head>
        <body className="bg-mainbg text-white lg:text-lg overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
