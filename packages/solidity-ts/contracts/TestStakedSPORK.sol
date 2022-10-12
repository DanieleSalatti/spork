// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

error TRANSFER_NOT_ALLOWER();

contract MyToken is ERC20, ERC20Burnable, AccessControl {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  constructor() ERC20("TestStakedSPORK", "tsSPORK") {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(MINTER_ROLE, msg.sender);
  }

  function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
    _mint(to, amount);
  }

  function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
    if (hasRole(MINTER_ROLE, msg.sender)) {
      _transfer(_msgSender(), recipient, amount);
      return true;
    } else {
      revert TRANSFER_NOT_ALLOWER();
    }
  }

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) public virtual override returns (bool) {
    if (hasRole(MINTER_ROLE, msg.sender)) {
      _transfer(sender, recipient, amount);
      _approve(sender, _msgSender(), allowance(sender, _msgSender()) - amount);
      return true;
    } else {
      revert TRANSFER_NOT_ALLOWER();
    }
  }
}
