import React from "react";
import Section from "./section";

const links = [
  {
    name: "GitHub",
    meta: "tenzyu",
    url: "https://github.com/tenzyu",
  },
  {
    name: "YouTube",
    meta: "tenzyu",
    url: "https://www.youtube.com/channel/UCnlpsS3qhWUhNwd2yc_D4cw",
  },
  {
    name: "Spotify",
    meta: "tenzyu",
    url:
      "https://open.spotify.com/user/kuv8bpy5ocbl8mwspxymi1six?si=6BAjQnRHQdan6qrCOkudTg",
  },
  {
    name: "Twitter",
    meta: "@tenzyumasuda",
    url: "https://twitter.com/tenzyumasuda",
  },
  {
    name: "Instagram",
    meta: "@tenzyumasuda",
    url: "https://instagram.com/tenzyumasuda",
  },
  {
    name: "Mii Community",
    meta: "Join our place to talk.",
    url: "https://mii.community/",
  },
  {
    name: "Amazon WishList",
    meta: "Jump to my wishlist.",
    url: "https://www.amazon.jp/hz/wishlist/ls/34YAIK53SZJQD?ref_=wl_share",
  },
  {
    name: "Google Search",
    meta: 'Search for "tenzyu masuda".',
    url: "https://www.google.com/search?q=tenzyu+masuda",
  },
];

const Links = () => (
  <Section title="Links">
    <ul class="space-y-1 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
      {links.map((link) => (
        <li>
          <a
            class="flex hover:underline"
            href={link.url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div class="my-auto">
              <div class="text-lg">{link.name}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Links;
