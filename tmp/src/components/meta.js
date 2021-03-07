import React from "react";
import { Helmet } from "react-helmet";
import OgpImage from "../images/icon-me.png";

const Meta = (props) => {
  const baseTitle = "tenzyu.com";
  const baseDesc = "";
  const title = props.title ? `${props.title} - ${baseTitle}` : baseTitle;
  const description = props.desc || baseDesc;
  const image = `https://tenzyu.com${OgpImage}`;

  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="og:type" content="website" />
      <meta property="apple-mobile-web-app-title" content="tenzyu.com" />
    </Helmet>
  );
};

export default Meta;
