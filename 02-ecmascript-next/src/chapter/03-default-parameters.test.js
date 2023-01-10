/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

const defaultArg = (value, initialValue) => {
  if (value === null || value === undefined) {
    value = initialValue;
  }
  return value;
};

const truncateText = (text, limit = 60) => {
  // limit = defaultArg(limit, 60);
  // let a = false || '' || 0 || null || undefined || 100;
  // limit = limit || 60;
  return `${text.slice(0, limit).trim()}...`;
};

const desc = `
  기본 매개변수(Default Paramters)는 함수 매개변수의 
  기본 값을 선언적으로 표현하는 강력한 방법입니다.
`.trim().replace(/\n\s+/g, '');

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// truncateText(desc) 반환 값의 글자 수
test('truncateText(desc) 반환 값의 글자 수는 63자이다.', () => {
  expect(truncateText(desc).length).toBe(63);
});

// truncateText(desc, 43) 반환 값의 글자 수
test('truncateText(desc, 43) 반환 값의 글자 수는 43 보다 크고, 46보다 작거나 같다.', () => {
  let textLength = truncateText(desc, 43).length;
  expect(textLength).toBeGreaterThan(43);
  expect(textLength).toBeLessThanOrEqual(46);
});

test('truncateText(desc, 0) 반환 값의 글자 수는 3자이다.', () => {
  expect(truncateText(desc, 0).length).toBe(3);
});