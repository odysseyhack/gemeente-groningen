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

const time_convert = (minutes) => {
    let hours = Math.floor(minutes/60);
    let mins = minutes % 60;
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (mins === 0) {
        mins = `0${mins}`
    }
    return `${hours}:${mins}`
};

const loop = (accounts, instance, callback) => {
    setTimeout(callback, 96*TICK*1000);
    for(let i = 0; i < 96; i += 1) {
        setTimeout(() => {
            accounts.forEach((account) => {
              instance.report(parseInt(rand(production[i]), 10), parseInt(rand(consumption[i])), {from: account});
             });
            instance.getMyBalance.call().then((res) => {
                console.log(`${time_convert(i*15)} Generated: ~${Math.floor(rand(production[i]))} Consumed: ~${Math.floor(rand(consumption[i]))}, Earned: ${res.toNumber()}`);
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
