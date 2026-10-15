const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const username = await rl.question('Masukkan Username: ');
  const password = await rl.question('Masukkan Password: ');

  if (username === 'admin' && password === '12345') {
    console.log('Login successful');

   } else if (username !== 'admin' && password === '12345') {
    console.log('Username salah');
   } else if (username === 'admin' && password !== '12345') {
    console.log('Password salah');
   } else {
    console.log('Username dan Password salah');
   }  

   rl.close();
}

main();