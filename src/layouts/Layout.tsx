import React, { ReactNode } from "react";
import PromoBar from "./PromoBar/PromoBar";
<<<<<<< HEAD:src/layouts/Layout.tsx
import SearchHeader from "./Navigation/SearchBar/SearchHeader";
=======
import SearchHeader from "./SearchBar/SearchHeader";
>>>>>>> f790907cb8f963d0c1e4b426693fa5490f9d4d7c:layouts/Layout.tsx
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
<<<<<<< HEAD:src/layouts/Layout.tsx
      <Navigation />
      <main className="w-full h-full">{children}</main>
      <Footer />
=======
      <Navigation/>
      {children}
      <Footer/>
>>>>>>> f790907cb8f963d0c1e4b426693fa5490f9d4d7c:layouts/Layout.tsx
    </React.Fragment>
  );
}

export default Layout;
