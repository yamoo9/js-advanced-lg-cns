// import 모듈 (기본, 이름이 부여된)
// import noModule
// import { module, moudle }
// import defaultModule from 'modulePath.js';
import numberWithComma from './numberWithComma.js';

// 1. numberWithComma 모듈을 불러옵니다.
// 2. currencyKR 모듈을 "이름 내보내기"로 내보냅니다.

// export const namedModule1 = () => {};
// export function namedModule2() {}

export const currency = (n, unit = '$', position = 'before') => {
  return position.includes('before')
    ? `${unit} ${numberWithComma(n)}`
    : `${numberWithComma(n)}${unit}`;
};

// export const currencyKR = (n) => `${numberWithComma(n)}원`;
export const currencyKR = (n) => currency(n, '원', 'after');
