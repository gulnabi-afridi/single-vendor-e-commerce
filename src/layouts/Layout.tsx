import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import SearchHeader from "./SearchBar/SearchHeader";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import AccountNavbar from "./Navigation/AccountNavbar";

interface props {
  children: ReactNode;
}


function Layout({ children }: props) {

// ===> router
const Router = useRouter();
const hideNavigation = Router.pathname.includes("product-category");
const renderAccountNavbar=()=>{
  if(Router.pathname=="/cart"||Router.pathname=="/wishlist"||Router.pathname=="/myaccount"){
    return true
  }
  else
  false
}
  return (
    <React.Fragment>
      <PromoBar />
      <SearchHeader />
      {!hideNavigation && <Navigation />}
      {renderAccountNavbar()&& <AccountNavbar />}
      <main className="w-full h-full">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
