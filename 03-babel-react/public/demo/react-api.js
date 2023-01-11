// React API

// HTML 표준에 명시된 HTML 요소 이름 (문자 값)
// div span table figure figcaption picture
// section artible nav ...
const headline = React.createElement(
  'h1',
  { 
    className: 'headline',
    onMouseEnter(e) {
      e.target.style.color = 'skyblue';
    },
    onMouseLeave(e) {
      e.target.removeAttribute('style');
    },
  },
  '안녕! React + Babel 😃'
);

const subjects = [
  'ECMAScript',
  'TypeScript',
  'Jest',
  'Babel',
  'React',
  'Vue',
  'Webpack',
  'Vite',
  'Next.js'
];

const subjectList = React.createElement(
  'ul', 
  {
    className: 'learning-subjects',
    children: subjects.map((subject, index) => (
      React.createElement('li', { key: index }, subject)
    ))
  },
);

// Creating React Element (Object)
// { type, key, props, ref, }

// container (Actual DOM Element Node)
const container = document.getElementById('root');


// React DOM API
// createRoot(container[, options])
const reactDomRoot = ReactDOM.createRoot(container);

// React.StrictMode
// React Component → React Element

reactDomRoot.render(
  React.createElement(React.StrictMode, null, headline, subjectList)
);

