const headline = (
  <h1
    className="headline"
    onMouseEnter={(e) => {
      e.target.style.color = 'skyblue';
    }}
    onMouseLeave={(e) => {
      e.target.removeAttribute('style');
    }}
  >
    안녕! React + Babel 😃
  </h1>
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
  'Next.js',
];

const subjectList = (
  <ul className="learning-subjects">
    {subjects.map((subject, index) => (
      <li key={index}>{subject}</li>
    ))}
  </ul>
);

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);

// JSX = XML like syntax for ECMAScript
// JSX = JavaScript eXpression (value)
reactDomRoot.render(
  <React.StrictMode>
    {headline}
    {subjectList}
  </React.StrictMode>
);
