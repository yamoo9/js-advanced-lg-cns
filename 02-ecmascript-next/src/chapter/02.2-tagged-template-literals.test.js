const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styles, node) => {
  // styles 배열
  let cssRules = styles.reduce((cssRules, currentCssRule) => cssRules + currentCssRule, '');
  node.style.cssText = cssRules;

  return node;
};

// curring function
const $styled = () => {
  return null;
}

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

describe('스타일 유틸리티 함수', ()=>{
  // styled 유틸리티
  test('styled 유틸리티 : styled(virtualNode, cssCode)', () => { 
    const updatedVNode = styled`
      color: #4caf51;
      background: #1f1910;
      margin: 0 auto;
      max-width: 1280px;

      ${virtualNode}
    `;

    expect(updatedVNode.style.cssText).toMatch(/margin/);
    expect(updatedVNode.style.cssText).toMatch(/max-width/i);
  });

  // $styled 유틸리티
});


