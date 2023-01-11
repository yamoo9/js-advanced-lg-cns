export const log = (message, cssStyles = 'font-weight: bold;') => {
  console.log(`%c${message}`, cssStyles);
};
