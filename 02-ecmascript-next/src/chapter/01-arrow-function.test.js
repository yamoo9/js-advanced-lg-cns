/* ES6를 사용해 화살표 함수를 작성합니다. ------------------------------------------------------ */

const fibonacci = (n) => {
  // 함수 코드 로직을 작성합니다.
  // 0 1 1 2 3 5 8 ...
  // 문(if, switch) or 식(&&, ||, ? :)
  return n < 1 ? 0 : n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
};

var numberWithComma = function (n) {
  // 함수 코드 로직을 작성합니다.
  return n.toString();
};

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

/** Test Driven Development 
 * 1. 기획 (로직 설계)
 * 2. 초고 (테스트 : 기댓값 ← 전달값 = 실패(FAIL))
 * 3. 검토 (로직 작성 : 테스트 → 성공(SUCCESS))
 * 4. 출판 (고도화, 안정성이 확보된 기능, 컴포넌트 등등)
 */

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
})

// numberWithComma 유틸리티
// numberWithComma(900);      → '900'
// numberWithComma(9900);     → '9,900'
// numberWithComma(1398700);  → '1,398,700'
