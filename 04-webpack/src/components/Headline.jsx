export default function Headline({ colorful }) {
  return (
    <h1
      className="headline"
      style={{
        color: colorful ? 'skyblue' : null,
      }}
    >
      안녕! React + Babel 😃
    </h1>
  );
}
