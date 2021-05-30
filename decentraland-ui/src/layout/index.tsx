import { Navbar, Page, Footer } from "decentraland-ui";

export default function Layout({ children, getUserStatus, address, balance }: any) {
  return (
    <div className='Page-story-container'>
      <Navbar activePage='dao' isConnected={getUserStatus} address={address} mana={balance} />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
}
