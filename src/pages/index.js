import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"


const firstLetterStyles = {
    borderBottom: "solid 3px",
    fontSize: "1.35em",
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

const links = [
  {
    image: "account-github.png",
    name: "GitHub",
    meta: "tenzyu",
    url: "https://github.com/tenzyu"
  },
  {
    image: "account-youtube.png",
    name: "YouTube",
    meta: "tenzyu",
    url: "https://www.youtube.com/channel/UCnlpsS3qhWUhNwd2yc_D4cw"
  },
  {
    image: "account-spotify.png",
    name: "Spotify",
    meta: "tenzyu",
    url: "https://open.spotify.com/user/kuv8bpy5ocbl8mwspxymi1six?si=6BAjQnRHQdan6qrCOkudTg"
  },
  {
    image: "account-twitter.png",
    name: "Twitter",
    meta: "@tenzyumasuda",
    url: "https://twitter.com/tenzyumasuda"
  },
  {
    image: "account-instagram.png",
    name: "Instagram",
    meta: "@tenzyumasuda",
    url: "https://instagram.com/tenzyumasuda"
  },
  {
    image: "account-market.png",
    name: "メルカリ",
    meta: "升田 天珠",
    url: "https://www.mercari.com/jp/u/694596800/"
  },
  {
    image: "account-discord.png",
    name: "Discord",
    meta: "Click to join our server.",
    url: "https://discord.gg/8DrwSxd"
  },
]

export default () => (
  <Layout>
    <Meta
      title="Homepage"
      desc="tenzyu.com is the website that has written my Accounts, Contents and Profile, hosted by me."
    />
    <h2 class="mx-4 sm:mx-auto sm:max-w-sm text-2xl font-bold mb-3"><span style={firstLetterStyles}>P</span>rofile</h2>
    <section id="profile" class="mx-4 sm:mx-auto sm:max-w-sm mb-6">
      <div id="bio" class="memo__profile flex mb-3">
        <div class="w-1/3 rounded-full">
        <Image filename="icon-me.png" alt="me"/>
        </div>
        <div class="ml-3 w-2/3">
          <h2 class="text-xl leading-loose h-2/5 text-gray-700 font-bold">Tenzyu Masuda</h2>
          <p class="text-sm font-light text-gray-600">a technical high schooler, Coder and Rubik's Cuber from Japan.</p>
        </div>
      </div>
      <div id="actions" class="flex space-x-4 mb-2">
        <a class="block w-1/2 py-1 font-light text-sm text-center border rounded-lg hover:bg-gray-100" href="mailto:tenzyu.off@gmail.com" target="_blank">E-MAIL</a>
        <a class="block w-1/2 py-1 font-light text-sm text-center border rounded-lg hover:bg-gray-100" href="https://www.paypal.me/masudatenzyu" target="_blank">DONATE</a>
      </div>
      <div id="facts">
        <ul class="grid grid-cols-2 gap-x-2">
        {facts.map(fact => (
          <li class="flex">
            <div class="w-1/5 mr-2 my-auto">
              <Image filename={fact.image} alt={fact.name} />
            </div>
            <div class="w-4/5 my-1">
              <div class="text-sm font-light text-gray-800">{fact.name}</div>
              <div class="text-xs font-thin text-gray-500">{fact.value}</div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </section>

    <h2 class="mx-4 sm:mx-auto sm:max-w-sm text-2xl font-bold mb-3"><span style={firstLetterStyles}>C</span>ontents</h2>
    <section id="contents" class="mx-4 sm:mx-auto sm:max-w-sm mb-6">
      <div class="mb-3">
        <h3>Repositories</h3>
        <ul class="space-y-1">
          <li>
            <a href="https://github.com/tenzyu/tenzyu.com" target="_blank">
              <img src="https://gh-card.dev/repos/tenzyu/tenzyu.com.svg" alt="github: tenzyu.com" />
            </a>
          </li>
          <li>
            <a href="https://github.com/tenzyu/simple-thread" target="_blank">
              <img src="https://gh-card.dev/repos/tenzyu/simple-thread.svg" alt="github: simple-thread" /></a>
          </li>
          <li>
            <a href="https://github.com/mii-group/Wikipedian" target="_blank">
              <img src="https://gh-card.dev/repos/mii-group/Wikipedian.svg" alt="github: Wikipedian" /></a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Movies</h3>
        <ul class="space-y-1">
          <li>
            <iframe class="min-w-full min-h-full" loading="lazy" alt="youtube: Rubik's Cube" src="https://www.youtube.com/embed/videoseries?list=PLoiZYW6bTQE_LCU-eEJWUeSMY17_D_sLz" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li>
            <iframe class="min-w-full min-h-full" loading="lazy" alt="youtube: Minecraft" src="https://www.youtube.com/embed/UC81sz5kWOM?list=PLKX8chi9DIBmv8crb-9WEsO744LJ79YsR" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
        </ul>
      </div>
    </section>

    <h2 class="mx-4 sm:mx-auto sm:max-w-sm text-2xl font-bold mb-3"><span style={firstLetterStyles}>L</span>inks</h2>
    <section id="links" class="mx-4 sm:mx-auto sm:max-w-sm mb-6">
    <ul class="space-y-1">
        {links.map(link => (
          <li class="border rounded-lg hover:bg-gray-100">
            <a class="flex" href={link.url} target="_blank">
              <div class="w-1/5 mr-2 my-auto p-1">
                <Image filename={link.image} alt={link.name} />
              </div>
              <div class="w-4/5 my-1">
                <div class="text-lg font-light text-gray-800">{link.name}</div>
                <div class="text-md font-thin text-gray-500">{link.meta}</div>
              </div>
            </a>
          </li>
        ))}
        </ul>
    </section>
  </Layout>
)