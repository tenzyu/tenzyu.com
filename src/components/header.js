import React from "react"
import { Link } from "gatsby"

const moreStyles = {
  fontFamily: "arial black, Helvetica Neue, sans-serif",
}

export default () => (
  <header style={moreStyles} class="flex sticky z-50 top-0 left-0 items-center h-16 border-b opacity-90 bg-white">
      <Link to={"/"}><div class="mt-1 mb-2 text-2xl ml-6">tenzyu.com</div></Link>
  </header>
)