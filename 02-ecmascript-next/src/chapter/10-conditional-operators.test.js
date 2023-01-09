/* 3항 연산 식(터너리), null 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다. ---------------- */

// ----------------------------------------------------------------------------------
// Nullish coalescing operator
// ----------------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // 아래 코드를 3항 연산 식으로 변경합니다.
  if (value === null || value === undefined) {
    return initialValue;
  } else {
    return value;
  }
  // 변경 후, 다시 null 병합 연산자를 사용하는 코드로 변경합니다.
};

const ellipsisText = (text, limit) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  JavaScript는 문 보다, 식을 사용해 조건 처리하는 경우가 잦습니다. 
  자주 사용되는 조건 식에 대해 정리합니다.
`.trim();

// 테스트 코드를 작성합니다.

describe('defaultArg, ellipsisText 테스트', () => {
  test('defaultArg(20, 9) 값은 9가 아닙니다.', () => {
    // 테스트 코드
  });

  test('ellipsisText(desc, 22) 반환 값의 글자 수는 `${desc.slice(0,22).trim()}...`.length 입니다.', () => {
    // 테스트 코드
  });
});

// ----------------------------------------------------------------------------------
// Optional chaning
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

let companyName, companyLat;

/* 테스트 코드를 작성하세요. ----------------------------------------------------------- */

describe('company 테스트', () => {
  test('company.companyName은 존재하지 않으므로 undefined 입니다.', () => {
    // 옵셔널 체이닝 코드를 활용해봅니다.
    if ('companyName' in company) {
      companyName = company.companyName;
    }

    // 테스트 코드
  });

  test('companyLat 값은 321입니다.', () => {
    // 옵셔널 체이닝 코드를 활용해봅니다.
    if ('location' in company) {
      if ('lat' in company.location) companyLat = company.location.lat;
    }

    // 테스트 코드
  });

  test('company.getFoundingDate 타입은 함수가 아니라 실행할 수 없으니 조건 처리가 필요합니다.', () => {
    // 옵셔널 체이닝 코드를 활용해봅니다.
    if ('getFoundingDate' in company) {
      if (typeof company.getFoundingDate === 'function')
        company.getFoundingDate();
    }

    // 테스트 코드
  });

  test('company.getLocation 타입은 함수이므로 조건 처리 결과 실행 가능합니다. 반환 값은 [321, -39] 입니다.', () => {
    // 옵셔널 체이닝 코드를 활용해봅니다.
    if ('getLocation' in company) {
      if (typeof company.getLocation === 'function') company.getLocation();
    }

    // 테스트 코드
  });
});
