const SolarCoin = artifacts.require("SolarCoin");

module.exports = function(deployer) {
    deployer.deploy(SolarCoin);
}
