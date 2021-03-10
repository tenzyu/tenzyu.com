import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { TheFooter } from '../components/TheFooter';
import { TheHeader } from '../components/TheHeader';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
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
    <main
      style={{
        minHeight: 'calc(100vh - 160px + 1px)',
      }}
      className="container mx-auto max-w-screen-md px-4"
    >
      <Component {...pageProps} />
    </main>
    <TheFooter />
  </>
);

export default MyApp;
