import React from "react";
import Layout from "../layouts/default";
import Meta from "../components/meta";
import Profile from "../components/profile";
import Contents from "../components/contents";
import Links from "../components/links";

const IndexPage = () => (
  <Layout>
    <Meta
      title="Homepage"
      desc="tenzyu.com is the website that has written my Accounts, Contents and Profile, hosted by me."
    />
    <Profile />
    <Contents />
    <Links />
  </Layout>
);
export default IndexPage;
