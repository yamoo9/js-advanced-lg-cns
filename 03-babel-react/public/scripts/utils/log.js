export const log = function (message) {
  let cssStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'font-weight: bold;';
  console.log(`%c${message}`, cssStyles);
};