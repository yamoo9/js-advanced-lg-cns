// src/chapter/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.
// JSON 파일을 ES 모듈로 불러올 때 주의할 점!
// 참고: https://bit.ly/3X0ewZP
// https://github.com/eslint/eslint/discussions/15305
// https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions
import booksApi from '../api/books.json' assert { type: 'json' };

export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 반환합니다.
  return new Promise((resolve, reject) => {
    // timeout 초가 흐른 뒤, 타이머가 작동하도록 설정합니다.
    setTimeout(() => {
      // shouldReject 값에 따라 오류 객체를 전송하거나,
      if (!shouldReject) {
        // booksApi.books 값을 전송합니다.
        resolve(booksApi.books);
      } else {
        // 오류 객체를 전송합니다.
        reject({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }, timeout);
  });
};
