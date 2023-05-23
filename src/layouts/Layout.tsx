import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import SearchHeader from "./SearchBar/SearchHeader";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import AccountNavbar from "./Navigation/AccountNavbar";
import BuyerSideBar from "./Navigation/BuyerSideBar";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  // ===> router
  const Router = useRouter();
  const hideNavigation = Router.pathname.includes("product-category");
  const renderAccountNavbar = () => {
    if (
      Router.pathname == "/cart" ||
      Router.pathname == "/wishlist" ||
      Router.pathname == "/myaccount" ||
      Router.pathname == "/myaccount/dashboard" ||
      Router.pathname == "/myaccount/orders" ||
      Router.pathname == "/myaccount/addresses" ||
      Router.pathname == "/myaccount/account"
    ) {
      return true;
    } else false;
  };
  const renderBuyerSideBar = () => {
    if (
      Router.pathname == "/myaccount/dashboard" ||
      Router.pathname == "/myaccount/orders" ||
      Router.pathname == "/myaccount/addresses" ||
      Router.pathname == "/myaccount/account" ||
      Router.pathname == "/myaccount"
    ) {
      return true;
    } else false;
  };
  return (
    <React.Fragment>
      <PromoBar />
      <SearchHeader />
      {!hideNavigation && <Navigation />}
      {renderAccountNavbar() && <AccountNavbar />}
      {!renderBuyerSideBar() && (
        <main className="w-full h-full">{children}</main>
      )}
      {renderBuyerSideBar() && (
        <main className="w-full h-full">
          <Wrapper style="md:py-12 py-8">
            <div className="w-full grid md:grid-cols-[250px,calc(100%-250px)]">
              <BuyerSideBar />
              {children}
            </div>
          </Wrapper>
        </main>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
