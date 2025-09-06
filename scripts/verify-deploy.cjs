const hre = require("hardhat");

async function main() {
  try {
    console.log("Starting deployment process...");
    
    // Get the deployer's address
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

    // Get the contract factory
    const InsurancePolicy = await hre.ethers.getContractFactory("InsurancePolicy");
    console.log("Deploying InsurancePolicy...");
    
    // Deploy the contract
    const insurancePolicy = await InsurancePolicy.deploy();
    console.log("Deploy transaction hash:", insurancePolicy.deploymentTransaction().hash);
    
    // Wait for deployment to finish
    await insurancePolicy.waitForDeployment();
    const address = await insurancePolicy.getAddress();
    console.log("Contract deployed to:", address);

    // Verify the deployment
    console.log("\nVerifying deployment...");
    
    // Wait for some blocks to be mined
    console.log("Waiting for 5 blocks to be mined...");
    await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds delay

    // Verify contract bytecode
    const provider = deployer.provider;
    const code = await provider.getCode(address);
    console.log("\nContract bytecode length:", code.length);
    if (code === "0x" || code === "0x0") {
        throw new Error("No bytecode found at deployed address!");
    }
    console.log("Bytecode verified ✓");

    // Try to call the contract
    console.log("\nTesting contract...");
    const deployedContract = InsurancePolicy.attach(address);
    const owner = await deployedContract.owner();
    console.log("Contract owner:", owner);
    console.log("Contract is responding to calls ✓");

    console.log("\nDeployment fully verified and successful! ✓");
    console.log("Contract address:", address);
    console.log("Contract owner:", owner);
    
  } catch (error) {
    console.error("\nDeployment failed:", error);
    process.exitCode = 1;
  }
}

main();
