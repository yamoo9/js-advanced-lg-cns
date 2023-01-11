// React World
// Component Types
// - Function

export default function Headline() {
  return (
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
}
