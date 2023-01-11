export const SubjectItem = _ref => {
  let {
    subject: {
      href,
      content
    }
  } = _ref;
  return React.createElement("li", null, React.createElement("a", {
    href: href
  }, content));
};