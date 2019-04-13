const SolarCoin = artifacts.require('SolarCoin');

contract('SolarCoin', async accounts => {

    it("should allow a report to be announced", async () => {
        let instance = await SolarCoin.deployed();
        await instance.report(100, 100);
        let balance = await instance.getMyBalance.call();
        assert.equal(balance.toNumber(), 100);
    });

    it("should return balance correctly", async () => {
        let instance = await SolarCoin.deployed();
        let balance = await instance.getMyBalance.call();
        assert.equal(balance.toNumber(), 100);
    });
});