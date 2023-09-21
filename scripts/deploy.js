async function main() {
  const Funding = await ethers.getContractFactory("Funding");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await Funding.deploy();
  console.log("Contract deployed to address:", hello_world.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });

 //0xfa44e0437CB6Ce2eC0f265a3E3343FF33cFcA7D6