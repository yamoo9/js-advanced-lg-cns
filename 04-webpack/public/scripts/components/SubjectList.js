import { SubjectItem } from './SubjectItem.js';
export default function SubjectList(_ref) {
  let {
    subjects
  } = _ref;
  return React.createElement("ul", {
    className: "learning-subjects"
  }, subjects.map(subject => React.createElement(SubjectItem, {
    key: subject.id,
    subject: subject
  })));
}