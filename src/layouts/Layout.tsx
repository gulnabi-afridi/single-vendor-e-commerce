import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
import SearchHeader from "./SearchBar/SearchHeader";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import AccountNavbar from "./Navigation/AccountNavbar";
import BuyerSideBar from "./Navigation/BuyerSideBar";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapper";
import AdminLeftNavigation from "./Navigation/AdminLeftNavigation";
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

  const renderAdminSideBar = () => {
    if (
      Router.pathname == "/admin" ||
      Router.pathname == "/admin/orders" ||
      Router.pathname == "/admin/buyers" ||
      Router.pathname == "/admin/account" ||
      Router.pathname == "/admin/products" ||
      Router.pathname == "/admin/categories"
    )
      return true;
    else return false;
  };

  return (
    <React.Fragment>
      {!renderAdminSideBar() && <PromoBar />}
      {!renderAdminSideBar() && <SearchHeader />}
      {!renderAdminSideBar() && !hideNavigation && <Navigation />}
      {!renderAdminSideBar() && renderAccountNavbar() && <AccountNavbar />}
      {!renderAdminSideBar() && !renderBuyerSideBar() && (
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
      {renderAdminSideBar() && (
        <div
          className={`w-full h-full md:h-screen md:grid md:grid-cols-[220px,calc(100%-220px)] flex flex-col gap-6 md:gap-0
        `}
        >
          <AdminLeftNavigation />
          <main className="w-full">{children}</main>
        </div>
      )}
    </React.Fragment>
  );
}

export default Layout;
