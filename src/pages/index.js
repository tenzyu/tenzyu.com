import React from "react";
import Layout from "../layouts/default";
import Meta from "../components/meta";
import Profile from "../components/profile";
import Contents from "../components/contents";
import Histories from "../components/histories";
import Links from "../components/links";

const IndexPage = () => (
  <Layout>
    <Meta
      title="Home"
      desc="tenzyu.com is the personal website of Tenzyu Masuda."
    />
    <Profile />
    <Contents />
    <Links />
    <Histories />
  </Layout>
);
export default IndexPage;
