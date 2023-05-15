import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import Navigation from "./Navigation/Navigation";

interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  return (
    <React.Fragment>
      <PromoBar />
      <Navigation />
      {children}
    </React.Fragment>
  );
}

export default Layout;
