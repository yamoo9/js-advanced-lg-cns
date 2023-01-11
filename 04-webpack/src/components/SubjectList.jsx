import { SubjectItem } from './SubjectItem';

export default function SubjectList({ subjects }) {
  return (
    <ul className="learning-subjects">
      {subjects.map((subject) => (
        <SubjectItem key={subject.id} subject={subject} />
      ))}
    </ul>
  );
}
