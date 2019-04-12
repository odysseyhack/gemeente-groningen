pragma solidity >=0.4.25 <0.6.0;

contract SolarCoin {
  address owner;
  uint totalGenerated;
  uint totalConsumed;

  struct userStatistics {
    uint generated;
    uint consumed;
  }

  mapping (address => uint) balances;
  mapping (address => userStatistics) stats;

  constructor() public {
    owner = msg.sender;
  }

  function report(uint generated, uint consumed) external returns(uint amount){
    totalGenerated -= stats[msg.sender].generated;
    totalConsumed -= stats[msg.sender].consumed;

    stats[msg.sender] = userStatistics(generated, consumed);

    totalGenerated += generated;
    totalConsumed += consumed;

    balances[msg.sender] += 100;
    return 100;
  }

  function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
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

  function getMyBalance() public view returns(uint) {
    return balances[msg.sender];
  }
}
