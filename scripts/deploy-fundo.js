const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", (await deployer.getBalance()).toString());

  if (balance < 100000000000) {
    console.log("pop up the account");
    return;
  }
  const Token = await ethers.getContractFactory("contracts/fundospuppp_flat.sol:FundoSPUPPP");
  const token = await Token.deploy();
  console.log("Token address:", token.address);
  const NFT = await ethers.getContractFactory("contracts/imovelrfb.sol:ImoveisRFB");
  const nft = await NFT.deploy();
  console.log("NFT address:", nft.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});