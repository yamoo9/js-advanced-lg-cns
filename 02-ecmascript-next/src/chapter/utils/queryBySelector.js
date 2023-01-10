export function queryBySelectorAll(selector, context = document) {
  return context.querySelectorAll(selector);
}

export const queryBySelector = (...args) => queryBySelectorAll(...args)[0];
