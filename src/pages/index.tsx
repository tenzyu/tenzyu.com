import React from 'react';
import { MyProfile } from '../components/MyProfile';
import { MyContents } from '../components/MyContents';
import { MyLinks } from '../components/MyLinks';
import { MyHistories } from '../components/MyHistories';

const IndexPage: React.FC = () => (
  <div>
    <MyProfile />
    <MyContents />
    <MyLinks />
    <MyHistories />
  </div>
);

export default IndexPage;
