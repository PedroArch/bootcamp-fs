let upTO = parseInt(process.argv[2]);
let multiples = [];

for (let i = 1; i < upTO; i++) {
  if (i % 3 === 0) {
    multiples.push(i);
  }
}

console.log(multiples);
