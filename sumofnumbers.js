const testNum = [1, 2, 3, 4, 5];

function sumFor(data) {
  let total = 0;
  for (const i of data) {
    total += i;
  }
  return total;
}

function sumWhile(data) {
  let i = 0;
  let total = 0;
  while (i < data.length) {
    total += data[i];
    i++;
  }
  return total;
}

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[data.length - 1] + sumRecursion(data.slice(0, data.length - 1));
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testNum));
console.log(sumWhile(testNum));
console.log(sumRecursion(testNum));
console.log(sumTheSimpleWay(testNum));
