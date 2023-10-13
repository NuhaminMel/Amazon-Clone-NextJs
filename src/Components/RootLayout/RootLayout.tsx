import React, { ReactElement } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

interface Props{
    children: ReactElement
}

const RootLayout = ({children}: Props) => {
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
