require('@nomiclabs/hardhat-waffle')
require('./tasks/faucet')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.7.3',
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
}
