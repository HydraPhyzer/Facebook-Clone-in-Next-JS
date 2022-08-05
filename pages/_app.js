import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap" rel="stylesheet" />
      </Head>

      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
