import React, { ReactElement } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
