const hre = require("hardhat");

async function verifyContract(address) {
  console.log("Waiting for 5 blocks for contract propagation...");
  await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds

  console.log("Verifying contract on Etherscan...");
  try {
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: [],
    });
    console.log("Contract verified on Etherscan!");
  } catch (error) {
    console.log("Verification error:", error);
  }
}

async function main() {
  try {
    console.log("Starting deployment...");
    
    // Get the contract factory
    const InsurancePolicy = await hre.ethers.getContractFactory("InsurancePolicy");
    console.log("Contract factory created");

    // Deploy the contract
    console.log("Deploying contract...");
    const insurancePolicy = await InsurancePolicy.deploy();
    console.log("Deployment transaction sent");

    // Wait for the deployment transaction
    console.log("Waiting for deployment confirmation...");
    await insurancePolicy.waitForDeployment();
    
    // Get the deployed contract address
    const address = await insurancePolicy.getAddress();
    console.log("Contract deployed to:", address);

    // Verify the contract has bytecode
    const provider = hre.ethers.provider;
    const code = await provider.getCode(address);
    if (code === '0x') {
      throw new Error('Contract deployment failed - no bytecode at address');
    }
    console.log("Contract bytecode verified");

    // Try to call the owner function to verify the contract is working
    const owner = await insurancePolicy.owner();
    console.log("Contract owner verified:", owner);

    console.log("Deployment successful!");
    console.log("Contract address:", address);
    console.log("Owner address:", owner);

    // Verify the contract on Etherscan
    await verifyContract(address);

  } catch (error) {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
  }
}require("hardhat");

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
