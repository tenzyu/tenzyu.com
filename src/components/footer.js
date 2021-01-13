import React from "react"

const createdYear = "2020"
const currentYear = new Date().getFullYear()
const authorName = "Tenzyu Masuda"
const copyright = `© ${createdYear} - ${currentYear} ${authorName}`

export default () => (
  <footer class="mt-4 py-8 flex justify-center border-t">
    <p class="font-thin text-xs">{copyright}</p>
  </footer>
)