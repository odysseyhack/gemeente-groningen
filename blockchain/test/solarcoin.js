const SolarCoin = artifacts.require('SolarCoin');

contract('SolarCoin', async accounts => {

    it("should allow a report to be announced", async () => {
        let instance = await SolarCoin.deployed();
        await instance.register.call();
        let balance = await instance.report.call(100, 100);
        assert.equal(balance.toNumber(), 100);
    });

    it("should return balance correctly", async () => {
        let instance = await SolarCoin.deployed();
        await instance.register.call();
        let balance = await instance.getMyBalance.call();
        assert.equal(balance.toNumber(), 0);
    });
});