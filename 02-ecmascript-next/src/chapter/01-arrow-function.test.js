/* ES6를 사용해 화살표 함수를 작성합니다. ------------------------------------------------------ */

// function fibonacci(n) {
//   if(n < 1) {
//     return 0;
//   } else if(n < 3) {
//     return 1;
//   } else {
//     return fibonacci(n - 2) + fibonacci(n - 1);
//   }
// };

// let = variable
// const = constant variable
// const fibonacci = function(n) {
//   if(n < 1) {
//     return 0;
//   } else if(n < 3) {
//     return 1;
//   } else {
//     return fibonacci(n - 2) + fibonacci(n - 1);
//   }
// };

// const fibonacci = (n) => {
//   if(n < 1) {
//     return 0;
//   } else if(n < 3) {
//     return 1;
//   } else {
//     return fibonacci(n - 2) + fibonacci(n - 1);
//   }
// };

// 문과 식의 차이점???
// - 문은 `값`을 반환하지 않습니다.
// - 식은 항상 `값`을 반환합니다.
const fibonacci = (n) =>
  n < 1 ? 0 : n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);

const numberWithComma = (n) => {
  // 함수 코드 로직을 작성합니다.
  // 정규식(regular expression) 활용
  // 참고: https://extendsclass.com/regex/daef1f8
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

/** Test Driven Development
 * 1. 기획 (로직 설계)
 * 2. 초고 (테스트 : 기댓값 ← 전달값 = 실패(FAIL))
 * 3. 검토 (로직 작성 : 테스트 → 성공(SUCCESS))
 * 4. 출판 (고도화, 안정성이 확보된 기능, 컴포넌트 등등)
 */

/* globals describe, test, expect */

describe('fibonacci 유틸리티', () => {
  // fibonacci(6)    →  8
  test('fibonacci(6) = 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  // fibonacci(12)   →  144
  test('fibonacci(12) = 144', () => {
    expect(fibonacci(12)).toBe(144);
  });

  // fibonacci(18)   →  2584
  test('fibonacci(18) = 2584', () => {
    expect(fibonacci(18)).toBe(2584);
  });
});

// numberWithComma 유틸리티
describe('numberWithComma 유틸리티', () => {
  // numberWithComma(900);      → '900'
  test('numberWithComma(900) = "900"', () => {
    expect(numberWithComma(900)).toBe('900');
  });

  // numberWithComma(9900);     → '9,900'
  test('numberWithComma(9900) = "9,900"', () => {
    expect(numberWithComma(9900)).toBe('9,900');
  });

  // numberWithComma(1398700);  → '1,398,700'
  test('numberWithComma(1398700) = "1,398,700"', () => {
    expect(numberWithComma(1398700)).toBe('1,398,700');
  });
});
