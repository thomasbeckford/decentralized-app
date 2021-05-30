# Decentraland UI

```
 - TYPESCRIPT
 - YARN
 - REACT
 - REDUX
 - JEST
 - ETHERS
 - REACT ROUTER DOM
 - WEB3
```

# Install

```
yarn
```

#### Run UI

```
yarn start
```

#### Run server (hardhat)

```
cd dummy-token

1. npm install
2. npx hardhat node (start local server)
3. In another tab:
    npx hardhat --network localhost run scripts/deploy.js (This will deploy the dummy contract)
4. npx hardhat --network localhost faucet <token-address> <your-address>
    - The token address: dummy contract token.
    - Your address: ethereum account token (in this example metamask account token).

5. Connect your MetaMask extension to the localhost network. You should have 1 ETH in your balance.

6. Add the Dummy Token to MetaMask:
   - Click on `Add Token`
   - Click on `Custom Token`
   - Paste on `Token Contract Address` the Dummy Token contract address (from step 4)
   - You should see `100 DUMMY` tokens in your wallet
```

#### PENDING THINGS TODO:

###### - Move Async functions to Saga generators

###### - Using reselects where we need

###### - Eslint + prettier

###### - More styling

###### - Add more types!

###### - Setup tests for selectors, generators, components

###### - Finish loading reducer
