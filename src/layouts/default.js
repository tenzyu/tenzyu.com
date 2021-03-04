import React from "react"
import '../utils/global.css'
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