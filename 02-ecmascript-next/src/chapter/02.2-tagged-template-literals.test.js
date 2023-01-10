const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (node, styles) => {
  if (typeof styles === 'string') {
    node.style.cssText = styles;
  }
  
  // node.style.cssText = styles;
  // CSS 스타일 규칙 객체 → CSS 스타일 문자화
  if (styles && typeof styles === 'object' && !Array.isArray(styles)) {
    // 배열의 메서드(reduce) 활용 [객체 → 배열]
    let updatedStyleString = Object.entries(styles).reduce((cssCode, currentValue) => {
      let key = currentValue[0];
      let value = currentValue[1];
      return `${cssCode}; ${key}: ${value}`;
    }, '');
    node.style.cssText = updatedStyleString.trim();
  }
  
  return node;
};

// curring function
const $styled = () => {
  return null;
}

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

describe('스타일 유틸리티 함수', ()=>{
  // 스타일 코드 작성 (cssMap)
  const customCssRules = {
    color: '#4caf51',
    background: '#1f1910',
    margin: '0 auto',
    'max-width': 1240,
  }

  // styled 유틸리티
  test('styled 유틸리티 : styled(virtualNode, cssCode)', () => { 
    const updatedVNode = styled(virtualNode, customCssRules);
    expect(updatedVNode.style.cssText).toMatch(/margin/);
    expect(updatedVNode.style.cssText).toMatch(/max-width/i);
  });

  // $styled 유틸리티
});


