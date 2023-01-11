import { SubjectItem } from './SubjectItem.js';
export default function SubjectList() {
  const subjects = [{
    id: 'subject-1',
    content: 'ECMAScript',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-2',
    content: 'TypeScript',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-3',
    content: 'Jest',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-4',
    content: 'Babel',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-5',
    content: 'React',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-6',
    content: 'Vue',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-7',
    content: 'Webpack',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-8',
    content: 'Vite',
    href: 'https://babeljs.io'
  }, {
    id: 'subject-9',
    content: 'Next.js',
    href: 'https://babeljs.io'
  }];
  return React.createElement("ul", {
    className: "learning-subjects"
  }, subjects.map(subject => React.createElement(SubjectItem, {
    key: subject.id
  }, React.createElement("a", {
    href: subject.href
  }, subject.content))));
}