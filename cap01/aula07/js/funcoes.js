function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function compareNumbers(a, b) {
  //return a > b ? 1 : a < b ? -1 : 0;

  return a - b; // Mais elegante
}
console.log(compareNumbers(5, 1));
console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 3));

function acumulator(from, upTo) {
  var sum = 0;
  for (i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(acumulator(1, 100));
console.log(acumulator(10, 1000));
console.log(acumulator(100, 1000));
