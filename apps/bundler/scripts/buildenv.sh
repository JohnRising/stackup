echo \
"STACKUP_BUNDLER_PORT=${STACKUP_BUNDLER_PORT:-3000}
STACKUP_BUNDLER_MONGODB_URL=${STACKUP_BUNDLER_MONGODB_URL:-mongodb://127.0.0.1:27017/app}
STACKUP_BUNDLER_SENTRY_DNS=${STACKUP_BUNDLER_SENTRY_DNS}" \
> .env

echo "Env files successfully generated."