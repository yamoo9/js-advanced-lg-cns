/* 3항 연산 식(터너리), null 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다. ---------------- */

// ----------------------------------------------------------------------------------
// Nullish coalescing operator (??)
// ----------------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // 아래 코드를 3항 연산 식으로 변경합니다.
  // return (value === null || value === undefined) ? initialValue : value;

  // 변경 후, 다시 null 병합 연산자를 사용하는 코드로 변경합니다.
  return value ?? initialValue;
};

const ellipsisText = (text, limit = 100) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  // limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  JavaScript는 문 보다, 식을 사용해 조건 처리하는 경우가 잦습니다. 
  자주 사용되는 조건 식에 대해 정리합니다.
`
  .trim()
  .replace(/\n\s+/g, '');

// 테스트 코드를 작성합니다.

describe('defaultArg, ellipsisText 테스트', () => {
  test('defaultArg(20, 9) 값은 9가 아닙니다.', () => {
    expect(defaultArg(20, 9)).not.toBe(9);
  });

  test('ellipsisText(desc, 22) 반환 값의 글자 수는 `${desc.slice(0,22).trim()}...`.length 입니다.', () => {
    expect(ellipsisText(desc, 2)).toHaveLength(
      `${desc.slice(0, 22).trim()}...`.length
    );
  });
});

// ----------------------------------------------------------------------------------
// Optional chaning (?.)
// ----------------------------------------------------------------------------------

const company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39,
  },
  getLocation() {
    return Object.values(company.location);
  },
});

company.getLocation?.();
