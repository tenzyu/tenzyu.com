import { AppProps } from 'next/app';
import Head from 'next/head';
import 'sanitize.css';
import '../styles/globals.css';
import { TheHeader } from '../components/TheHeader';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <TheHeader />
    <Component {...pageProps} />
  </>
);

export default MyApp;
