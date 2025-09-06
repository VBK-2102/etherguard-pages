const hre = require("hardhat");

async function main() {
  const InsurancePolicy = await hre.ethers.getContractFactory("InsurancePolicy");
  const insurancePolicy = await InsurancePolicy.deploy();
  await insurancePolicy.waitForDeployment();

  const address = await insurancePolicy.getAddress();
  console.log("InsurancePolicy deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
