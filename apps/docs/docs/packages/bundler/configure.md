---
sidebar_position: 2
---

# Configure

Options to configure a standalone Bundler and RPC client.

The Bundler can be configured through environment variables. Some variables may be required while others are optional.

## Environment variables

Required variables:

```bash
# Connection string to a standard Ethereum node.
ERC4337_BUNDLER_ETH_CLIENT_URL

# The private key for the EOA used to relay bundles to the EntryPoint.
ERC4337_BUNDLER_PRIVATE_KEY
```

Optional variables:

```bash
# Port to run the Client on.
# Defaults to 4337
ERC4337_BUNDLER_PORT

# Data directory to store embedded mempool.
# Defaults to /tmp/stackup_bundler
ERC4337_BUNDLER_DATA_DIRECTORY

# Comma separated EntryPoint addresses to support.
# The first address is the preferred EntryPoint.
# Defaults to 0x1b98F08dB8F12392EAE339674e568fe29929bC47
ERC4337_BUNDLER_SUPPORTED_ENTRY_POINTS

# Address to send gas refunds for relaying bundlers.
# Defaults to the public address of the private key.
ERC4337_BUNDLER_BENEFICIARY

# The maximum verificationGasLimit on a received UserOperation.
# Defaults to 100000
ERC4337_BUNDLER_MAX_VERIFICATION_GAS
```
