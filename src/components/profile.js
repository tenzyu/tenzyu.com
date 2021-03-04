import React from "react";
import Section from "./section";
import Image from "./image";

const facts = [
  {
    name: "Pronouns",
    value: "he/him",
  },
  {
    name: "Nation",
    value: "Japan",
  },
  {
    name: "Nickname",
    value: "Amazu / Kuro",
  },
  {
    name: "Workstation",
    value: "MacBook Pro",
  },
  {
    name: "Specialty",
    value: "Rubik's Cube",
  },
  {
    name: "Birthday",
    value: "April 25, 2002",
  },
];

const tags = [
  { name: "HTML5" },
  { name: "TailwindCSS" },
  { name: "CSS3" },
  { name: "Python3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Nuxt.js" },
  { name: "Vue.js" },
  { name: "Gatsby" },
  { name: "React" },
];

const Profile = () => (
  <Section title="Profile">
    <div id="bio">
      <div class="flex justify-between">
        <div id="avatar">
          <Image
            className="rounded-full w-18"
            filename="icon-me.png"
            alt="me"
          />
          <h1 class="text-2xl font-bold">tenzyu</h1>
        </div>
        <div id="actions" class="">
          <div class="space-y-2">
            <a
              class="my-action-button"
              href="mailto:tenzyu.off@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              EMAIL
            </a>
            <a
              class="my-action-button"
              href="https://open.mii.community/patreon"
              rel="noreferrer noopener"
              target="_blank"
            >
              PATREON
            </a>
          </div>
        </div>
      </div>
      <div class="my-4">
        <p>
          升田 天珠, Tenzyu Masuda | Coding, Programming |{" "}
          <a
            class="text-blue-600"
            href="https://twitter.com/search?q=%23みぃコミュニティ&src=hashtag_click"
            rel="noreferrer noopener"
            target="_blank"
          >
            #みぃコミュニティ
          </a>{" "}
          ☞{" "}
          <a
            class="text-blue-600"
            href="https://mii.community/"
            rel="noreferrer noopener"
            target="_blank"
          >
            mii.community
          </a>{" "}
          | Recently I studying English. | I'm lovin'{" "}
          <a
            class="text-blue-600"
            href="https://twitter.com/search?q=%23candyfoxx&src=hashtag_click"
            rel="noreferrer noopener"
            target="_blank"
          >
            #candyfoxx
          </a>
        </p>
      </div>
    </div>
    <div id="facts">
      <ul class="grid grid-cols-2 gap-x-4  sm:grid-cols-3 sm:gap-x-0">
        {facts.map((fact) => (
          <li class="flex mb-2">
            <div class="my-auto">
              <div class="font-medium">{fact.name}</div>
              <div class="font-light">{fact.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div id="tags">
      <div class="font-medium mb-1">Learning</div>
      <ul class="flex overflow-x-auto space-x-2 pb-3">
        {tags.map((tag) => (
          <li class="border border-gray-300 rounded-xl">
            <span class="flex items-center py-1 px-3 font-light">
              {tag.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Profile;
