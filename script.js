function sumSalaries(obj) {
  let result = 0;
  for (key in obj) {
    result += obj[key];
  }
  return result;
}