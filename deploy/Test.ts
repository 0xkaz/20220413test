import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

export async function mydeploy(
  hre: HardhatRuntimeEnvironment,
  contractName: string,
  from: string,
  args: any,
  log: boolean,
  gasLimit: number
) {
  console.log("mydeploy: " + contractName + "\n");
  await ethers.getContractFactory(contractName);
  const ret = await hre.deployments.deploy(contractName, {
    from: from,
    args: args,
    log: log,
    gasLimit: gasLimit,
  });
  return await ethers.getContractAt(ret.abi, ret.address);
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log("start..");
  console.log("hre.network.name = " + hre.network.name);

  const signers = await ethers.getSigners();
  const deployer = signers[0].address;
  const gasLimit = 500000;
  console.log(
    "signers[0].getBalance: ",
    await (await signers[0].getBalance()).toString()
  );
  const deadline = Math.floor(Date.now() / 1000) + 100;

  console.log("deployer = " + deployer);
  console.log("\n\n\n\n");

  const Test = await mydeploy(hre, "Test", deployer, [], true, gasLimit);
  console.log("Test.address: ", Test.address);

  const tx1 = await Test.test1({ value: 10000000000 });
  await tx1.wait();

  const tx2 = await Test.test2({ value: 10000000000 });
  await tx2.wait();

  const tx3 = await Test.test3({ value: 10000000000 });
  await tx3.wait();

  console.log("await Test.amount1(): ", (await Test.amount1()).toString());
  console.log("await Test.amount2(): ", (await Test.amount2()).toString());
  console.log("await Test.amount3(): ", (await Test.amount3()).toString());
  console.log("await Test.total(): ", (await Test.total()).toString());
};

func.tags = ["Test"];

func.skip = async (hre) => {
  return (
    hre.network.name !== "hardhat" &&
    hre.network.name !== "astar" &&
    hre.network.name !== "shiden" &&
    hre.network.name !== "fantomtest" &&
    hre.network.name !== "localhost" &&
    hre.network.name !== "mumbai" &&
    hre.network.name !== "polygon" &&
    hre.network.name !== "fantom" &&
    hre.network.name !== "harmony" &&
    hre.network.name !== "xdai" &&
    hre.network.name !== "bsc" &&
    hre.network.name !== "harmonytest" &&
    hre.network.name !== "avalanche" &&
    hre.network.name !== "shibuya"
  );
};
export default func;
