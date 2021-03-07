import React from "react";

const Section = (props) => {
  const title = props.title;
  return (
    <section id={title} class="mb-3">
      <h2 class="text-2xl font-bold mb-3 tracking-wider">{title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
