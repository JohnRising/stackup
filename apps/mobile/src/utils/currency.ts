import {ethers, BigNumberish} from 'ethers';
import {CurrencySymbols, CurrencyMeta} from '../config';

const USDCDisplay = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const displayGenericToken = (value: BigNumberish, symbol: CurrencySymbols) => {
  return `${ethers.utils.commify(
    ethers.utils.formatUnits(
      ethers.BigNumber.from(value),
      CurrencyMeta[symbol].decimals,
    ),
  )} ${symbol}`;
};

export const formatCurrency = (
  value: BigNumberish,
  symbol: CurrencySymbols,
): string => {
  switch (symbol) {
    case 'USDC':
      return USDCDisplay.format(
        parseFloat(
          ethers.utils.formatUnits(
            ethers.BigNumber.from(value),
            CurrencyMeta[symbol].decimals,
          ),
        ),
      );

    default:
      return displayGenericToken(value, symbol);
  }
};

export const valueChange = (
  prev: BigNumberish,
  curr: BigNumberish,
): BigNumberish => {
  return ethers.BigNumber.from(curr).gte(prev)
    ? ethers.BigNumber.from(curr).sub(prev)
    : ethers.BigNumber.from(prev).sub(curr);
};

export const percentChange = (
  prev: BigNumberish,
  curr: BigNumberish,
  currency: CurrencySymbols,
): string => {
  return Math.abs(
    (parseFloat(
      ethers.utils.formatUnits(
        ethers.BigNumber.from(curr).sub(prev),
        CurrencyMeta[currency].decimals,
      ),
    ) /
      parseFloat(
        ethers.utils.formatUnits(
          ethers.BigNumber.from(prev),
          CurrencyMeta[currency].decimals,
        ),
      )) *
      100,
  ).toFixed(2);
};