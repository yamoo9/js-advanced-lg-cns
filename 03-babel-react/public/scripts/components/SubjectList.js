import { SubjectItem } from './SubjectItem.js';
export default function SubjectList() {
  const subjects = ['ECMAScript', 'TypeScript', 'Jest', 'Babel', 'React', 'Vue', 'Webpack', 'Vite', 'Next.js'];
  return React.createElement("ul", {
    className: "learning-subjects"
  }, subjects.map((subject, index) => React.createElement(SubjectItem, {
    content: subject
  })));
}