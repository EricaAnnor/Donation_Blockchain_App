/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url:'https://rpc-mumbai.maticvigil.com',
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
}