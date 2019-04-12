pragma solidity >=0.4.25 <0.6.0;

contract SolarCoin {
  address owner;
  uint totalGenerated;
  uint totalConsumed;

  struct userStatistics {
    uint generated;
    uint consumed;
    bool exists;
  }

  mapping (address => uint) balances;
  mapping (address => userStatistics) stats;

  constructor() public {
    owner = msg.sender;
  }

  modifier isRegistered() {
    require(stats[msg.sender].exists);
    _;
  }

  function register() external {
    balances[msg.sender] = 0;
    stats[msg.sender] = userStatistics(0, 0, true);
  }

  function report(uint _generated, uint _consumed) external isRegistered returns(uint amount){
    totalGenerated -= stats[msg.sender].generated;
    totalConsumed -= stats[msg.sender].consumed;

    stats[msg.sender] = userStatistics(_generated, _consumed, true);

    totalGenerated += _generated;
    totalConsumed += _consumed;

    balances[msg.sender] += 100;
    return 100;
  }

  function sendCoin(address receiver, uint amount) public isRegistered returns(bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    return true;
  }

  function getTotalConsumed() public view returns(uint) {
    return totalConsumed;
  }

  function getTotalGenerated() public view returns(uint) {
    return totalGenerated;
  }

  /* function getBalance(address addr) public view returns(uint) { */
  /*   return balances[addr]; */
  /* } */

  function getMyBalance() public view isRegistered returns(uint) {
    return balances[msg.sender];
  }
}
