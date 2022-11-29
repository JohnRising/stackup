---
sidebar_position: 1
---

# Quickstart

Explore a basic implementation of account abstraction using ERC-4337. This example will create an account and initiate a transaction.

If you are new to account abstraction, we recommend the [introduction to account abstraction](/docs/introduction/account-abstraction) and an [overview of ERC-4337](/docs/introduction/erc-4337-overview).

## 1. Download

Clone the [ERC-4337 Examples](https://github.com/stackup-wallet/erc-4337-examples) repository to download the scripts.

```
git clone https://github.com/stackup-wallet/erc-4337-examples.git
```

## 2. Install

This example uses the [Infinitism](https://github.com/eth-infinitism/account-abstraction) package created by the ERC-4337 core developers. Install it, and all other dependencies.

```
yarn install
```

## 3. Initialize your configuration

You can now initialize your local configuration.

```
yarn run init
```

A `config.json` file will be created. The file will look like this:

```
{
  "bundlerUrl": "http://localhost:4337",
  "rpcUrl": "https://rpc-mumbai.maticvigil.com/",
  "signingKey": "0x000...000",
  "entryPoint": "0x1b98F08dB8F12392EAE339674e568fe29929bC47",
  "simpleWalletFactory": "0xE6aFCD2B4e085F44596b925E401DeA5bB544399A"
}
```

It defaults to running a local [bundler](https://github.com/stackup-wallet/stackup-bundler) at http://localhost:4337. Alternatively, you can spin up a bundler hosted by Stackup at [app.stackup.sh](https://app.stackup.sh) or contact us.

## 4. Create a wallet

Create a wallet using the factory `simpleWalletFactory` defined in the configuration file.

```
yarn run simpleWallet:address
```

An address will be returned. At this point, the smart contract account has not been deployed.

## 5. Fund the wallet

Deposit MATIC into the wallet on Mumbai.

Navigate to a faucet, such as https://faucet.polygon.technology/ and https://mumbaifaucet.com/. Enter the wallet address and claim the testnet MATIC.

:::info

Faucets do not allow sending test MATIC to smart contracts, so you must deposit MATIC from the faucet before your first transaction.

:::

## 6. Initiate the transfer

The `simpleWallet:transfer` command allows you to transfer MATIC from the smart contract account to any address. It will create a UserOperation, sign it, and send it to the bundler:

```
yarn run simpleWallet:transfer [address] [amount]
```

You can then find the transaction using a block explorer like [polygonscan](mumbai.polygonscan.com/).

## That's it!

You've successfully sent a transaction using a smart contract wallet and ERC-4337. Now that you've done a simple transaction, check out the [packages](/docs/category/packages/) to see what tools are available to build your own custom solution.