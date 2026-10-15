const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const hours = parseInt(await rl.question('Masukkan lama parkir (jam): '), 10);

  let fee = 0;

  if (hours <= 0) {
    fee = 0;
  } else if (hours === 1) {
    fee = 5000;
  } else {
    fee = 5000 + (hours - 1) * 3000;
  }

  if (fee > 20000) {
    fee = 20000;
  }

  console.log(`Biaya parkir: Rp ${fee}`);

  rl.close();
}

main();