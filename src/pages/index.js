import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta
      title="Homepage"
      desc="tenzyu.com is the website that has written my Accounts, Contents and Profile, hosted by me."
    />
    <div>
      <p>writing</p>
      <Image filename="icon-me.jpg" alt="me"/>
    </div>
  </Layout>
)