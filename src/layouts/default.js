import React from "react";
import "../styles/global.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Styles = {
  /* 
    160px は header + footer
    1px は スクロールバーがあるときとないときの横幅のズレをなくすため
    */
  minHeight: "calc(100vh - 160px + 1px)",
};

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <div class="container mx-auto px-4 lg:max-w-screen-lg" style={Styles}>
      {children}
    </div>
    <Footer />
  </>
);

export default DefaultLayout;
