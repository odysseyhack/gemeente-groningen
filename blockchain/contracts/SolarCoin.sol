pragma solidity >=0.4.25 <0.6.0;

contract SolarCoin {
  address owner;

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
    stats[msg.sender] = userStatistics(generated, consumed);
    return 1;
  }

  function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    return true;
  }

  function getBalance(address addr) public view returns(uint) {
    return balances[addr];
  }
}
