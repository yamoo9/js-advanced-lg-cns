// 1. utils 모듈을 "모듈 객체"로 불러옵니다.
import * as utils from './utils/index.js';

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.
import { numberWithComma } from "./utils/index.js";

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭) 이름으로 추출합니다.
import { currencyKR as currency } from "./utils/index.js";


/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

test('utils.currencyKR(10000) = \'10,000원\'', () => {
  expect(utils.currencyKR(10000)).toBe('10,000원');
});

test('numberWithComma(10000) = \'10,000\'', () => {
  expect(numberWithComma(10000)).toBe('10,000');
});

test('currency(60000) = \'60,000원\'', () => {
  expect(currency(60000)).toBe('60,000원');
});

