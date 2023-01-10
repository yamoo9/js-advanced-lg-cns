// export 모듈 (기본, 이름이 부여된)

// numberWithComma 함수를 "기본 내보내기"로 내보냅니다.
// export default module

const numberWithComma = (n) => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export default numberWithComma;
