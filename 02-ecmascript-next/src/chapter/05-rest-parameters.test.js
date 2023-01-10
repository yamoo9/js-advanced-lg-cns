/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

// ----------------------------------------------------------------------------------
// 나머지 매개변수 (집합)
// ----------------------------------------------------------------------------------

// ES5
var multiplyCountES5 = function () {
  var first = arguments[0]; // 첫번째 매개변수
  var rest = [].slice.call(arguments, 1); // 나머지 매개변수

  for (var i = 0, l = rest.length; i < l; ++i) {
    if (i === 0) first += rest[i];
    else first *= rest[i];
  }

  return first;
};

// ES6+
// 화살표 함수 안에서는 arguments 객체를 사용할 수 없다.
const multiplyCount = (first, ...rest) => 
  rest.reduce((acc, cur, idx) => 
    (idx === 0) ? (acc + cur) : (acc * cur), 
    0
  );

// 테스트 코드를 작성합니다.
// multiplyCount(101, 3, 6, 9) 결과 값은 5000보다 크거가 같고, 10000보다 작다.
test('multiplyCountES5(101, 3, 6, 9) 결과 값은 5000보다 크거가 같고, 10000보다 작다.', () => {
  let resultValue = multiplyCountES5(101, 3, 6, 9);
  expect(resultValue).toBeGreaterThanOrEqual(5000);
  expect(resultValue).toBeLessThan(10000);
});

test('multiplyCount(3, 6, 9, 12, 24) 결과 값은 1500보다 크고, 20000보다 작거나 같다.', () => {
  let resultValue = multiplyCount(3, 6, 9, 12, 24);
  expect(resultValue).toBeGreaterThan(15000);
  expect(resultValue).toBeLessThanOrEqual(20000);
});