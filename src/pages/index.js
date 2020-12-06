import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"
import Section from "../components/section" 

// styles
const youtubeStyles = {
    paddingTop: "56.25%",
  }

// data
const facts = [
  {
    image: "fact-gender.png",
    name: "Gender",
    value: "He / Him",
  },
  {
    image: "fact-flag.png",
    name: "Nation",
    value: "Japan",
  },
  {
    image: "fact-tag.png",
    name: "NickName",
    value: "黒 / Kuro",
  },
  {
    image: "fact-laptop.png",
    name: "Laptop",
    value: "MacBook Pro",
  },
  {
    image: "fact-coffee.png",
    name: "Coffee",
    value: "Cappuccino",
  },
  {
    image: "fact-basketball.png",
    name: "Sport",
    value: "Basketball",
  },
]

const youtubes = [
  {
    alt: "youtube: Vlog",
    src: "https://www.youtube.com/embed/videoseries?list=PLoiZYW6bTQE-aC2yH_gZzSMUEClyvLq2g",
  },
  {
    alt: "youtube: Rubik's Cube",
    src: "https://www.youtube.com/embed/videoseries?list=PLoiZYW6bTQE_LCU-eEJWUeSMY17_D_sLz",
  },
  {
    alt: "youtube: Minecraft",
    src: "https://www.youtube.com/embed/UC81sz5kWOM?list=PLKX8chi9DIBmv8crb-9WEsO744LJ79YsR",
  },
]

const links = [
  {
    image: "link-github.png",
    name: "GitHub",
    meta: "tenzyu",
    url: "https://github.com/tenzyu"
  },
  {
    image: "link-youtube.png",
    name: "YouTube",
    meta: "tenzyu",
    url: "https://www.youtube.com/channel/UCnlpsS3qhWUhNwd2yc_D4cw"
  },
  {
    image: "link-spotify.png",
    name: "Spotify",
    meta: "tenzyu",
    url: "https://open.spotify.com/user/kuv8bpy5ocbl8mwspxymi1six?si=6BAjQnRHQdan6qrCOkudTg"
  },
  {
    image: "link-twitter.png",
    name: "Twitter",
    meta: "@tenzyumasuda",
    url: "https://twitter.com/tenzyumasuda"
  },
  {
    image: "link-instagram.png",
    name: "Instagram",
    meta: "@tenzyumasuda",
    url: "https://instagram.com/tenzyumasuda"
  },
  {
    image: "link-link.png",
    name: "Wantedly",
    meta: "升田 天珠",
    url: "https://www.wantedly.com/users/144791642"
  },
  {
    image: "link-market.png",
    name: "メルカリ",
    meta: "升田 天珠",
    url: "https://www.mercari.com/jp/u/694596800/"
  },
  {
    image: "link-discord.png",
    name: "Discord",
    meta: "Click to join our server.",
    url: "https://discord.gg/8DrwSxd"
  },
  {
    image: "link-wishlist.png",
    name: "Amazon",
    meta: "Click to jump to my wishlist",
    url: "https://www.amazon.jp/hz/wishlist/ls/34YAIK53SZJQD?ref_=wl_share"
  },
]

export default () => (
  <Layout>
    <Meta
      title="Homepage"
      desc="tenzyu.com is the website that has written my Accounts, Contents and Profile, hosted by me."
    />
    
    <Section title="Profile">
      <div id="bio" class="flex mb-3">
        <div class="w-1/3 rounded-full">
        <Image filename="icon-me.png" alt="me"/>
        </div>
        <div class="ml-3 w-2/3 pt-3">
          <h3 class="text-xl leading-loose h-2/5 text-gray-700 font-bold">Tenzyu Masuda</h3>
          <p class="text-sm font-light text-gray-600">a technical high schooler, Coder and Rubik's Cuber from Japan.</p>
        </div>
      </div>
      <div id="actions" class="flex space-x-4 mb-2">
        <a class="block w-1/2 py-2 font-light text-sm text-center border rounded-lg hover:bg-gray-100" href="mailto:tenzyu.off@gmail.com" rel="noreferrer noopener" target="_blank">EMAIL</a>
        <a class="block w-1/2 py-2 font-light text-sm text-center border rounded-lg hover:bg-gray-100" href="https://www.paypal.me/masudatenzyu" rel="noreferrer noopener" target="_blank">DONATE</a>
      </div>
      <div id="facts">
        <ul class="grid grid-cols-2 gap-x-4">
        {facts.map(fact => (
          <li class="flex mb-2">
            <div class="w-1/5 my-1 mr-2">
              <Image filename={fact.image} alt={fact.name} />
            </div>
            <div class="w-4/5 my-auto">
              <div class="text-sm text-gray-800">{fact.name}</div>
              <div class="text-xs font-light text-gray-600">{fact.value}</div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </Section>

    <Section title="Contents">
      <div class="mb-3">
        <h3 class="text-lg mb-2">Repositories</h3>
        <ul class="space-y-2 mb-3">
          <li>
            <a href="https://github.com/tenzyu/tenzyu.com" rel="noreferrer noopener" target="_blank">
              <img src="https://gh-card.dev/repos/tenzyu/tenzyu.com.svg" alt="github: tenzyu.com" />
            </a>
          </li>
          <li>
            <a href="https://github.com/tenzyu/simple-thread" rel="noreferrer noopener" target="_blank">
              <img src="https://gh-card.dev/repos/tenzyu/simple-thread.svg" alt="github: simple-thread" /></a>
          </li>
          <li>
            <a href="https://github.com/mii-group/Wikipedian" rel="noreferrer noopener" target="_blank">
              <img src="https://gh-card.dev/repos/mii-group/Wikipedian.svg" alt="github: Wikipedian" /></a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg mb-2">Movies</h3>
        <ul class="space-y-2">
        {youtubes.map(youtube => (
          <li class="overflow-hidden h-0 relative w-full" style={youtubeStyles}>
            <iframe title={youtube.alt} class="h-full left-0 absolute top-0 w-full rounded-lg" loading="lazy" alt={youtube.alt} src={youtube.src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
        ))}
        </ul>
      </div>
    </Section>

    <Section title="Links">
    <ul class="space-y-1">
        {links.map(link => (
          <li class="border rounded-lg border-gray-300 hover:bg-gray-100">
            <a class="flex" href={link.url} rel="noreferrer noopener" target="_blank">
              <div class="w-1/5 p-2.5">
                <Image filename={link.image} alt={link.name} />
              </div>
              <div class="w-4/5 my-auto">
                <div class="text-lg text-gray-800 -mb-1">{link.name}</div>
                <div class="text-md font-light text-gray-600">{link.meta}</div>
              </div>
            </a>
          </li>
        ))}
        </ul>
    </Section>
  </Layout>
)