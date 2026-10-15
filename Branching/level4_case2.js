const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


async function main() {
  const rl = readline.createInterface({ input, output });
  const totalPurchase = parseFloat(await rl.question('Masukkan total pembelian: Rp '));
  const isMemberInput = await rl.question('Apakah member? (true/false): ');
  const isMember = isMemberInput.toLowerCase() === 'true';
  const payment = parseFloat(await rl.question('Masukkan nominal pembayaran: Rp '));


  let discount = 0;
  if (isMember) {
    discount = 0.10 * totalPurchase;
  }

  const finalAmount = totalPurchase - discount;

  if (payment < finalAmount) {
    console.log('Insufficient payment');
  } else {
    const change = payment - finalAmount;
    console.log(`Total Tagihan Akhir: Rp ${finalAmount}`);
    console.log(`Uang Kembalian: Rp ${change}`);
  }

  rl.close();
}

main();