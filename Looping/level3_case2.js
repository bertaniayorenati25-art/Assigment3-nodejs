console.log("=================== TABEL PERKALIAN 1 - 10 ===================\n");
for (let row = 1; row <= 10; row++) {
  let line = "";
  for (let col = 1; col <= 10; col++) {
    const product = row * col;
    line += product.toString().padStart(4, " "); // Format grid rapi
  }
  console.log(line);
}