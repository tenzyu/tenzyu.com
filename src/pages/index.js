import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"


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

export default () => (
  <Layout>
    <Meta
      title="Homepage"
      desc="tenzyu.com is the website that has written my Accounts, Contents and Profile, hosted by me."
    />
    <section id="profile" class="mx-4 sm:mx-auto sm:max-w-sm">
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
        <a class="block w-1/2 py-1 font-light text-sm text-center border rounded-md hover:bg-gray-100" href="mailto:tenzyu.off@gmail.com" target="_blank">E-MAIL</a>
        <a class="block w-1/2 py-1 font-light text-sm text-center border rounded-md hover:bg-gray-100" href="https://www.paypal.me/masudatenzyu" target="_blank">DONATE</a>
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
  </Layout>
)