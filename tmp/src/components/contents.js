import React from "react";
import Section from "./section";

const youtubeStyles = {
  paddingTop: "56.25%",
};

const youtubes = [
  {
    alt: "youtube: Vlog",
    src:
      "https://www.youtube.com/embed/videoseries?list=PLoiZYW6bTQE-aC2yH_gZzSMUEClyvLq2g",
  },
  {
    alt: "youtube: Rubik's Cube",
    src:
      "https://www.youtube.com/embed/videoseries?list=PLoiZYW6bTQE_LCU-eEJWUeSMY17_D_sLz",
  },
  {
    alt: "youtube: Minecraft",
    src:
      "https://www.youtube.com/embed/UC81sz5kWOM?list=PLKX8chi9DIBmv8crb-9WEsO744LJ79YsR",
  },
];

const repositories = [
  { username: "tenzyu", repo: "tenzyu.com" },
  { username: "mii-community", repo: "mii.community" },
  { username: "tenzyu", repo: "discord-bot-template" },
  { username: "mii-community", repo: "mii" },
  { username: "tenzyu", repo: "simple-controller" },
  { username: "mii-community", repo: "Wikipedian" },
];

const Contents = () => (
  <Section title="Contents">
    <div class="mb-3">
      <h3 class="text-lg mb-2">Repositories</h3>
      <ul class="space-y-2 mb-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
        {repositories.map((repository) => (
          <li class="max-w-sm">
            <a
              href={`https://github.com/${repository.username}/${repository.repo}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                class="w-full"
                src={`https://github-readme-stats.vercel.app/api/pin/?theme=midnight-purple&username=${repository.username}&repo=${repository.repo}`}
                alt={`github: ${repository.repo}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 class="text-lg mb-2">Movies</h3>
      <ul class="space-y-2 max-w-sm sm:max-w-full sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
        {youtubes.map((youtube) => (
          <li class="overflow-hidden h-0 relative w-full" style={youtubeStyles}>
            <iframe
              title={youtube.alt}
              class="h-full left-0 absolute top-0 w-full rounded-lg"
              loading="lazy"
              alt={youtube.alt}
              src={youtube.src}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Contents;
