---
sidebar_position: 2
---

# Configure

Options to configure a standalone RPC client.

The client can be configured through environment variables. Some variables may be required while others are optional.

## Environment variables

Required variables:

```bash
# The private key for the EOA used to relay bundles to the EntryPoint.
ERC4337_BUNDLER_PRIVATE_KEY

# Connection string to a Redis backed mempool.
ERC4337_BUNDLER_REDIS_URL

# Connection string to a standard Ethereum node.
ERC4337_BUNDLER_RPC_URL
```

Optional variables:

```bash
# Port to run the Client on.
# Defaults to 4337
ERC4337_BUNDLER_PORT

# Comma separated EntryPoint addresses to support.
# The first address is the preferred EntryPoint.
# Defaults to 0x1b98F08dB8F12392EAE339674e568fe29929bC47
ERC4337_BUNDLER_SUPPORTED_ENTRY_POINTS


# Address to send gas refunds for relaying bundlers.
# Defaults to the public address of the private key.
ERC4337_BUNDLER_BENEFICIARY
```
