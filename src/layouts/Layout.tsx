import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import SearchHeader from "./SearchBar/SearchHeader";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";

interface props {
  children: ReactNode;
}


function Layout({ children }: props) {

// ===> router
const Router = useRouter();
const hideNavigation = Router.pathname.includes("product-category");

  return (
    <React.Fragment>
      <PromoBar />
      <SearchHeader />
      {!hideNavigation && <Navigation />}
      <main className="w-full h-full">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
