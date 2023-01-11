import { numberWithComma } from './numberWithComma';

export const currency = (n, unit = '$', position = 'before') => {
  return position.includes('before')
    ? `${unit} ${numberWithComma(n)}`
    : `${numberWithComma(n)}${unit}`;
};

export const currencyKR = (n) => currency(n, '원', 'after');
