# Decentraland Take Home

# Install

```
cd decentraland-ui
yarn
```

#### Run UI

```
yarn start
```

#### Run server (hardhat)

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
   - Click on `Add Token`
   - Click on `Custom Token`
   - Paste on `Token Contract Address` the Dummy Token contract address (from step 2)
   - You should see `100 DUMMY` tokens in your wallet
```

### Stack

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

#### PENDING THINGS TODO:

###### - Move Async functions to Saga generators

###### - Using reselects where we need

###### - Eslint + prettier

###### - More styling

###### - Add more types!

###### - Setup tests for selectors, generators, components

###### - Finish loading reducer
