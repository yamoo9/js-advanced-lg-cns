export const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
