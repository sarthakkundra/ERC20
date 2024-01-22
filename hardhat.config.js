require("hardhat-deploy");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: "hardhat",
	namedAccounts: {
		deployer: {
			default: 0,
		},
	},
	networks: {},
	solidity: "0.8.19",
};
