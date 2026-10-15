const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 1000000;
function promptWithdrawal() {
  console.log(`\nSaldo Anda saat ini: Rp${balance.toLocaleString("id-ID")}`);
  rl.question("Masukkan jumlah penarikan (ketik 0 untuk keluar): Rp", (input) => {
    const amount = parseInt(input, 10);

  if (isNaN(amount)) {
      console.log("Input tidak valid. Masukkan angka.");
      promptWithdrawal();
      return;
    }
    
    if (amount === 0) {
      console.log("Terima kasih telah menggunakan layanan ATM.");
      rl.close();
      return;
    }

    if (amount < 0) {
      console.log("Error: Jumlah penarikan tidak boleh negatif!");
    } else if (amount > balance) {
      console.log("Error: Saldo tidak mencukupi!");
    } else {
      balance -= amount;
      console.log(`Penarikan berhasil: Rp${amount.toLocaleString("id-ID")}`);
    }

    promptWithdrawal();
  });
}