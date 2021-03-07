import React from 'react';
import Image from 'next/image';
import { facts, learnings } from './MyProfileData';
import styles from './MyProfile.module.scss';
import { Section } from '../Section';

const MyProfile: React.FC = () => (
  <Section title="Profile">
    <div id="bio">
      <div className="flex justify-between">
        <div id="avatar">
          <div className="rounded-full w-18 sm:w-32">
            <Image src={'/img/icon-me.png'} alt="me" width={128} height={128} />
          </div>
          <h1 className="text-2xl font-bold">tenzyu</h1>
        </div>
        <div id="actions" className="tracking-wider">
          <div className="space-y-2">
            <a
              className={`${styles['my-action-button']} px-8 sm:px-24`}
              href="mailto:tenzyu.off@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              EMAIL
            </a>
            <a
              className={`${styles['my-action-button']} px-8 sm:px-24`}
              href="https://open.mii.community/patreon"
              rel="noreferrer noopener"
              target="_blank"
            >
              PATREON
            </a>
          </div>
        </div>
      </div>
      <div className="my-4 max-w-screen-sm">
        <p>
          升田 天珠, Tenzyu Masuda | Coding, Programming |{' '}
          <a
            className="text-blue-500"
            href="https://twitter.com/search?q=%23みぃコミュニティ&src=hashtag_click"
            rel="noreferrer noopener"
            target="_blank"
          >
            #みぃコミュニティ
          </a>{' '}
          ☞{' '}
          <a
            className="text-blue-500"
            href="https://mii.community/"
            rel="noreferrer noopener"
            target="_blank"
          >
            mii.community
          </a>{' '}
          | Recently I studying English. | I&apos;m lovin&apos;{' '}
          <a
            className="text-blue-500"
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
      <ul className="grid grid-cols-2 gap-x-4">
        {facts.map((fact) => (
          <li className="flex mb-2" key={fact.name}>
            <div className="my-auto">
              <div className="font-medium -mb-1">{fact.name}</div>
              <div className="font-light">{fact.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div id="learnings">
      <div className="font-medium mb-1">Learning</div>
      <ul className="flex overflow-x-scroll space-x-2 pb-3">
        {learnings.map((learning) => (
          <li className="border border-gray-300 rounded-xl" key={learning.name}>
            <span className="flex w-max items-center py-1 px-3 font-light">
              {learning.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export { MyProfile };
