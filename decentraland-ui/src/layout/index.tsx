import React from "react";
import { Navbar, Page, Footer, Button, Center } from "decentraland-ui";

export default function Layout({ children, getUserStatus, address, balance }: any) {
  return (
    <div className='Page-story-container'>
      <Navbar activePage='dao' isConnected={getUserStatus} address={address} mana={balance} />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
}
