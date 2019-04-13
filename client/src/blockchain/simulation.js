const SolarCoin = artifacts.require('SolarCoin');

const loop = (accounts, instance, callback) => {
    for(let i = 0; i < 1; i++) {
        accounts.forEach((account) => {
            instance.report(100, 100, {from: account});
        });
    }
    callback();
}

module.exports = async (callback) => {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let instance = await SolarCoin.deployed();
    loop(accounts, instance, async () => {
        let balance = await instance.getMyBalance.call({from: accounts[0]});
        console.log(balance.toNumber());
    });
}
