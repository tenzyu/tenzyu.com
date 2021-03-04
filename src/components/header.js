import React from "react"
import { Link } from "gatsby"


//data

const navs = [
  {
    name: "Blog",
    link: "/blog/",
  },
]

const Header = () => (
  <header class="flex sticky z-50 top-0 left-0 h-16 border-b opacity-90 bg-white mb-4 justify-around">
    <h1 class="my-auto ml-5 text-xl font-logo">
      <Link to={"/"}>tenzyu.com</Link>
    </h1>
    <nav class="my-auto mr-5 font-logo w-1/3">
      <ul class=" flex justify-around">
      {navs.map(nav => (
        <li><Link to={nav.link}>{nav.name}</Link></li>
          ))}
      </ul>
    </nav>
  </header>
)

export default Header