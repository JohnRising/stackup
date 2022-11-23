---
sidebar_position: 1
---

# Install

A guide to spinning up a bundler and RPC client to handle ops.

This package is a Go implementation of an ERC-4337 `Bundler`. The current version supports a private mempool with a peer-to-peer (P2P) version on the roadmap.

This package is open source at [github.com/stackup-wallet/stackup-bundler](https://github.com/stackup-wallet/stackup-bundler).

:::tip

**Require a fully managed instance for your project?**

Come chat with us on [Discord](https://discord.gg/FpXmvKrNed) or [E-mail](mailto:founders@stackup.sh) to get set up ASAP! 🚀

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
