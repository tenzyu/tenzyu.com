import React from "react";
import { Link } from "gatsby";
import Image from "./image";
const navs = [
  {
    name: "Blog",
    link: "/blog/",
  },
];

const Header = () => (
  <header class="flex sticky z-50 top-0 left-0 h-16 mb-4">
    <div class="w-full container max-w-screen-lg mx-auto items-center flex">
      <div class="left-0 w-2/3">
        <Link to={"/"}>
          <Image className="w-16 inverted" filename="cat.png" alt="cat" />
        </Link>
      </div>
      <nav>
        <ul class="flex text-xl justify-around">
          {navs.map((nav) => (
            <li>
              <Link to={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
