import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy BatchRegistry contract first
  const batchRegistryDeployment = await deploy("BatchRegistry", {
    from: deployer,
    args: [deployer], // Adjust constructor arguments if needed
    log: true,
    autoMine: true,
    skipIfAlreadyDeployed: true,
  });

  const batchRegistryAddress = batchRegistryDeployment.address;

  await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress], // Pass the BatchRegistry address as a constructor argument
    log: true,
    autoMine: true,
    //skipIfAlreadyDeployed: !hre.network.live,
  });
  // const CheckIn = await hre.ethers.getContract("CheckIn", deployer);
  console.log("CheckIn deployed to:", (await hre.deployments.get("CheckIn")).address);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["CheckIn"];
