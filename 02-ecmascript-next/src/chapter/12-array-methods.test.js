/* 배열 메서드(Array Methods)는 데이터를 다룰 때 자주 사용됩니다. ------------------------------- */
import { fetchBooks, currencyKR } from './utils/index.js';

// -------------------------------------------------------------------------------------
// 도서 목록 가져오기
// -------------------------------------------------------------------------------------

// 프로미스
function getMyBooks() {
  return fetchBooks()
    .then((books) => {
      return books.map((book) => {
        book.price = currencyKR(book.price);
        return book;
      });
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

test('도서 목록 가져오기 (프로미스)', () => {
  return getMyBooks().then((books) => {
    expect(typeof books[0].price).toBe('string');
  });
});

// 비동기 함수
async function getBooks() {
  // 모든 도서 목록을 가져온 후, 목록을 순환하여 가격을 "원"화로 변경합니다.
  try {
    const books = await fetchBooks();
    return books.map((book) => {
      book.price = currencyKR(book.price);
      return book;
    });
  } catch (error) {
    // 통신에 실패한 경우 오류 메시지를 throw 합니다.
    throw new Error(error.message);
  }
}

test('도서 목록 가져오기 (비동기 함수)', async () => {
  const books = await getBooks();
  expect(typeof books[0].price).toBe('string');
});
