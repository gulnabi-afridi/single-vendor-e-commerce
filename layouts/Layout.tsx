import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import SearchHeader from "./SearchBar/SearchHeader";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  return (
    <React.Fragment>
      <PromoBar />
      <SearchHeader />
      <Navigation/>
      {children}
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
