pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./interfaces/IERC20MintableBurnable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

error INVALID_AMOUNT();
error CANNOT_UNSTAKE_YET();

contract SporkStaker {
  IERC20 public immutable sporkToken;
  IERC20MintableBurnable public immutable stakedSporkToken;

  uint256 public unstakeOnlyAfter;

  event Staked(address indexed user, uint256 amount);
  event Unstaked(address indexed user, uint256 amount);

  constructor(
    address _sporkToken,
    address _stakedSporkToken,
    uint256 _unstakeOnlyAfter
  ) {
    sporkToken = IERC20(_sporkToken);
    stakedSporkToken = IERC20MintableBurnable(_stakedSporkToken);
    unstakeOnlyAfter = _unstakeOnlyAfter;
  }

  function currentTimestamp() external view returns (uint256) {
    return block.timestamp;
  }

  function stake(uint256 amount) external {
    if (amount == 0) {
      revert INVALID_AMOUNT();
    }
    sporkToken.transferFrom(msg.sender, address(this), amount);
    stakedSporkToken.mint(msg.sender, amount);
    emit Staked(msg.sender, amount);
  }

  function unstake(uint256 amount) external {
    if (amount == 0) {
      revert INVALID_AMOUNT();
    }
    if (block.timestamp < unstakeOnlyAfter) {
      revert CANNOT_UNSTAKE_YET();
    }
    stakedSporkToken.burnFrom(msg.sender, amount);
    sporkToken.transfer(msg.sender, amount);
    emit Unstaked(msg.sender, amount);
  }
}
