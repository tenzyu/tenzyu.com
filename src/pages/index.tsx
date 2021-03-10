import Head from 'next/head';
import React from 'react';
import { MyContents } from '../components/MyContents';
import { MyHistories } from '../components/MyHistories';
import { MyLinks } from '../components/MyLinks';
import { MyProfile } from '../components/MyProfile';

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>Home - tenzyu.com</title>
    </Head>
    <MyProfile />
    <MyContents />
    <MyLinks />
    <MyHistories />
  </>
);

export default IndexPage;
