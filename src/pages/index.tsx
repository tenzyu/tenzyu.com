import React from 'react';
import { MyContents } from '../components/MyContents';
import { MyHistories } from '../components/MyHistories';
import { MyLinks } from '../components/MyLinks';
import { MyProfile } from '../components/MyProfile';
import { SEO } from '../components/SEO';
const IndexPage: React.FC = () => (
  <>
    <SEO
      title="Home"
      description="My website"
      image="icon-me.png"
      url="https://tenzyu.com/"
    />
    <MyProfile />
    <MyContents />
    <MyLinks />
    <MyHistories />
  </>
);

export default IndexPage;
