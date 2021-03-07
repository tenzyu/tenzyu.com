import React from 'react';
import { Section } from '../Section';
import Image from 'next/image';
import { histories } from './MyHistoriesData';

const MyHistories: React.FC = () => (
  <Section title="History">
    <div className="mb-3">
      <ul className="space-y-3">
        {histories.map((history) => (
          <li className="flex" key={history.name}>
            <div className="rounded-full border border-gray-400 min-w-12 w-12 h-12 flex justify-center items-center mr-2">
              <Image
                src={`/img/history-${history.filename}`}
                alt={history.filename}
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center">
              <div>
                <h1 className="text-lg">{history.name}</h1>
                <div>
                  {history.from} - {history.until}
                  {'　'}
                  {history.period}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export { MyHistories };
