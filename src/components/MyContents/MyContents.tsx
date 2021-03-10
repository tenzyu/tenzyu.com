import React from 'react';
import { Section } from '../Section';
import { repositories, youtubes } from './MyContentsData';

export const MyContents: React.FC = () => (
  <Section title="Contents">
    <div className="mb-3">
      <h3 className="text-lg mb-2">Repositories</h3>
      <ul className="space-y-2 mb-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
        {repositories.map((repository) => (
          <li className="max-w-sm" key={repository.repo}>
            <a
              href={`https://github.com/${repository.username}/${repository.repo}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                className="w-full"
                src={`https://github-readme-stats.vercel.app/api/pin/?theme=midnight-purple&username=${repository.username}&repo=${repository.repo}`}
                alt={`github: ${repository.repo}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-lg mb-2">Movies</h3>
      <ul className="space-y-2 max-w-sm sm:max-w-full sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2">
        {youtubes.map((youtube) => (
          <li
            className="overflow-hidden h-0 relative w-full"
            style={{
              paddingTop: '56.25%',
            }}
            key={youtube.src}
          >
            <iframe
              title={youtube.alt}
              className="h-full left-0 absolute top-0 w-full rounded-lg"
              loading="lazy"
              src={youtube.src}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
