export const createId = function () {
  return Math.random().toString(36).substr(2, 16);
}
