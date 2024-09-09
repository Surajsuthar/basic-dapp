const MyContract = artifacts.require("Simple");

module.exports =(deployer) => {
    deployer.deploy(MyContract)
}