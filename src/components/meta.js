import React from "react"
import { Helmet } from "react-helmet"

const Meta = props => {
    const baseTitle = "tenzyu.com"
    const baseDesc = ""
    const title = props.title ? `${props.title} - ${baseTitle}` : baseTitle
    const description = props.desc || baseDesc
    const image = require("../images/icon-me.png")

    return (
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }

  export default Meta