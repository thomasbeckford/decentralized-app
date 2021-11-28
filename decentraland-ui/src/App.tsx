import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBalance, setAddress, setLoading, setConnected } from "./store/actions";
import { getAddressInfo, getBalanceInfo, getUserInfo } from "./store/selectors";

import useWeb3 from "./web3";

import Layout from "./layout";
import Account from "./pages/account";
import Home from "./pages/home";
import { Modal, Button, Close } from "decentraland-ui";
// import { getAddress } from "ethers/lib/utils";
// import web3 from "./web3";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

function App(): JSX.Element {
  const ethereum = window.ethereum;
  const [confirmTransactionModal, setConfirmTransactionModal] = useState<any>({ open: false, data: null });
  const [notification, setNotification] = useState<any>(false);

  const dispatch = useDispatch();
  const web3: any = useWeb3();

  const getAddress = useSelector(getAddressInfo);
  const getBalance = useSelector(getBalanceInfo);
  const getUser = useSelector(getUserInfo);

  const setUserAccount = async () => {
    if (ethereum) {
      const enableEthereum = await ethereum.enable();
      dispatch(setLoading(true));

      const accounts = await web3.eth.getAccounts();
      dispatch(setAddress(accounts[0]));
      dispatch(setConnected(true));
      setUserBalance(accounts[0]);
    }
  };

  const setUserBalance = async (fromAddress: any) => {
    const balance = await web3.eth.getBalance(fromAddress);
    const credit = web3.utils.fromWei(balance, "ether");
    dispatch(setBalance(credit));
  };

  const sendTransaction = (e: Event) => {
    e.preventDefault();
    setConfirmTransactionModal({ open: true, data: e });
  };

  const handleSendTransaction = async () => {
    const data = confirmTransactionModal.data.target;

    const amount = data[0].value;
    const recipient = data[1].value;

    const transaction = {
      from: getAddress,
      to: recipient,
      value: web3.utils.toWei(amount, "ether"),
    };

    try {
      const runTransaction = await web3.eth.sendTransaction(transaction);
      if (runTransaction && runTransaction.status) {
        setConfirmTransactionModal({ open: false, data: null });
        setNotification(true);
      }
      setUserBalance(getAddress);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Router>
      <Layout getUser={getUserInfo} address={getAddress} balance={getBalance}>
        <Switch>
          <Route exact path='/'>
            {!getUser.isConnected ? (
              <Home setUserAccount={setUserAccount} />
            ) : (
              <Account address={getAddress} balance={getBalance} sendTransaction={sendTransaction} />
            )}
          </Route>
        </Switch>

        <div className='Modal-story'>
          <Modal open={confirmTransactionModal.open}>
            <Modal.Header>Are you sure?</Modal.Header>
            <Modal.Content>You are about to send</Modal.Content>
            <Modal.Actions>
              <Button onClick={handleSendTransaction} primary>
                Proceed
              </Button>
              <Button onClick={() => setConfirmTransactionModal({ ...confirmTransactionModal, open: false })}>
                Cancel
              </Button>
            </Modal.Actions>
          </Modal>
        </div>

        <div className='Modal-story'>
          <Modal size='small' open={notification} closeIcon={<Close onClick={() => setNotification(false)} />}>
            <Modal.Header>Success!</Modal.Header>
            <Modal.Content>
              <p>Transfer completed successfully!</p>
            </Modal.Content>
          </Modal>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
