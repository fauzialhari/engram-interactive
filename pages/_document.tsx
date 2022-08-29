import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="bg-mainbg text-white lg:text-lg overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
