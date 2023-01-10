/* globals test, expect */

// 일반 함수 식 참조
const show = function () {
  return `${this.name} 보다.`;
};

const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
// eslint-disable-next-line no-unused-vars
const watch = () => {
  return `${this.name} 관찰하다.`;
};

/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

const euid = {
  name: '이듬',
  show,
  look,
  watch() {
    setTimeout(() => {
      this.show();
    }, 1000);
  },
};

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// 객체의 메서드로 화살표 함수를 사용하면 this는 undefined이다.

// test('객체의 메서드로 화살표 함수를 사용하면 this는 undefined이다.', () => {
//   expect(euid.show()).toMatch(/이듬 보다/);
//   expect(euid.look()).toMatch(/이듬 지켜보다/);
//   // expect(euid.watch()).toMatch(/이듬 관찰하다/);
// });

/* ------------------------------------------------------------------------------- */

// 계산된 속성(computed properties)

// 객체.속성

// let 변수 = '속성';
// 객체[변수]

const setDynamicProperty = (object, propName, value) => {
  object[propName] = function () {
    return this.name + '처럼 ' + value + '하다.';
  };
  // return [propName, value];
  return { propName, value }
};


const obj = {
  name: '사물'
};

// 계산된 속성을 사용해 객체의 메서드 이름을 think로 설정할 수 있다.
let values = setDynamicProperty(obj, 'think', '생각');

console.log(values);

// 계산된 속성을 사용해 객체의 메서드 이름을 behavior로 변경할 수 있다.
setDynamicProperty(obj, 'behavior', '생각');

