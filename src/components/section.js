import React from "react"
import "../styles/moreStyles.module.css"

export default props => {
    const title = props.title;
    return (
        <section id={title} class="container mx-auto px-4 mb-3 lg:w-1/3">
            <h2 class="text-2xl font-bold mb-3 tracking-wider">{title}</h2>
            {props.children}
        </section>
    )
  }