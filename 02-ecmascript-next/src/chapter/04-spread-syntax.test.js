/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

// 전개 구문 (spread syntax)
// 배열, 객체 합성 (combine, mixin)

// ----------------------------------------------------------------------------------
// 배열 전개
// ----------------------------------------------------------------------------------

const integers = [-1, 0, 32, -101, 24];
// 메서드 빌려쓰기 패턴
let maxInt = Math.max.apply(Math, [20, -101].concat(integers));

// 전개 구문을 활용 배열 합성하여 Math.max 함수에 전달
maxInt = Math.max(...[20, ...integers, -101]);

// 테스트 코드를 작성합니다.
// maxInt 결과 값
console.log(maxInt);

// ----------------------------------------------------------------------------------
// 객체 전개
// ----------------------------------------------------------------------------------

// 상태 업데이트 유틸리티 함수
const setState = (newState) => {

  if (!newState.data) {
    newState.data = [];
  }

  return { 
    ...state,
    ...newState,
    data: [
      ...state.data,
      ...newState.data
    ]
  };
};

// 상태 객체 (불변 데이터 화)
const state = {
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
};

// 객체 불변화(immutable)
Object.freeze(state);

// 테스트 코드를 작성합니다.
// setState 유틸리티
describe('setState 유틸리티', () => {
  test('setState({ loading: true }) => updatedState.loading = true', 
    () => {
      state.loading = true;
      expect(Object.isFrozen(state)).not.toBeFalsy();
      expect(state.loading).toBeFalsy();

      const updatedState = setState({ loading: true });
      expect(updatedState.loading).toBeTruthy();
    });

  test('setState({ loading: true, data: [{id: 201, title: "추가 데이터"}] })의 data 아이템 갯수는 2이다.', 
    () => {
      const newState = { loading: true, data: [{id: 201, title: "추가 데이터"}] };
      const updatedState = setState(newState);
      expect(updatedState.data).toHaveLength(2);
    });
});
