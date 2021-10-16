// Based on https://eips.ethereum.org/EIPS/eip-4337

// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.0;

import "./interface/IWallet.sol";

import "hardhat/console.sol";

contract Wallet is IWallet {
  function validateUserOp(
    UserOperation calldata userOp,
    uint256 requiredPrefund
  ) external {
    // TODO: implement wallet logic
    userOp;
    requiredPrefund;
  }
}