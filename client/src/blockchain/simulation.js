const SolarCoin = artifacts.require('SolarCoin');
const fs = require('fs');
const TICK = 0.25;

const data = JSON.parse(fs.readFileSync('production.json'));

console.log(data);

const loop = (accounts, instance, callback) => {
    setTimeout(callback, 96*TICK*1000);
    for(let i = 0; i < 96; i += 1) {
        setTimeout(() => {
            console.log(`Data ${data[i]}`);
            accounts.forEach((account) => {
                instance.report(parseInt(data[i], 10), 100, {from: account});
            });
        }, (i + 1)*TICK*1000);
    }
};

module.exports = (callback) => {
    web3.eth.getAccounts().then((accounts) => {
        SolarCoin.deployed().then((instance) => {
            console.log("STARTING");
            loop(accounts, instance, () => {
                instance.getMyBalance.call({from: accounts[0]}).then((balance) => {
                    console.log(balance.toNumber());
                    callback();
                });
            });
        });
    });
}
