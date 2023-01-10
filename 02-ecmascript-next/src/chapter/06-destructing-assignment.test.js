/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

const state = {
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
};

// immutable state
Object.freeze(state);

// 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
// var loading = state.loading;
// var error = state.error;
// var data = state.data;

let { loading, error, data } = state;

console.log({ loading, error, data });

// 배열의 첫번째 아이템, 나머지 집합 추출
// var firstData = data[0];
// var restData = data.slice(1);

let [firstData, ...restData] = data;

console.log(firstData, restData);

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// state 객체 구조 분해 할당

// state.data 배열 구조 분해 할당
