import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  return <div>{children}</div>;
}

export default Layout;
