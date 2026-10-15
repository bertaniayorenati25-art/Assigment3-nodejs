const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const totalPurchase = parseFloat(await rl.question('Masukkan total pembelian: Rp '));

  let discountPercentage = 0;

  if (totalPurchase >= 1000000) {
    discountPercentage = 0.20;

   } else if (totalPurchase >= 500000) {
    discountPercentage = 0.10;
   } else if (totalPurchase >= 250000) {
    discountPercentage = 0.05;  
   } else {
    discountPercentage = 0.0;
   }

   const discountAmount = totalPurchase * discountPercentage;
   const finalPrice = totalPurchase - discountAmount;

   console.log(`Diskon: ${discountPercentage * 100}%`);
   console.log(`Potongan harga: Rp ${discountAmount}`);
   console.log(`Harga akhir: Rp ${finalPrice}`);

   rl.close();
}

main();