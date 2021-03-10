import React, { PropsWithChildren } from 'react';

interface Props {
  title: string;
}

export const Section: React.FC<PropsWithChildren<Props>> = (props) => (
  <section id={props.title} className="mb-3">
    <h2 className="text-2xl font-bold mb-3 tracking-wider">{props.title}</h2>
    {props.children}
  </section>
);
