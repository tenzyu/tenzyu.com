import React from "react"
import '../styles/global.css'
import Header from "../components/header"
import Footer from "../components/footer"

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default DefaultLayout