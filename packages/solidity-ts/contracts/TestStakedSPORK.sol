// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

error TRANSFER_NOT_ALLOWER();

contract TestStakedSPORK is ERC20, ERC20Burnable, AccessControl {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  constructor() ERC20("TestStakedSPORK", "tsSPORK") {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

  function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
    _mint(to, amount);
  }

  function addMinter(address minter) public onlyRole(DEFAULT_ADMIN_ROLE) {
    _grantRole(MINTER_ROLE, minter);
  }

  function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
    revert TRANSFER_NOT_ALLOWER();
  }

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) public virtual override returns (bool) {
    revert TRANSFER_NOT_ALLOWER();
  }
}
