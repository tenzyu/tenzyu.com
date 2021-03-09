import { AppProps } from 'next/app';
import Head from 'next/head';
import { TheFooter } from '../components/TheFooter';
import { TheHeader } from '../components/TheHeader';
import '../styles/globals.css';

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
    <div style={Styles} className="container mx-auto max-w-screen-md px-4">
      <Component {...pageProps} />
    </div>
    <TheFooter />
  </>
);

export default MyApp;

const Styles = {
  /* 
    160px は header + footer
    1px は スクロールバーがあるときとないときの横幅のズレをなくすため
    */
  minHeight: 'calc(100vh - 160px + 1px)',
};
