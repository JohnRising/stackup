echo \
"STACKUP_CONTRACTS_MNEMONIC=${STACKUP_CONTRACTS_MNEMONIC}
STACKUP_CONTRACTS_PAYMASTER=${STACKUP_CONTRACTS_PAYMASTER}
STACKUP_CONTRACTS_MUMBAI_RPC=${STACKUP_CONTRACTS_MUMBAI_RPC}
STACKUP_CONTRACTS_POLYGON_RPC=${STACKUP_CONTRACTS_POLYGON_RPC}
STACKUP_CONTRACTS_POLYGONSCAN_API_KEY=${STACKUP_CONTRACTS_POLYGONSCAN_API_KEY}" \
> .env

echo "Env files successfully generated."