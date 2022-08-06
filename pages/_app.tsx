import "../styles/globals.css";
import "../styles/style.min.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fractured Core</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
