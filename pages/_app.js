import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="Facebook.webp" type="image/x-icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
