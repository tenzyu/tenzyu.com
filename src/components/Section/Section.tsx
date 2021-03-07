import React, { PropsWithChildren } from 'react';

type Props = {
  title: string;
};

const Section: React.FC<PropsWithChildren<Props>> = (props) => {
  const title = props.title;
  return (
    <section id={title} className="mb-3">
      <h2 className="text-2xl font-bold mb-3 tracking-wider">{title}</h2>
      {props.children}
    </section>
  );
};

export { Section };
