export function updateCheckState(pos, arr) {
  const result = arr.map((item, index) => (index === pos ? !item : item));
  return result;
}
