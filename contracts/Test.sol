pragma solidity 0.8.13;

// pragma solidity 0.7.6;

contract Test {
  uint256 public amount1 = 0;
  uint256 public amount2 = 0;
  uint256 public amount3 = 0;
  uint256 public total = 0;

  // check msg.value
  function test1() public payable {
    amount1 = msg.value;
    total = address(this).balance;
  }

  // check msg.value
  function test2() public payable {
    amount2 = msg.value;
    total = address(this).balance;
  }

  // check msg.value
  function test3() public payable {
    amount3 = msg.value;
    total = address(this).balance;
  }

  function withdraw() public {
    payable(msg.sender).transfer(address(this).balance);
    total = address(this).balance;
  }
}
