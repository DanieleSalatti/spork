import { DeployFunction } from 'hardhat-deploy/types';
import { THardhatRuntimeEnvironmentExtended } from 'helpers/types/THardhatRuntimeEnvironmentExtended';

import { TestSPORK } from '~common/generated/contract-types';

const func: DeployFunction = async (hre: THardhatRuntimeEnvironmentExtended) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const SPORK: TestSPORK = await ethers.getContract('TestSPORK', deployer);
  const StakedSPORK = await ethers.getContract('TestStakedSPORK', deployer);

  const staker = await deploy('SporkStaker', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [SPORK.address, StakedSPORK.address, 1665962086],
    log: true,
  });

  await StakedSPORK.addMinter(staker.address);

  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
};
export default func;
func.tags = ['SporkStaker'];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
