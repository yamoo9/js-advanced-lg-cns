import React from '../libs/react.js';
export default function Headline(_ref) {
  let {
    colorful
  } = _ref;
  return React.createElement("h1", {
    className: "headline",
    style: {
      color: colorful ? 'skyblue' : null
    }
  }, "\uC548\uB155! React + Babel \uD83D\uDE03");
}