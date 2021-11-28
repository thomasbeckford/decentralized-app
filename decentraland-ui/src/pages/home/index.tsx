import { SignIn, Center, LoginModal, LoginModalOptionType } from "decentraland-ui";
import { getLoadingStatus } from "./../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../store/actions";
import { useState } from "react";

function Home({ setUserAccount }: any) {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onConnect = () => {
    setUserAccount();
  };

  const handleClickSignIn = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      setShowLoginModal(true);
    }, 600);
  };

  if (showLoginModal) {
    return (
      <div className='LoginModal-story'>
        <LoginModal open loading={loading}>
          <LoginModal.Option type={LoginModalOptionType.METAMASK} onClick={onConnect} />
          <LoginModal.Option type={LoginModalOptionType.DAPPER} />
          <LoginModal.Option type={LoginModalOptionType.SAMSUNG} />
          <LoginModal.Option type={LoginModalOptionType.FORTMATIC} />
          <LoginModal.Option type={LoginModalOptionType.WALLET_CONNECT} />
        </LoginModal>
      </div>
    );
  }

  return (
    <Center>
      <SignIn isConnecting={loading} onConnect={handleClickSignIn}>
        CONNECT
      </SignIn>
    </Center>
  );
}

export default Home;
