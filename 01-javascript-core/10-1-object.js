/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
const cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// auth*
// - authentification
// - authorization

// 로그인 전
let authUser = null;

// 서버에 전송할 사용자 입력 정보: request.body = { id: 'yamoo9', password: 'itsme@2022' }
// 로그인 후
authUser = {
  uid: 'user-id-d9f9wefkd',
  name: 'yamoo9',
  email: 'yamoo9@euid.dev',
  isSignIn: true,
  permission: 'paid', // 'free' | 'paid'
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
for (const key in authUser) {
  // if (authUser.hasOwnProperty(key)) {
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]); // 'uid', 'name', 'email', 'isSignIn', 'permission'
  }
}

// 계산된 프로퍼티 (computed property)
let computedProperty = 'phone'; // phone | tel

function createUser(computedProp = 'phone') {
  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-XXXX-XXXX',
  };
}

console.log('--------------------------------');
console.log(createUser('tel'));

// 프로퍼티 포함 여부 확인
console.log('hasMoney' in authUser);
console.log('isSignIn' in authUser);

function support(cssFeature) {
  return cssFeature in document.body.style;
}

// support('grid');

// 프로퍼티 나열
// 객체: object { property1, property2, ..., propertyN }
// 반환 값: [ property1, property2, ..., propertyN ]

function getPropertiesList(object) {
  const result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;

  // return Object.keys(object);
}

const authUserProperties = getPropertiesList(authUser);
console.log(authUserProperties);

// 프로퍼티 제거 or 삭제
function removeProperty(object, property) {
  // object[property] = null;
  object[property] = typeof object[property] === 'function' ? null : undefined;
}

function deleteProperty(object, property) {
  delete object[property];
}

removeProperty(authUser, 'isSignIn');
deleteProperty(authUser, 'permission');

// 단축 프로퍼티
let name = '지훈';
let email = 'yamoo9@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  // ES5
  // name: name,
  // ES6 shorthand property
  name,
  email,
  authorization,
  isLogin,
};

const superMan = (() => {
  const realName = '클락';
  let costume = '빨간 망토, 파란 팬츠, 가슴엔 커다란 S';
  return {
    nickname: 'yamoo9',
    get name() {
      return realName;
    },
    get costume() {
      return costume;
    },
    set costume(newCostume) {
      costume = newCostume;
    },
  };
})();

// getter (O)
console.log(superMan.name);
// setter (X)
superMan.name = '다크 릴 그로우';
console.log(superMan.name);

console.log(superMan.costume);
superMan.costume =
  '강철 바디, 하늘을 날으는 강력한 엔진, 손바닥에서는 광선 빔이~ ';
console.log(superMan.costume);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

const virtualDOMNode = {
  type: 'div',
  props: {
    className: 'virtual-dom-element',
    // if: true,
    // while: false,
  },
};

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return Object.keys(object).length === 0;
}

function isPlainObject(object) {
  return null;
}
