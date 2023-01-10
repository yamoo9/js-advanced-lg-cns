const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styles, node) => {
  node.style.cssText = styles.reduce((cssRules, currentCssRule) => cssRules + currentCssRule, '');
  return node;
};

// HINT: curring function
// function declaration
// const $styled = function(node) {
//   return function(styles) {
//     node.style.cssText = styles.reduce(
//       (cssRules, currentCssRule) => cssRules + currentCssRule, 
//       ''
//     );
//     return node;
//   }
// }

// arrow function expression
const $styled = (node) => (styles) => {
  node.style.cssText = styles.reduce(
    (cssRules, currentCssRule) => cssRules + currentCssRule, 
    ''
  );
  return node;
}

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

describe('스타일 유틸리티 함수', ()=>{
  // styled 유틸리티
  test('styled 유틸리티 : styled`cssCode ${virtualNode}`', () => { 
    const updatedVNode = styled`
      ${virtualNode}
      color: #4caf51;
      background: #1f1910;
      margin: 0 auto;
      max-width: 1280px;
    `;

    expect(updatedVNode.style.cssText).toMatch(/margin/);
    expect(updatedVNode.style.cssText).toMatch(/max-width/i);
  });

  // $styled 유틸리티
  test('$styled 유틸리티 : $styled(virtualNode)`cssCode`', () => { 
    const updatedVNode = $styled(virtualNode)`
      color: #4caf51;
      background: #1f1910;
      margin: 0 auto;
      max-width: 1280px;
    `;

    expect(updatedVNode.style.cssText).toMatch(/margin/);
    expect(updatedVNode.style.cssText).toMatch(/max-width/i);
  });
});


