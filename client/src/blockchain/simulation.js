const SolarCoin = artifacts.require('SolarCoin');
const fs = require('fs');
const TICK = 0.25;

const production = JSON.parse(fs.readFileSync('production.json'));
const consumption = JSON.parse(fs.readFileSync('consumption.json'));

const rand = (x) => {
    const y = x / 10;
    const r = Math.random()*y;
    const a = Math.round(r);
    if (a === 0) {
        return x + r;
    }
    return x - r;
};

const loop = (accounts, instance, callback) => {
    setTimeout(callback, 96*TICK*1000);
    for(let i = 0; i < 96; i += 1) {
        setTimeout(() => {
            // accounts.forEach((account) => {
            instance.report(parseInt(rand(production[i]), 10), parseInt(rand(consumption[i])), {from: accounts[0]});
            // });
            instance.getMyBalance.call().then((res) => {
                console.log(`Generated: ~${Math.floor(rand(production[i]))} Consumed: ~${Math.floor(rand(consumption[i]))}, Earned: ${res.toNumber()}`);
            })
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
