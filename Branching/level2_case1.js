const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const score = parseInt(await rl.question('Masukkan nilai siswa (0-100): '), 10);

  if (score >= 80 && score <= 100) {
    console.log('Grade: A');
  } else if (score >= 70 && score <= 79) {
    console.log('Grade: B');
  } else if (score >= 60 && score <= 69) {
    console.log('Grade: C');
  } else if (score >= 50 && score <= 59) {
    console.log('Grade: D');
  } else if (score >= 0 && score < 50) {
    console.log('Grade: E');
  } else {
    console.log('Nilai tidak valid');
  }

  rl.close();
}

main();