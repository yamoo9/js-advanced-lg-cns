export const SubjectItem = ({ subject: { href, content } }) => (
  <li>
    <a href={href}>{content}</a>
  </li>
);
