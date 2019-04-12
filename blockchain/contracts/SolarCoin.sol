pragma solidity >=0.4.25 <0.6.0;

contract SolarCoin {
  address owner;
  uint totalGenerated = 0;
  uint totalConsumed = 0;

  struct userStatistics {
    uint generated;
    uint consumed;
  }

  mapping (address => uint) balances;
  mapping (address => userStatistics[]) stats;

  constructor() public {
    owner = msg.sender;
  }

  function report(uint _generated, uint _consumed) external returns(uint amount){
    uint length = stats[msg.sender].length;
    totalGenerated -= stats[msg.sender][length - 1].generated;
    totalConsumed -= stats[msg.sender][length - 1].consumed;

    stats[msg.sender][length] = userStatistics(_generated, _consumed);

    totalGenerated += _generated;
    totalConsumed += _consumed;

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

  function getCurrentGenerated() public view returns(uint) {
    return stats[msg.sender][stats[msg.sender].length - 1].generated;
  }

  function getCurrentConsumed() public view returns(uint) {
    return stats[msg.sender][stats[msg.sender].length - 1].consumed;
  }

  function getMyBalance() public view returns(uint) {
    return balances[msg.sender];
  }
}
