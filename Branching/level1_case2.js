const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const number = parseInt(await rl.question('Masukkan angka: '), 10);

 if (number % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }

  rl.close();
}

main(); 