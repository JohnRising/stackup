---
sidebar_position: 1
---

# Install

A guide to spinning up an RPC client to handle ops.

This package is a Go implementation of an ERC-4337 `Bundler`. The current version supports a private mempool with a P2P version on the road map.

This package is open source at [github.com/stackup-wallet/stackup-bundler](https://github.com/stackup-wallet/stackup-bundler).

:::tip

**Require a fully managed instance for your project?**

Come chat with us on [Discord](https://discord.gg/FpXmvKrNed) or [E-mail](mailto:founders@stackup.sh) to get set up ASAP! 🚀

:::

:::caution

**🛠 This package is under active development**

In the meantime, feel free the to read the docs and give us your feedback on [Discord](https://discord.gg/FpXmvKrNed)! 💬

:::

## Via `go install`

Make sure to have your environment variables configured before running the client. See the [configure page](./configure.md) for details.

Install with go:

```bash
go install github.com/stackup-wallet/stackup-bundler@latest
```

Run an instance in `private` mode:

```bash
stackup-bundler start --mode private
```

For a description on the CLI commands:

```bash
stackup-bundler start --help
```
