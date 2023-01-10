// 1. utils 모듈을 "모듈 객체"로 불러옵니다.

// 2. utils 모듈 중, numberWithComma 함수를 추출합니다.

// 3. utils 모듈 중, currencyKR 함수를 currency (별칭) 이름으로 추출합니다.

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// console.log('learn ES Modules');

// block scope
// let, const

// function scope
// module pattern
// IIFE (즉시 실행 함수 식) 패턴
// 모듈처럼 사용
(function() {
  var body = document.querySelector('.rootSection');
  console.log(body);
})();