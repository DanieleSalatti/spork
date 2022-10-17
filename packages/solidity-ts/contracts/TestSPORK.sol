// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract TestSPORK is ERC20, ERC20Burnable, AccessControl, ERC20Permit {
  constructor() ERC20("TestSPORK", "tSPORK") ERC20Permit("TestSPORK") {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

  function mint(address to, uint256 amount) public {
    _mint(to, amount);
  }
}
