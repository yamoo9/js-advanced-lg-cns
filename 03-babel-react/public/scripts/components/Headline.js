export default function Headline() {
  return React.createElement("h1", {
    className: "headline",
    onMouseEnter: e => {
      e.target.style.color = 'skyblue';
    },
    onMouseLeave: e => {
      e.target.removeAttribute('style');
    }
  }, "\uC548\uB155! React + Babel \uD83D\uDE03");
}