import React from "react"
import "../styles/moreStyles.module.css"

export default props => {
    const title = props.title;
    return (
        <section id={title} class="mx-4 sm:mx-auto sm:max-w-sm mb-6">
            <h2 class="sm:mx-auto sm:max-w-sm text-2xl font-bold mb-3 tracking-wider">{title}</h2>
            {props.children}
        </section>
    )
  }