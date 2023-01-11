/* utils 모듈에서 fetchBooks를 추출해 테스트 코드를 작성하세요. -------------------------------- */

import { fetchBooks } from './utils/index.js';

// 프론트엔드 개발 (비동기 : 네트워크 통신)
// AJAX (new XMLHttpRequrest) → jQuery.ajax
// Promise
// Fetch API | Axios library
// Async function

test('fetchBooks 프로미스 테스트 (resolve)', () => {
  // Promise를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  return fetchBooks().then((books) => {
    expect(books).toHaveLength(7);
  });
});

test('fetchBooks 프로미스 테스트 (reject)', () => {
  // Promise를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  // 참고: https://jestjs.io/docs/asynchronous
  // 참고: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
  return expect(fetchBooks(2000, true)).rejects.toEqual({
    message: '알 수 없는 오류가 발생했습니다.',
  });
});

test('fetchBooks 비동기 함수 테스트', async () => {
  try {
    const books = await fetchBooks();
    expect(books).toHaveLength(7);
  } catch (error) {
    console.error(error.message);
  }
});
