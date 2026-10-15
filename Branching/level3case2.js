const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const totalPurchase = parseFloat(await rl.question('Masukkan total pembelian: Rp '));
  const isMemberInput = await rl.question('Apakah pelanggan member? (true/false): ');
  const isMember = isMemberInput.toLowerCase() === 'true';

  if (totalPurchase >= 100000 || isMember) {
    console.log('Free Shipping');
  } else {
    console.log('Shipping Fee Applies');
  }

  rl.close();
}

main(); 