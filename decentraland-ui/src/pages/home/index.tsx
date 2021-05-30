import { useState } from "react";
import { SignIn, Center, LoginModal, LoginModalOptionType } from "decentraland-ui";

function Home({ setUserAccount }: any) {
  const [logIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(false); // this could be a global state

  const onConnect = () => {
    setLoading(true);
    setUserAccount();
  };

  const handleClickSignIn = () => {
    setLoading(true);
    setTimeout(function () {
      setLogIn(true);
      setLoading(false);
    }, 600);
  };

  if (logIn)
    return (
      <div className='LoginModal-story'>
        <LoginModal open onClose={() => setLogIn(false)} loading={loading}>
          <LoginModal.Option type={LoginModalOptionType.METAMASK} onClick={() => onConnect()} />
          <LoginModal.Option type={LoginModalOptionType.DAPPER} />
          <LoginModal.Option type={LoginModalOptionType.SAMSUNG} />
          <LoginModal.Option type={LoginModalOptionType.FORTMATIC} />
          <LoginModal.Option type={LoginModalOptionType.WALLET_CONNECT} />
        </LoginModal>
      </div>
    );

  return (
    <Center>
      <SignIn isConnecting={loading} onConnect={() => handleClickSignIn()}>
        CONNECT
      </SignIn>
    </Center>
  );
}

export default Home;
