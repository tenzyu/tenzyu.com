import React from "react";
import { Link } from "gatsby";
import Image from "./image";

const Header = () => (
  <header class="flex sticky z-50 top-0 left-0 h-16 mb-4">
    <div class="w-full container mx-auto max-w-screen-lg items-center flex justify-between">
      <div>
        <Link to={"/"}>
          <Image className="w-16 inverted" filename="cat.png" alt="cat" />
        </Link>
      </div>
      <nav class="pr-6 text-xl">
        <Link to={"/posts/"}>Posts</Link>
      </nav>
    </div>
  </header>
);

export default Header;
