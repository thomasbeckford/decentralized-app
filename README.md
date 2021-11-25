# Decentraland Take Home dApp

# Install and run frontend

```
cd decentraland-ui
yarn
yarn start
```

#### Install and run server

```
1. Open a new terminal tab:
cd dummy-token
npm install
npx hardhat node #(this will start local server)

2. Open a new terminal tab:
npx hardhat --network localhost run scripts/deploy.js #(This will deploy the dummy contract)
npx hardhat --network localhost faucet <token-address> <your-address>

    - <token-address> -> deployed contract token address (Token.sol)
    - <your-address> -> ethereum account token (in this example metamask account token).

3. Connect your MetaMask extension to the localhost network. You should have 1 ETH in your balance.

4. Add the Dummy Token to MetaMask:
   - Click on `Import tokens`
   - Paste on `deployed contract token address` (Token.sol) the Dummy Token contract address (from step 2)
   - Set decimals to 0
   - You should see `100 DUMMY` tokens in your wallet
```

### Stack

```
 - Yarn
 - Typescript
 - React
 - Redux
 - Jest
 - Ethers.js
 - Web3
```

#### Corrections (TODO)

###### - Remove any and add the correct types

###### - Move Async functions to Saga generators

###### - Using re-selects where we need

###### - Eslint + prettier

###### - Setup tests for selectors, generators, components

###### - Finish loading reducer

###### - More styling
