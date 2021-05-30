import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBalance, setAddress, setLoading, isConnected } from "./actions";

import useWeb3 from "./web3";

import Layout from "./layout";
import Account from "./pages/account";
import Home from "./pages/home";
import { Modal, Button, Close } from "decentraland-ui";

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

  const getAddress = useSelector<any>((state) => state.address);
  const getBalance = useSelector<any>((state) => state.balance);
  const getUserStatus = useSelector<any>((state) => state.connected);

  const setUserAccount = async () => {
    if (ethereum) {
      const enableEthereum = await ethereum.enable();
      console.log(enableEthereum);
      setLoading(true);
      web3.eth.getAccounts().then((accounts: any) => {
        setTimeout(function () {
          dispatch(setAddress(accounts[0]));
          setUserBalance(accounts[0]);
          dispatch(isConnected(true));
        }, 700);
      });
    }
  };

  const setUserBalance = async (fromAddress: any) => {
    await web3.eth.getBalance(fromAddress).then((value: any) => {
      const credit = web3.utils.fromWei(value, "ether");
      dispatch(setBalance(credit));
    });
  };

  const sendTransaction = (e: any) => {
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

    const runTransaction = await web3.eth.sendTransaction(transaction);
    if (runTransaction && runTransaction.status) {
      setConfirmTransactionModal({ open: false, data: null });
      setNotification(true);
    }
    setUserBalance(getAddress);
  };

  return (
    <Router>
      <Layout getUserStatus={getUserStatus} address={getAddress} balance={getBalance}>
        <Switch>
          <Route exact path='/'>
            {!getUserStatus ? (
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
              <Button onClick={() => handleSendTransaction()} primary>
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
