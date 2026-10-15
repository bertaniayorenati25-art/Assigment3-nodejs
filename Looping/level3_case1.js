const height = 5;

console.log("=== Segitiga Siku-Siku ===");
for (let i = 1; i <= height; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("\n=== Segitiga Siku-Siku Terbalik ===");
for (let i = height; i >= 1; i--) {
    let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}