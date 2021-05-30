import Web3 from "web3";
import { useEffect, useState } from "react";

const useWeb3 = (): any => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    let instance: any;

    if (window.ethereum) {
      try {
        instance = new Web3(window.ethereum);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (window.web3) {
      instance = new Web3(window.web3);
    } else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
      instance = new Web3(provider);
    }

    setWeb3(instance);
  }, []);

  return web3;
};

export default useWeb3;
