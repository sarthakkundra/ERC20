const { ethers } = require("ethers");

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	console.log(deployer, ethers.parseEther("50"));
	const hawkz = await deploy("Hawkz", {
		from: deployer,
		log: true,
		args: [ethers.parseEther("50")],
		waitConfirmations: 1,
	});

	console.log("CONTRACT DEPLOYED AT ", hawkz.address);
};
