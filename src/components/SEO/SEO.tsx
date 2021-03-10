import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const SEO: React.FC<Props> = ({ title, description, image, url }) => {
  const myTitle = `${title} - tenzyu.com`;
  const myDescription = `${description} - tenzyu.com`;
  const myImage = `https://tenzyu.com/img/${image}`;

  return (
    <Head>
      <title>{myTitle}</title>
      <meta property="og:title" content={myTitle} />
      <meta property="og:site_name" content={myTitle} />
      <meta name="description" content={myDescription} />
      <meta property="og:description" content={myDescription} />
      <meta property="og:image" content={myImage} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tenzyumasuda" />
      <meta name="apple-mobile-web-app-title" content="tenzyu.com" />
    </Head>
  );
};
