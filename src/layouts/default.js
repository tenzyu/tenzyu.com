import React from "react"
import '../utils/global.css'
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)