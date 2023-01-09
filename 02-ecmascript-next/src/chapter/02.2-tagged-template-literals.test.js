const node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styles, node) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

const $styled = (node) => (styles) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// styled 유틸리티

// $styled 유틸리티
