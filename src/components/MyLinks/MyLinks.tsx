import React from 'react';
import { Section } from '../Section';
import { links } from './MyLinksData';

const MyLinks: React.FC = () => (
  <Section title="Links">
    <ul className="grid gap-y-2 sm:grid-cols-2 sm:gap-x-4">
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="flex hover:underline"
            href={link.url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="my-auto">
              <div className="text-lg">{link.name}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export { MyLinks };
