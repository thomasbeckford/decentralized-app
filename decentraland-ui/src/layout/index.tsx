import { Navbar, Page, Footer } from "decentraland-ui";

export default function Layout({ children, getUser, address, balance }: any) {
  return (
    <div className='Page-story-container'>
      <Navbar activePage='dao' isConnected={getUser.isConnected} address={address} mana={balance} />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
}
