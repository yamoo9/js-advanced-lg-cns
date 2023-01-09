/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

const defaultArg = (value, initialValue) => {
  if (value === null || value === undefined) {
    value = initialValue;
  }
  return value;
};

const truncateText = (text, limit) => {
  limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

const desc = `
  기본 매개변수(Default Paramters)는 함수 매개변수의 
  기본 값을 선언적으로 표현하는 강력한 방법입니다.
`.trim();

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// truncateText(desc) 반환 값의 글자 수

// truncateText(desc, 43) 반환 값의 글자 수
