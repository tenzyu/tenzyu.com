import React from 'react';
import { MyContents } from '../components/MyContents';
import { MyHistories } from '../components/MyHistories';
import { MyLinks } from '../components/MyLinks';
import { MyProfile } from '../components/MyProfile';

const IndexPage: React.FC = () => (
  <>
    <MyProfile />
    <MyContents />
    <MyLinks />
    <MyHistories />
  </>
);

export default IndexPage;
