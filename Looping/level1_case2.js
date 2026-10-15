let count = 0;
let sum = 0;

console.log("=== Angka Genap Antara 1 dan 50 ===");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
    count++;
    sum += i; 
  }
}

console.log("----------------------------------");
console.log(`Banyaknya angka genap : ${count}`);
console.log(`Jumlah total (sum)    : ${sum}`);