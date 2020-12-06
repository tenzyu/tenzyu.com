import React from "react"
import "../styles/moreStyles.module.css"

export default props => {
    const title = props.title;
    return (
        <section id={title} class="mx-4 max-w-screen-md mb-6 md:mx-auto">
            <h2 class="max-w-screen-md text-2xl font-bold mb-3 tracking-wider md:mx-auto">{title}</h2>
            {props.children}
        </section>
    )
  }