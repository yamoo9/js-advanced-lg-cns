/* 아래 ES5 코드를 ES6 코드로 변경합니다. ----------------------------------------------- */

function renderCard1(card) {
  return (
    '<div class="card">\
      <img src="' + card.image.src + '" class="card-img-top" alt="' + card.image.alt  + '" />\
      <div class="card-body">\
        <h5 class="card-title">' + card.title + '</h5>\
        <p class="card-text">' + card.description + '</p>\
        <a href="' + card.link.href + '" class="btn btn-primary">' + card.link.text + '</a>\
      </div>\
    </div>\
    '
  );
}

const renderCard2 = ({ 
  title, 
  description, 
  image: { src, alt }, 
  link: {href, text} 
}) =>
  `
    <div class="card">
      <img src="${src}" class="card-img-top" alt="${alt}" />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="${href}" class="btn btn-primary">${text}</a>      
      </div>
    </div>
  `;

function joinLine(string) {
  return string.replace(/(\s*\n\s*|\s*$|>+\s*<)/g, ($1) =>
    $1.match(/>+\s*</g) ? '><' : ''
  );
}

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */
// renderCard 렌더 유틸리티

describe('renderCard 유틸리티', () => {
  const cardInfo = {
    title: 'React 펀드멘탈',
    description:
      'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
    image: {
      src: 'react-fundamentals.webp',
      alt: 'React Fundamentals',
    },
    link: {
      href: '/react-fundamentals',
      text: 'React fundamentals',
    },
  };

  let rendered1 = renderCard1(cardInfo);

  let rendered2 = renderCard2(cardInfo);

  let expected = /* html */ `
    <div class="card">
      <img src="react-fundamentals.webp" class="card-img-top" alt="React Fundamentals" />
      <div class="card-body">
        <h5 class="card-title">React 펀드멘탈</h5>
        <p class="card-text">React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.</p>
        <a href="/react-fundamentals" class="btn btn-primary">React fundamentals</a>      
      </div>    
    </div>
  `;

  test('legacy: renderCard1(cardInfo) => expected(htmlCode)', () => {
    expect(joinLine(rendered1)).toBe(joinLine(expected));
  });

  test('modern: renderCard2(cardInfo) => expected(htmlCode)', () => {
    expect(joinLine(rendered2)).toBe(joinLine(expected));
  });
});
