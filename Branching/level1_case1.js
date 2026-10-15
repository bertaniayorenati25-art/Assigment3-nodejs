const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const number = parseFloat(await rl.question('Masukkan angka: '));

  if (number > 0) {
    console.log('Positive');
  } else if (number < 0) {
    console.log('Negative');
  } else {
    console.log('Nol');
  }

  rl.close();
}